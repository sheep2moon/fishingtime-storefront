import { P24BankElement } from "@stripe/react-stripe-js"
import { useMemo } from "react"

const p24Options = {
  style: {
    base: {
      fontFamily: "Inter, sans-serif",
      color: "#424270",
      backgroundColor: "#eee",
      border: "1px solid #000",
      fontSize: "2rem",
    },
  },
}

const PaymentP24 = () => {
  return (
    <div className="mb-60">
      <div className="z-50 border-2 border-gray-200 rounded-md bg-slate-200 p-2">
        <P24BankElement options={p24Options} />
      </div>
    </div>
  )
}

export default PaymentP24
