import React from 'react'
import { FaDumbbell } from 'react-icons/fa'

const DashFooter = () => {
    const currentYear = new Date().getFullYear()
    
  return (
    <div className='text-white'>&copy; The <span className='text-orange-500'>FitFlex</span> | {currentYear} | Allright Reserved | Developed and Maintained by <a className='text-orange-500' href="https://www.linkedin.com/in/jehanweerasuriya/" target='_blank'>Developer</a></div>
  )
}

export default DashFooter