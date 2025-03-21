import React from 'react'

const HeroAboutus = () => {
    return (
        <div className='relative bg-[url(https://wallpapercave.com/wp/wp2776921.jpg)] bg-cover bg-center min-h-[60vh]'>
            <div className='absolute inset-0 bg-black opacity-70'></div>
            <div className="relative text-white pt-64 xl:px-28 md:px-40 px-4 text-center">
                <h1 className="text-4xl">About Us | <span className='text-orange-500'>FitFlex</span></h1>
            </div>
        </div>
    )
}

export default HeroAboutus