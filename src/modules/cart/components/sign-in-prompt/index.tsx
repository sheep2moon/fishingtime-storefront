import Button from "@modules/common/components/button"
import Link from "next/link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-start justify-between">
      <div>
        <h2 className="text-xl-semi">Masz konto?</h2>
        <p className="text-base-regular text-gray-700 mt-2">
          Zaloguj się dla wygodniejszych zakupów.
        </p>
      </div>
      <div>
        <Link href="/account/login">
          <a>
            <Button variant="secondary">Zaloguj się</Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
