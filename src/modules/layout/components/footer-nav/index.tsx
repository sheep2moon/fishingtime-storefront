import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import { useStore } from "../../../../lib/context/store-context"
import { useCustomNavCollections } from "../../../../lib/hooks/use-nav-collections"
import CountrySelect from "../country-select"

const FooterNav = () => {
  const { selectManyCollections } = useStore()
  const customCollections = useCustomNavCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8 w-full">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start w-full justify-around gap-2 ">
        <div>
          <Link href="/">
            <a className="text-xl-semi uppercase">Fishing Time</a>
          </Link>
        </div>
        <div className="text-small-regular flex">
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Kolekcje</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2 gap-4": (customCollections?.length || 0) > 4,
              })}
            >
              {customCollections?.map((c) => (
                <li key={c.metaKey}>
                  <button onClick={() => selectManyCollections(c.collections)}>
                    <a>{c.title}</a>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Medusa</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a
                  href="https://github.com/medusajs"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://docs.medusajs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dokumentacja
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/medusajs/nextjs-starter-medusa"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source code
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright 2022 Fishing Time
        </span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
      </div>
    </div>
  )
}

export default FooterNav
