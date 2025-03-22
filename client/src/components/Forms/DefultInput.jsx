import React from 'react'

const DefultInput = ({ type, name, value, required, placeholder, onChange }) => {
  return (
    <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={!!required}
        onChange={onChange}
        className='
            h-12 
            bg-transparent
            w-full 
            border-b 
            border-orange-500 
            pl-2 
            duration-500 
            placeholder:text-orange-500
            focus:outline-none 
            focus:border-orange-500            
        '
    />
  )
}

export default DefultInput