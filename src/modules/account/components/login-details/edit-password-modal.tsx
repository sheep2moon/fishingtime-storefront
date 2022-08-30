import { medusaClient } from "@lib/config"
import { useAccount } from "@lib/context/account-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import { Customer } from "@medusajs/medusa"
import EditButton from "@modules/account/components/edit-button"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Modal from "@modules/common/components/modal"
import Spinner from "@modules/common/icons/spinner"
import { useUpdateMe } from "medusa-react"
import React, { useState } from "react"
import { useForm } from "react-hook-form"

type EditPasswordModalProps = {
  customer: Omit<Customer, "password_hash">
}

type FormValues = {
  new_password: string
  old_password: string
}

const EditPasswordModal: React.FC<EditPasswordModalProps> = ({ customer }) => {
  const { state, open, close } = useToggleState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const { mutate: update } = useUpdateMe()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      new_password: undefined,
      old_password: undefined,
    },
  })

  const { refetchCustomer } = useAccount()

  const submit = handleSubmit(async (data) => {
    setSubmitting(true)
    setError(undefined)

    if (data.old_password === data.new_password) {
      setSubmitting(false)
      setError("Nowe hasło musi się różnić od poprzedniego.")
      return
    }

    const passwordMatches = await medusaClient.auth
      .authenticate({ email: customer.email, password: data.old_password })
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })

    if (!passwordMatches) {
      setError("Stare hasło jest nieprawidłowe.")
      setSubmitting(false)
      return
    }

    update(
      { id: customer.id, password: data.new_password },
      {
        onSuccess: () => {
          setSubmitting(false)
          refetchCustomer()
          reset({
            new_password: undefined,
            old_password: undefined,
          })
          close()
        },
        onError: () => {
          setSubmitting(false)
          setError("Nie można teraz zmienić hasła, spróbuj później.")
        },
      }
    )
  })

  return (
    <div>
      <EditButton onClick={open} />
      <Modal isOpen={state} close={close}>
        <Modal.Title>Edytuj hasło</Modal.Title>
        <Modal.Body>
          <div className="flex flex-col gap-y-8">
            <Input
              label="Stare hasło"
              {...register("old_password", {
                required: "Stare hasło jest wymagane",
              })}
              type="password"
              autoComplete="password"
              errors={errors}
            />
            <Input
              label="Nowe hasło"
              {...register("new_password", {
                required: "Nowe hasło jest wymagane",
              })}
              type="password"
              autoComplete="new_password"
              errors={errors}
            />
          </div>
          {error && (
            <div className="text-rose-500 text-small-regular py-2">{error}</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="!bg-gray-200 !text-gray-900 !border-gray-200 min-h-0"
            onClick={close}
          >
            Anuluj
          </Button>
          <Button className="min-h-0" onClick={submit} disabled={submitting}>
            Zapisz
            {submitting && <Spinner />}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditPasswordModal
