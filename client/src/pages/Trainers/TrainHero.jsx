import React from 'react'

const TrainHero = () => {
    return (
        <div className='relative bg-[url(https://wallpapercave.com/wp/wp10391824.jpg)] bg-cover bg-center min-h-[60vh]'>
            <div className='absolute inset-0 bg-black opacity-70'></div>
            <div className="relative text-white pt-64 xl:px-28 md:px-40 px-4 text-center">
                <h1 className="text-4xl">Trainers | <span className='text-orange-500'>FitFlex</span></h1>
                <p className="">Login to System for Hire a Trainer</p>
            </div>
        </div>
    )
}

export default TrainHero