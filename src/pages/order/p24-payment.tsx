import { OrderService } from "@medusajs/medusa"
import { useStripe } from "@stripe/react-stripe-js"
import { useCart } from "medusa-react"
import React, { useEffect } from "react"
import { medusaClient } from "../../lib/config"
import {
  CheckoutProvider,
  useCheckout,
} from "../../lib/context/checkout-context"

const P24Return: React.FC = () => {
  return (
    <CheckoutProvider>
      <>
        <div>Czekaj...</div>
        <Content />
      </>
    </CheckoutProvider>
  )
}

export default P24Return

export const Content = () => {
  const { cart } = useCart()
  const { onPaymentCompleted } = useCheckout()
  useEffect(() => {
    if (cart?.id) {
      medusaClient.orders
        .retrieveByCartId(cart.id)
        .then((order) => {
          console.log(order)
        })
        .catch((error) => {
          console.log(error)
          onPaymentCompleted()
        })
    }
  }, [])

  return <div>Content</div>
}
