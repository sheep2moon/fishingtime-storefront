import { P24BankElement } from "@stripe/react-stripe-js"
import { useMemo } from "react"

const p24Options = {
  style: {
    base: {
      fontFamily: "Inter, sans-serif",
      color: "#424270",
      backgroundColor: "#222",
      border: "1px solid #000",
      height: "",
      padding: "1rem",
    },
  },
}

const PaymentP24 = () => {
  return (
    <div className="mb-20 z-50 border-2 border-gray-200 p-2 rounded-md bg-slate-200">
      <h1>P24</h1>
      <P24BankElement options={p24Options} />
    </div>
  )
}

export default PaymentP24
