import React from "react"

type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "placeholder"
> & {
  value: number
  label?: string
  name?: string
}

const InputNumber = ({
  label,
  name,
  value,
  onChange,
  ...props
}: InputProps) => {
  return (
    <div className="flex items-center gap-2">
      {label && <label>{label}</label>}
      <input
        className="bg-white shadow-lg p-2 border border-light rounded-md w-fit max-w-[100px]"
        value={value}
        name={name}
        onChange={onChange}
        type="number"
        step={1}
        {...props}
      />
    </div>
  )
}

export default InputNumber
