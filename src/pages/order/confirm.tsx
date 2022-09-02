import { OrderService } from "@medusajs/medusa"
import { Elements, useStripe } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useCart, useCreateCart } from "medusa-react"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { medusaClient } from "../../lib/config"
import {
  CheckoutProvider,
  useCheckout,
} from "../../lib/context/checkout-context"
import { useStore } from "../../lib/context/store-context"
import Spinner from "../../modules/common/icons/spinner"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || "")

const ConfirmPayment: React.FC = () => {
  const router = useRouter()
  if (!router.isReady) return null
  const options = {
    clientSecret:
      typeof router.query.payment_intent_client_secret === "string"
        ? router.query.payment_intent_client_secret
        : "",
  }
  return (
    <CheckoutProvider>
      <Elements options={options} stripe={stripePromise}>
        <CheckPayment />
      </Elements>
    </CheckoutProvider>
  )
}

export default ConfirmPayment

export const CheckPayment = () => {
  const { cart } = useCart()
  const stripe = useStripe()
  const { onPaymentCompleted } = useCheckout()
  const [mutating, setMutating] = useState(false)
  const router = useRouter()
  const { resetCart } = useStore()

  useEffect(() => {
    console.log(`userCart: ${cart?.id}, routerQuery: ${router.query.cartId}`)
    if (cart?.id === router.query.cartId && !mutating) {
      setMutating(true)
      if (router.query.redirect_status === "succeeded") {
        onPaymentCompleted()
      } else {
        console.log("payment failed")
        router.push("/checkout")
      }
    }
  }, [cart, onPaymentCompleted, router, mutating])

  return (
    <div className="w-full h-full flex items-center justify-center gap-2">
      <Spinner />
      <h1>Przetwarzanie płatności...</h1>
      <h2>Nie opuszczaj tej strony.</h2>
    </div>
  )
}
