import React from "react"

const PanelTitle = ({ children }: { children: React.FC | string }) => {
  return (
    <span className="border bg-emerald-900 border-emerald-900 w-full block px-1 rounded-sm text-slate-100  text-lg mb-4">
      {children}
    </span>
  )
}

export default PanelTitle
