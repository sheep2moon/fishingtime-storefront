import { CheckoutProvider } from "@lib/context/checkout-context"
import ChevronDown from "@modules/common/icons/chevron-down"
import Image from "next/image"
import Link from "next/link"
import CheckoutLoader from "../components/checkout-loader"
import CheckoutForm from "./checkout-form"
import CheckoutSummary from "./checkout-summary"
import logoImg from "../../../../public/logo3.svg"

const CheckoutTemplate = () => {
  return (
    <CheckoutProvider>
      <div className="bg-gray-100 relative small:min-h-screen">
        <div className="h-16 bg-white">
          <nav className="flex items-center h-full justify-between content-container">
            <Link href="/cart">
              <a className="text-small-semi text-gray-700 flex items-center gap-x-2 uppercase flex-1 basis-0">
                <ChevronDown className="rotate-90" size={16} />
                <span className="mt-px hidden small:block">
                  Powrót do koszyka
                </span>
                <span className="mt-px block small:hidden">Wstecz</span>
              </a>
            </Link>
            <Link href="/">
              <a className="text-xl-semi">
                <div className="flex w-52">
                  <Image src={logoImg} alt="logotyp sklepu" />
                </div>
              </a>
            </Link>
            <div className="flex-1 basis-0" />
          </nav>
        </div>
        <div className="relative">
          <CheckoutLoader />
          <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] gap-y-8 content-container gap-x-8 py-12 px-0 small:px-4">
            <CheckoutForm />
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </CheckoutProvider>
  )
}

export default CheckoutTemplate
