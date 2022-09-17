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
import ChevronDown from "../../../common/icons/chevron-down"
import NavLink from "./NavLink"

const DropdownMenu = () => {
  const [open, setOpen] = useState("none")
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const { push } = useRouter()
  const collectionSections = useCustomNavCollections()
  const { selectCollection } = useStore()

  const handleSelectCollection = (id: string) => {
    setOpen("none")
    selectCollection(id)
  }

  const handleCategoriesLeave = () => {
    setCategoriesOpen(false)
    setOpen("none")
  }

  return (
    <div className="h-full px-2">
      <div className="flex items-center h-full">
        <div
          className="relative h-full"
          onMouseEnter={() => setCategoriesOpen(true)}
          onMouseLeave={handleCategoriesLeave}
        >
          <Popover className="h-full flex">
            <>
              <Popover.Button
                className={clsx(
                  "relative h-full flex items-center transition-all ease-out duration-200 gap-1 p-4 text-lg bg-emerald-700 border-l-2 border-r-2 border-emerald-900 shadow-sm shadow-emerald-900 "
                )}
                onClick={() => push("/store")}
              >
                Kategorie
                <ChevronDown />
              </Popover.Button>

              <Transition
                show={categoriesOpen}
                as={React.Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-full  text-black rounded-b-sm shadow-lg shadow-slate-500 border-l-2 border-emerald-900">
                  <Popover.Panel>
                    <ul className="min-w-[152px] max-w-[320px] ">
                      {collectionSections.map((section) => {
                        return (
                          <div
                            key={section.metaKey}
                            onMouseEnter={() => setOpen(section.metaKey)}
                            onMouseLeave={() => setOpen("none")}
                            className=" p-2 text-lg w-80 bg-slate-50 hover:bg-emerald-200 text-emerald-900 border-b "
                          >
                            <Popover>
                              <Popover.Button className="w-full">
                                <CollectionButton
                                  icon={section.icon}
                                  title={section.title}
                                />
                              </Popover.Button>
                              <Transition
                                show={open === section.metaKey ? true : false}
                              >
                                <div className="absolute left-full bg-slate-50  top-0 bottom-0 shadow-lg border-l border-emerald-900 w-full">
                                  <Popover.Panel>
                                    {section.collections.map((collection) => (
                                      <div
                                        className="py-2 text-lg w-full whitespace-nowrap cursor-pointer pr-4 border-b hover:bg-emerald-200"
                                        key={collection.id}
                                        onClick={() =>
                                          handleSelectCollection(collection.id)
                                        }
                                      >
                                        <span className="flex items-center px-2 ">
                                          {collection.title}
                                        </span>
                                      </div>
                                    ))}
                                  </Popover.Panel>
                                </div>
                              </Transition>
                            </Popover>
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
        <NavLink href="/store">Kontakt</NavLink>
        <NavLink href="/store">Regulamin</NavLink>
        <NavLink href="/store">Wysyłka</NavLink>
        <NavLink href="/store">Rabaty</NavLink>
        <NavLink href="/polityka-prywatnosci">Polityka Prywatności</NavLink>
        <NavLink href="/regulamin-sklepu">Regulamin</NavLink>

        {/* {collectionSections &&
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
          })} */}
      </div>
    </div>
  )
}

export default DropdownMenu
