import { Popover, Transition } from "@headlessui/react"
import { useNavigationCollections } from "@lib/hooks/use-layout-data"
import repeat from "@lib/util/repeat"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { RiArrowDropRightLine } from "react-icons/ri"
import CollectionButton from "./CollectionButton"
import { useCustomNavCollections } from "../../../../lib/hooks/use-nav-collections"
import { useStore } from "../../../../lib/context/store-context"

const DropdownMenu = () => {
  const [open, setOpen] = useState("none")
  const { push } = useRouter()
  const collectionSections = useCustomNavCollections()
  const { selectCollection } = useStore()

  const handleSelectCollection = (id: string) => {
    setOpen("none")
    selectCollection(id)
  }

  return (
    <div className="h-full px-2">
      <div className="flex items-center h-full">
        <Link href="/store" passHref>
          <a className="flex bg-emerald-700 px-2 py-1 text-lime-200 items-center text-base ">
            Wszystkie produkty
          </a>
        </Link>
        {collectionSections &&
          collectionSections.map((section, index) => {
            return (
              <div
                className="relative h-full"
                key={index}
                onMouseEnter={() => setOpen(section.metaKey)}
                onMouseLeave={() => setOpen("none")}
              >
                <Popover className="h-full flex">
                  <>
                    <Popover.Button
                      className={clsx(
                        "relative h-full flex items-center transition-all ease-out duration-200 p-4 hover:bg-emerald-900"
                      )}
                      onClick={() => push("/store")}
                    >
                      <CollectionButton
                        title={section.title}
                        icon={section.icon}
                      />
                    </Popover.Button>

                    <Transition
                      show={open === section.metaKey ? true : false}
                      as={React.Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-full bg-emerald-700 rounded-b-sm shadow-lg shadow-slate-500">
                        <Popover.Panel>
                          <ul className="min-w-[152px] max-w-[260px]  ">
                            {section.collections.map((collection) => {
                              return (
                                <div
                                  className="py-2 text-lg w-full whitespace-nowrap cursor-pointer hover:bg-emerald-900 pr-4"
                                  key={collection.id}
                                  onClick={() =>
                                    handleSelectCollection(collection.id)
                                  }
                                >
                                  <span className="flex items-center ">
                                    <RiArrowDropRightLine />
                                    {collection.title}
                                  </span>
                                </div>
                              )
                            })}
                          </ul>
                        </Popover.Panel>
                      </div>
                    </Transition>
                  </>
                </Popover>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default DropdownMenu
