import React from 'react'
import { productdata } from './ProductData'

const ProductsAll = () => {
    return (
        <div className="bg-[#0a0a0a]">
            <div className='xl:px-28 md:px-10 px-4'>
                <div className="text-white py-16">
                    <div className="grid grid-cols-4 gap-4">
                        {
                            productdata.map((data, index) => {
                                return (
                                    <div className="bg-[#151515] p-4" key={index}>
                                        <img src={data.img} alt="" className='h-40 w-auto'/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsAll