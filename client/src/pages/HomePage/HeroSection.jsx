import React from 'react'
import BtnOrnage from '../../components/Button/BtnOrnage'

const HeroSection = () => {
  return (
    <div className='relative md:bg-[url(https://wallpapercave.com/wp/wp13172124.jpg)] bg-[url(https://wallpapercave.com/wp/wp4960973.jpg)] bg-cover bg-center min-h-screen'>
        <div className='absolute inset-0 bg-black opacity-70'></div>
        <div className="relative text-center xl:pt-64 md:pt-96 pt-64">
            <div className="header-title">
                <p className="uppercase md:text-md text-xs text-white title-text tracking-[0.5rem] md:mb-6">shape your body</p>
                <h1 className="md:text-[100px] text-4xl uppercase pt-4">
                    <span className='text-white'>be</span> <span className='text-orange-500'>strong</span>
                </h1>
                <h1 className="md:text-[100px] text-4xl uppercase text-white md:mt-20">
                    <span>traning</span> <span>hard</span>
                </h1>
            </div>

            <div className="mb-96">
                <button className='py-4 text-white bg-orange-500 md:mt-20 mt-8 px-6'>Get More Info</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection