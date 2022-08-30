import { PaymentSession } from "@medusajs/medusa"
import Radio from "@modules/common/components/radio"
import clsx from "clsx"
import React, { useEffect } from "react"
import PaymentBlik from "../payment-blik"
import PaymentP24 from "../payment-p24"
import PaymentStripe from "../payment-stripe"
import PaymentTest from "../payment-test"

type PaymentContainerProps = {
  paymentSession: PaymentSession
  selected: boolean
  setSelected: () => void
  disabled?: boolean
  index: number
}

const PaymentsDesc = [
  {
    title: "Pobranie",
    description: "Płatnośc przy odbiorze zamówienia",
  },
  {
    title: "Karta płatnicza",
    description: "Bezpieczna płatność kartą",
  },
  {
    title: "Blik",
    description: "Płatność blikiem za pomocą kodu",
  },
  {
    title: "Przelewy24",
    description: "Płatności internetowe",
  },
]

const PaymentContainer: React.FC<PaymentContainerProps> = ({
  paymentSession,
  selected,
  setSelected,
  disabled = false,
  index,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-y-4 border-b border-gray-200 last:border-b-0",
        {
          "bg-gray-50": selected,
        }
      )}
    >
      <button
        className={"grid grid-cols-[12px_1fr] gap-x-4 py-4 px-8"}
        onClick={setSelected}
        disabled={disabled}
      >
        <Radio checked={selected} />
        <div className="flex flex-col text-left">
          <h3 className="text-base-semi leading-none text-gray-900">
            {PaymentsDesc[index].title}
          </h3>
          <span className="text-gray-700 text-small-regular mt-2">
            {PaymentsDesc[index].description}
          </span>
          {selected && (
            <div className="w-full mt-4">
              <PaymentElement paymentSession={paymentSession} />
            </div>
          )}
        </div>
      </button>
    </div>
  )
}

const PaymentElement = ({
  paymentSession,
}: {
  paymentSession: PaymentSession
}) => {
  switch (paymentSession.provider_id) {
    case "stripe":
      return (
        <div className="pt-8 pr-7">
          <PaymentStripe />
        </div>
      )
    case "stripe-blik":
      return (
        <div className="pt-8 pr-7">
          <PaymentBlik />
        </div>
      )
    case "stripe-przelewy24":
      return (
        <div className="pt-8 pr-7">
          <PaymentP24 />
        </div>
      )
    case "manual":
      return process.env.NODE_ENV === "development" ? <PaymentTest /> : null
    default:
      return null
  }
}

export default PaymentContainer
