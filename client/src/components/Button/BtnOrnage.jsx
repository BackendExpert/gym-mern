import React from 'react'

const BtnOrnage = ({ type, btnvalue, onclick }) => {
  return (
    <button onclick={onclick} type={type} className='bg-orange-500 text-white py-2 px-4'>
        {btnvalue}
    </button>
  )
}

export default BtnOrnage