import { Dialog, Transition } from "@headlessui/react"
import { formatAmount, useCart } from "medusa-react"
import Link from "next/link"
import React, { Fragment } from "react"
import { BsCart3 } from "react-icons/bs"
import { useCartDropdown } from "../../../../lib/context/cart-dropdown-context"
import { useStore } from "../../../../lib/context/store-context"
import useEnrichedLineItems from "../../../../lib/hooks/use-enrich-line-items"
import { CalculatedVariant } from "../../../../types/medusa"
import Button from "../../../common/components/button"
import LineItemOptions from "../../../common/components/line-item-options"
import LineItemPrice from "../../../common/components/line-item-price"
import Trash from "../../../common/icons/trash"
import Thumbnail from "../../../products/components/thumbnail"
import CartItem from "./CartItem"

const CartSidebar = () => {
  const { cart, totalItems } = useCart()
  const items = useEnrichedLineItems()

  const { state, open, close } = useCartDropdown()
  return (
    <div>
      <button
        onClick={open}
        className="h-full flex items-center gap-1 relative w-12"
      >
        <BsCart3 className="text-3xl small:text-lg font-light" />
        <div className="flex items-center text-lg relative ">
          <span className="absolute -left-4 top-1  bg-emerald-900  h-6 w-6 flex items-center justify-center rounded-full text-white font-bold small:-left-1 small:top-0">
            {totalItems}
          </span>
        </div>
      </button>
      <Transition appear show={state} as={Fragment}>
        <Dialog as="div" className="relative z-[99999]" onClose={close}>
          {/* <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="right-0 opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-light bg-opacity-50 dark:bg-black/50" />
          </Transition.Child> */}

          <div className="fixed right-0 top-0 bottom-0 overflow-y-auto shadow-md shadow-black/50">
            <div className="flex h-screen items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="h-screen w-screen transform bg-light p-2 align-middle shadow-xl transition-all  md:max-w-[400px]">
                  <div className="h-full flex flex-col">
                    <Button
                      onClick={close}
                      className="mb-2"
                      variant="secondary"
                    >
                      Zamknij
                    </Button>
                    <h3 className="text-large-semi py-2 text-left ml-4 ">
                      Koszyk
                    </h3>
                    {cart && items?.length ? (
                      <>
                        <div className="overflow-y-scroll px-4 flex gap-4 flex-col no-scrollbar">
                          {items
                            .sort((a, b) => {
                              return a.created_at > b.created_at ? -1 : 1
                            })
                            .map((item) => (
                              <CartItem
                                region={cart.region}
                                key={item.id}
                                item={item}
                              />
                            ))}
                        </div>
                        <div className="p-4 mt-auto flex flex-col gap-y-4 text-small-regular">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700 font-semibold">
                              Łącznie
                            </span>
                            <span className="text-large-semi">
                              {formatAmount({
                                amount: cart.subtotal || 0,
                                region: cart.region,
                                includeTaxes: false,
                              })}
                            </span>
                          </div>
                          <Link href="/cart" passHref>
                            <a onClick={close}>
                              <Button>Przejdź do koszyka</Button>
                            </a>
                          </Link>
                        </div>
                      </>
                    ) : (
                      <div>
                        <div className="flex py-16 flex-col gap-y-4 items-center justify-center">
                          <div className="bg-gray-900 text-small-regular flex items-center justify-center w-6 h-6 rounded-full text-white">
                            <span>0</span>
                          </div>
                          <span>Twój koszyk jest pusty.</span>
                          <div>
                            <Link href="/sklep">
                              <a>
                                <span className="sr-only">
                                  Przejdź do wszystkich produktów
                                </span>
                                <Button onClick={close}>Przeglądaj</Button>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default CartSidebar
