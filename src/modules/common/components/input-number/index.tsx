import React from "react"

type InputProps = {
  label: string
  value: number
  name?: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputNumber = ({
  label,
  name,
  value,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <div className="flex items-center gap-2">
      <label>{label}</label>
      <input
        className="bg-white shadow-lg p-2 border border-light rounded-md w-fit max-w-[100px]"
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type="number"
        step={1}
      />
    </div>
  )
}

export default InputNumber
