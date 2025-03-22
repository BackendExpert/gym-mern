import React from 'react'
import { productdata } from './ProductData'

const ProductsAll = () => {
    return (
        <div className="bg-[#0a0a0a]">
            <div className='xl:px-28 md:px-10 px-4'>
                <div className="text-white py-16">
                    <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8">
                        {
                            productdata.map((data, index) => {
                                return (
                                    <div className="bg-[#151515] py-8 rounded-xl" key={index}>
                                        <center><img src={data.img} alt="" className='h-40 w-auto' /></center>
                                        <div className="mt-4 px-4 text-center">
                                            <h1 className="uppercase text-lg font-semibold text-orange-500 text-center">{data.name}</h1>
                                            <p className="pt-4">{data.desc}</p>
                                        </div>
                                        <div className="px-4 mt-4">
                                            <div className="flex justify-between">
                                                <div className="uppercase text-xl font-semibold text-orange-500">$ {data.price}</div>
                                                <div className="">{data.stock}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="mt-8">
                        <center>
                            <a href="/signin">
                                <button className='bg-orange-500 text-white py-2 px-4 duration-500 hover:rounded-xl'>
                                    View More Products
                                </button>
                            </a>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsAll