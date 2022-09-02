import { Popover, Transition } from "@headlessui/react"
import {
  useFeaturedProductsQuery,
  useNavigationCollections,
} from "@lib/hooks/use-layout-data"
import repeat from "@lib/util/repeat"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import clsx from "clsx"
import { chunk } from "lodash"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { RiArrowDropRightLine } from "react-icons/ri"

import { GiFishingPole, GiFishingNet } from "react-icons/gi"
import CollectionButton from "./CollectionButton"
import { useCustomNavCollections } from "../../../../lib/hooks/use-nav-collections"

const DropdownMenu = () => {
  const [open, setOpen] = useState("none")
  const { push } = useRouter()
  const { data: collections, isLoading: loadingCollections } =
    useNavigationCollections()
  // const { data: products, isLoading: loadingProducts } =
  //   useFeaturedProductsQuery()
  const collectionSections = useCustomNavCollections()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
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
                    <Link href="/shop" passHref>
                      <a className="relative flex h-full">
                        <Popover.Button
                          className={clsx(
                            "relative h-full flex items-center transition-all ease-out duration-200 p-4"
                          )}
                          onClick={() => push("/store")}
                        >
                          <CollectionButton
                            title={section.title}
                            icon={section.icon}
                          />
                        </Popover.Button>
                      </a>
                    </Link>

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
                      <div className="absolute top-full bg-slate-100 p-2 rounded-b-sm shadow-lg">
                        <Popover.Panel>
                          <ul className="min-w-[152px] max-w-[200px] pr-4 ">
                            {section.collections.map((collection) => {
                              return (
                                <div
                                  className="py-2 text-lg w-fit whitespace-nowrap"
                                  key={collection.id}
                                >
                                  <Link href={`/collections/${collection.id}`}>
                                    <a
                                      onClick={() => setOpen("none")}
                                      className="flex items-center"
                                    >
                                      <RiArrowDropRightLine />
                                      {collection.title}
                                    </a>
                                  </Link>
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
        {loadingCollections &&
          repeat(6).map((index) => (
            <div key={index} className="w-12 h-4 bg-gray-100 animate-pulse" />
          ))}
      </div>
    </div>
  )
}

export default DropdownMenu
