import { PaymentSession } from "@medusajs/medusa"
import Button from "@modules/common/components/button"
import { useCart } from "medusa-react"
import React, { useEffect, useState } from "react"
import ManualTestPaymentButton from "./ManualPaymentButton"
import PayPalPaymentButton from "./PayPalPaymentButton"
import PrzelewyPaymentButton from "./PrzelewyPaymentButton"
import StripePaymentButton from "./StripePaymentButton"

type PaymentButtonProps = {
  paymentSession?: PaymentSession | null
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ paymentSession }) => {
  const [notReady, setNotReady] = useState(true)
  const { cart } = useCart()

  useEffect(() => {
    setNotReady(true)

    if (!cart) {
      return
    }

    if (!cart.shipping_address) {
      return
    }

    if (!cart.billing_address) {
      return
    }

    if (!cart.email) {
      return
    }

    if (cart.shipping_methods.length < 1) {
      return
    }

    setNotReady(false)
  }, [cart])

  switch (paymentSession?.provider_id) {
    case "stripe":
      return (
        <StripePaymentButton session={paymentSession} notReady={notReady} />
      )
    case "manual":
      return <ManualTestPaymentButton notReady={notReady} />
    case "paypal":
      return (
        <PayPalPaymentButton notReady={notReady} session={paymentSession} />
      )
    case "stripe-przelewy24":
      return (
        <PrzelewyPaymentButton session={paymentSession} notReady={notReady} />
      )
    default:
      return <Button disabled>Wybierz metodę płatności</Button>
  }
}

export default PaymentButton
