import { P24BankElement } from "@stripe/react-stripe-js"

const PaymentP24: React.FC = () => {
  return (
    <div className="mb-60 z-50">
      <h1>P24</h1>
      <P24BankElement />
    </div>
  )
}

export default PaymentP24
