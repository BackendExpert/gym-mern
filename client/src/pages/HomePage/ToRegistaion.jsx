import React from 'react'

const ToRegistaion = () => {
    return (
        <div className='relative md:bg-[url(https://wallpapercave.com/wp/wp9820155.jpg)] bg-[url(https://wallpapercave.com/wp/wp4960982.jpg)] bg-cover bg-center md:h-96 h-full'>
            <div className='absolute inset-0 bg-black opacity-60'></div>
            <div className="text-center relative text-white xl:px-28 md:px-10 px-4 md:py-36 py-28">
                <h1 className="uppercase text-4xl font-semibold">registration now to get more deals</h1>
                <p className="uppercase text-xl tracking-[0.5rem]">Where health, beauty and fitness meet.</p>
                <div className="mt-4">
                    <a href="/signup">
                        <button className='bg-white/10 backdrop-blur-sm border-2 border-orange-500 py-2 px-8 duration-500 hover:bg-orange-500'>
                            Register Now and Get Amazing Deals
                        </button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ToRegistaion