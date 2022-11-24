import useToggleState from "@lib/hooks/use-toggle-state"
import { createContext, useContext, useEffect, useState } from "react"

interface CartDropdownContext {
  state: boolean
  open: () => void
  close: () => void
}

export const CartDropdownContext = createContext<CartDropdownContext | null>(
  null
)

export const CartDropdownProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { state, close, open } = useToggleState()

  return (
    <CartDropdownContext.Provider value={{ state, close, open }}>
      {children}
    </CartDropdownContext.Provider>
  )
}

export const useCartDropdown = () => {
  const context = useContext(CartDropdownContext)

  if (context === null) {
    throw new Error(
      "useCartDropdown must be used within a CartDropdownProvider"
    )
  }

  return context
}
