import { PaymentSession } from "@medusajs/medusa"
import { useElements, useStripe } from "@stripe/react-stripe-js"
import { useCart, useOrder } from "medusa-react"
import { useEffect, useState } from "react"
import { useCheckout } from "../../../../lib/context/checkout-context"
import Button from "../../../common/components/button"
import Spinner from "../../../common/icons/spinner"

const BlikPaymentButton = ({
  session,
  notReady,
}: {
  session: PaymentSession
  notReady: boolean
}) => {
  const [disabled, setDisabled] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )

  const { cart } = useCart()
  const { onPaymentCompleted } = useCheckout()

  const stripe = useStripe()
  const order = useOrder(cart?.id || "")

  console.log(order)

  useEffect(() => {
    if (!stripe) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
    console.log(stripe)
  }, [stripe])

  console.log(session.data)

  const handlePayment = async () => {
    if (!stripe || !cart || !order) {
      return
    }

    await stripe
      .confirmP24Payment(session.data.client_secret as string, {
        payment_method: {
          billing_details: {
            name:
              cart.billing_address.first_name +
              " " +
              cart.billing_address.last_name,
            address: {
              city: cart.billing_address.city ?? undefined,
              country: cart.billing_address.country_code ?? undefined,
              line1: cart.billing_address.address_1 ?? undefined,
              line2: cart.billing_address.address_2 ?? undefined,
              postal_code: cart.billing_address.postal_code ?? undefined,
              state: cart.billing_address.province ?? undefined,
            },
            email: cart.email,
            phone: cart.billing_address.phone ?? undefined,
          },
        },
        return_url: `http://localhost:8000/order/confirm?cartId=${cart.id}`,
      })
      .then(({ error, paymentIntent }) => {
        console.log("Zobacz Blik payment button 68")

        if (error) {
          const pi = error.payment_intent

          if (
            (pi && pi.status === "requires_capture") ||
            (pi && pi.status === "succeeded")
          ) {
            onPaymentCompleted()
          }

          setErrorMessage(error.message)
          return
        }

        if (
          (paymentIntent && paymentIntent.status === "requires_capture") ||
          paymentIntent.status === "succeeded"
        ) {
          return onPaymentCompleted()
        }

        return
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <>
      <Button
        disabled={true}
        // disabled={submitting || disabled || notReady}
        onClick={handlePayment}
      >
        {/* {submitting ? <Spinner /> : "Zamówienie"} */}W przyszłości
      </Button>
      {errorMessage && (
        <div className="text-red-500 text-small-regular mt-2">
          {errorMessage}
        </div>
      )}
    </>
  )
}

export default BlikPaymentButton
