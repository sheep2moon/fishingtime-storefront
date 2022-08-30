import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    console.log(e.message)

    setAuthError("An error occured. Please try again.")
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      <h1 className="text-large-semi uppercase mb-6">Stwórz konto klienta</h1>
      <p className="text-center text-base-regular text-gray-700 mb-4">
        Założ profil klienta aby robić zakupy jeszcze wygodniej.
      </p>
      <form className="w-full flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Imię"
            {...register("first_name", { required: "Imię jest wymagane" })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="Nazwisko"
            {...register("last_name", { required: "Nazwisko jest wymagane" })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="Email"
            {...register("email", { required: "Email jest wymagany" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="Telefon"
            {...register("phone")}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label="Hasło"
            {...register("password", {
              required: "Hasło jest wymagane",
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              Nieprawidłowe dane
            </span>
          </div>
        )}
        <span className="text-center text-gray-700 text-small-regular mt-6">
          Tworząc konto akceptujesz polityke prywatności sklepu{" "}
          <Link href="/content/privacy-policy">
            <a className="underline">Polityka prywatności</a>
          </Link>{" "}
          oraz{" "}
          <Link href="/content/terms-of-use">
            <a className="underline">Warunki korzystania</a>
          </Link>
          .
        </span>
        <Button className="mt-6">Dołącz</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        Masz już profil klienta?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Zaloguj sie
        </button>
        .
      </span>
    </div>
  )
}

export default Register
