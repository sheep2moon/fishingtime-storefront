import { useState } from "react"
import { useCheckout } from "../../../../lib/context/checkout-context"
import Button from "../../../common/components/button"
import Spinner from "../../../common/icons/spinner"

const ManualTestPaymentButton = ({ notReady }: { notReady: boolean }) => {
  const [submitting, setSubmitting] = useState(false)

  const { onPaymentCompleted } = useCheckout()

  const handlePayment = () => {
    setSubmitting(true)

    onPaymentCompleted()

    setSubmitting(false)
  }

  return (
    <Button disabled={submitting || notReady} onClick={handlePayment}>
      {submitting ? <Spinner /> : "Checkout"}
    </Button>
  )
}

export default ManualTestPaymentButton
