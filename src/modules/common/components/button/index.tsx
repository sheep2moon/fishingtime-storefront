import Spinner from "@modules/common/icons/spinner"
import clsx from "clsx"
import React from "react"

type ButtonProps = {
  isLoading?: boolean
  variant?: "primary" | "secondary" | "alternative"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  className,
  isLoading = false,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "w-full uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50",
        {
          "text-white bg-emerald-900 hover:bg-emerald-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 focus:outline-none":
            variant === "primary",
          "text-gray-900 bg-slate-200 font-bold shadow-md shadow-slate-400 border-gray-900 hover:bg-gray-100":
            variant === "secondary",
          "py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-slate-200  border border-gray-200 hover:bg-slate-300 hover:text-emerald-900 focus:z-10 focus:ring-4 focus:ring-gray-200":
            variant === "alternative",
        },
        className
      )}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export default Button
