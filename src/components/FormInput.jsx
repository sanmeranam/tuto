import React from 'react'

export default function FormInput({ label, value, onChange, type = 'text'}) {
  return (
    <div>
        <p><label>{label}</label></p>
        <input type={type} value={value} onChange={(e) => {
            onChange(e.target.value)
        }} />
    </div>
  )
}
