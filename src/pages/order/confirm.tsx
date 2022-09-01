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
        console.log("calling payment complete")

        onPaymentCompleted()
      } else {
        console.log("payment failed")
        router.push("/checkout")
      }
    }
  }, [cart, onPaymentCompleted, router, mutating])

  return <div>Przetwarzanie płatności</div>
}
