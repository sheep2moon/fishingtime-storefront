import { Disclosure } from "@headlessui/react"
import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { useStore } from "@lib/context/store-context"
import useCountryOptions from "@lib/hooks/use-country-options"
import ChevronDown from "@modules/common/icons/chevron-down"
import Search from "@modules/common/icons/search"
import X from "@modules/common/icons/x"
import { useCollections, useMeCustomer } from "medusa-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import ReactCountryFlag from "react-country-flag"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { useNavigationCollections } from "../../../../lib/hooks/use-layout-data"
import { useCustomNavCollections } from "../../../../lib/hooks/use-nav-collections"
import logoImg from "../../../../../public/logo3.svg"
import CollectionLink from "../../../common/components/CollectionLink"
import { titleToHandle } from "../../../../lib/util/transform-titles-links"

const MainMenu = () => {
  // const { collections } = useCollections()
  const { customer } = useMeCustomer()
  const { countryCode } = useStore()
  // const { data: collections, isLoading: loadingCollections } =
  //   useNavigationCollections()

  const collectionSections = useCustomNavCollections()

  const countries = useCountryOptions()

  const {
    close,
    screen: [_, setScreen],
  } = useMobileMenu()

  const setScreenCountry = () => setScreen("country")
  const setScreenSearch = () => setScreen("search")

  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center justify-between w-full border-b border-gray-200 py-4 px-6">
        <div className="flex-1 basis-0">
          <button
            className="flex items-center gap-x-2"
            onClick={setScreenCountry}
          >
            <ReactCountryFlag countryCode={countryCode || "us"} svg />
          </button>
        </div>
        <div>
          <Image src={logoImg} alt="logotyp sklepu" />
        </div>
        <div className="flex-1 basis-0 flex justify-end">
          <button onClick={close}>
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-6 flex-1 flex flex-col justify-between p-6">
        {process.env.FEATURE_SEARCH_ENABLED && (
          <button
            className="bg-gray-50 flex items-center px-4 py-2 gap-x-2 text-gray-500"
            onClick={setScreenSearch}
          >
            <Search size={24} />
            <span placeholder="Search products" className="text-base-regular">
              Szukaj produktów
            </span>
          </button>
        )}

        <div className="flex flex-col flex-1 text-large-regular text-gray-900">
          <ul className="flex flex-col gap-y-2">
            <li className="bg-gray-50 p-4">
              <Link href="/sklep?kategoria=all">
                <a>
                  <button
                    className="flex items-center justify-between w-full"
                    onClick={close}
                  >
                    <span className="sr-only">Idź do sklepu</span>
                    <span>Przeglądaj wszystkie produkty</span>
                    <ChevronDown className="-rotate-90" />
                  </button>
                </a>
              </Link>
            </li>
            <div className="flex flex-col gap-2 justify-start">
              {collectionSections &&
                Object.keys(collectionSections).map((key) => (
                  <Disclosure key={key}>
                    {({ open }) => (
                      <div className="flex flex-col  justify-start">
                        <Disclosure.Button className="text-left p-4 flex justify-between border-l-2 border-primary shadow-md">
                          <div className="flex gap-2 items-center">
                            {collectionSections[key].icon}
                            {collectionSections[key].title}
                          </div>
                          {open ? (
                            <ChevronDown className="-rotate-180" />
                          ) : (
                            <ChevronDown />
                          )}
                        </Disclosure.Button>
                        {open && (
                          <Disclosure.Panel className="flex flex-col gap-4 p-2 pl-6">
                            <CollectionLink
                              href={`/sklep?kategoria=${key}`}
                              title="Pokaż Wszystko"
                              onClick={close}
                            />
                            {collectionSections[key].collections.map(
                              (collection) => (
                                <CollectionLink
                                  href={`/sklep?kategoria=${key}&podkategoria=${collection.handle}`}
                                  key={collection.id}
                                  title={collection.title}
                                  onClick={close}
                                />
                              )
                            )}
                          </Disclosure.Panel>
                        )}
                      </div>
                    )}
                  </Disclosure>
                ))}
            </div>
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-y-8 text-small-regular">
            {!customer ? (
              <div className="flex flex-col gap-y-4">
                <span className="text-gray-700 uppercase">Konto</span>
                <Link href={`/account/login`} passHref>
                  <a>
                    <button
                      className="flex items-center justify-between border-b border-gray-200 py-2 w-full"
                      onClick={close}
                    >
                      <span className="sr-only">
                        Przejdź do strony logowania
                      </span>
                      <span className="normal-case">Zaloguj się</span>
                      <ChevronDown className="-rotate-90" />
                    </button>
                  </a>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-y-4">
                <span className="text-gray-700 uppercase">Zalogowany jako</span>
                <Link href={`/account`} passHref>
                  <a>
                    <button
                      className="flex items-center justify-between border-b border-gray-200 py-2 w-full"
                      onClick={close}
                    >
                      <span className="sr-only">Przejdź do konta</span>
                      <span className="normal-case">{customer.email}</span>
                      <ChevronDown className="-rotate-90" />
                    </button>
                  </a>
                </Link>
              </div>
            )}
            <div className="flex flex-col gap-y-4">
              <span className="text-gray-700 uppercase">Dostawa</span>
              <button
                className="flex items-center justify-between border-b border-gray-200 py-2"
                onClick={setScreenCountry}
              >
                <span className="sr-only">Kliknij by wybrać kraj dostawy</span>
                <div className="flex items-center gap-x-2">
                  <ReactCountryFlag countryCode={countryCode || "us"} svg />
                  <span className="normal-case">
                    Wysyłka do{" "}
                    {countries?.find((c) => c.country === countryCode)?.label}
                  </span>
                </div>
                <ChevronDown className="-rotate-90" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainMenu
