import React from "react"

const PanelTitle = ({ children }: { children: React.FC | string }) => {
  return (
    <span className="bg-emerald-900 w-full block p-1 text-slate-50 text-lg mb-4">
      {children}
    </span>
  )
}

export default PanelTitle
