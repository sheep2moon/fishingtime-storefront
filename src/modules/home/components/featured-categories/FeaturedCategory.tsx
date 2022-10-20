import React from "react"

type FeaturedCategoryProps = {
  to: string
  children: React.ReactNode
}

const FeaturedCategory = ({ to, children }: FeaturedCategoryProps) => {
  return (
    <div className="p-2 bg-emerald-900 relative rounded-sm">
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] rounded-sm bg-contain opacity-20" />
      <div className="z-10 bg-emerald-900 flex items-center h-10 text-slate-50 justify-center text-xl">
        {children}
      </div>
    </div>
  )
}

export default FeaturedCategory
