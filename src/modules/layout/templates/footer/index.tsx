import Link from "next/link"
import { SiGooglemaps } from "react-icons/si"
import { GiPhone } from "react-icons/gi"

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
        {/* <div className="flex items-center w-28 h-32 aspect-[3/1] relative">
            <Link href="/">
              <a>
                <Image
                  src="/store-logo.svg"
                  layout="fill"
                  alt="logotyp sklepu"
                  objectFit="contain"
                />
              </a>
            </Link>
          </div> */}

        <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-medium">Godziny otwarcia</p>
            <div className="mt-4">
              <ul className="flex flex-col mb-2">
                <li className="grid grid-cols-2 text-sm">
                  <span className="font-semibold">Poniedziałek:</span>
                  8:00-16:00
                </li>
                <li className="grid grid-cols-2 text-sm">
                  <span className="font-semibold">Wtorek:</span>
                  8:00-16:00
                </li>
                <li className="grid grid-cols-2 text-sm">
                  <span className="font-semibold">Środa:</span>
                  8:00-16:00
                </li>
                <li className="grid grid-cols-2 text-sm">
                  <span className="font-semibold">Czwartek:</span>
                  8:00-16:00
                </li>
                <li className="grid grid-cols-2 text-sm">
                  <span className="font-semibold">Piątek:</span>
                  8:00-16:00
                </li>
                <li className="grid grid-cols-2 text-sm">
                  <span className="font-semibold">Sobota:</span>
                  8:00-14:00
                </li>
                <li className="grid grid-cols-2 text-sm">
                  <span className="font-semibold">Niedziela:</span>
                  Nieczynne
                </li>
              </ul>
              <span className="font-semibold ">
                <span className="w-3 h-3 bg-emerald-700 inline-block mr-1"></span>
                Po zamknięciu sklep otwarty na telefon
              </span>
            </div>
          </div>

          <div>
            <p className="font-medium">Kontakt</p>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col">
                <div className="font-bold flex items-center gap-2">
                  <GiPhone />
                  Telefon:
                </div>
                <span className="tracking-wider">726 539 114</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 font-bold">
                  <SiGooglemaps />
                  Sklep stacjonarny:
                </div>
                <span className="">Garbów, ul. Młyńska 6</span>
              </div>
            </div>
          </div>

          <div>
            <p className="font-lg">Informacje</p>

            <nav className="mt-4 flex flex-col space-y-2 text-md text-gray-900">
              <Link href="/polityka-prywatnosci">
                <a>Polityka Prywatności</a>
              </Link>
              <Link href="/regulamin-sklepu">
                <a>Regulamin</a>
              </Link>
              <Link href="/kontakt">
                <a>Kontakt</a>
              </Link>
            </nav>
          </div>

          <div>
            <p className="font-medium">Odwiedź nas na</p>

            <nav className="mt-4 flex flex-col space-y-2 text-md text-gray-900">
              <a
                className="hover:opacity-75 flex items-center gap-1"
                href="https://www.facebook.com/profile.php?id=100036785661608"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span> Facebook </span>
              </a>
            </nav>
          </div>
        </div>

        <p className="text-xs text-gray-500 w-full text-center">
          &copy; 2022 Fishing Time
        </p>
      </div>
    </footer>
  )
}

export default Footer
