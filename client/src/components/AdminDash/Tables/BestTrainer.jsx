import React from 'react'
import { FaMedal } from "react-icons/fa6";

const BestTrainer = () => {
    return (
        <div className='overflow-hidden rounded-lg'>
            <table className='w-full rounded'>
                <thead className=''>
                    <tr className='w-full bg-orange-500 h-12'>
                        <th className='md:pl-8'>#</th>
                        <th className='md:table-cell hidden'>Username</th>
                        <th className='md:table-cell hidden'>Rank</th>
                        <th className='table-cell md:hidden'>Data</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr className='bg-[#151515] md:text-center h-16 border-b border-orange-500'>
                        <td className='font-semibold md:w-0 w-20 text-center'>1</td>
                        <td className='md:table-cell hidden'>jehan</td>
                        <td className="md:table-cell hidden max-w-64">
                            <div className="flex items-center gap-2">
                                <p>1</p>
                                <div><FaMedal className='fill-[#EFBF04]'/></div>
                            </div>
                        </td>
                        <td className='md:hidden table-cell py-6'>
                            <p className="">jehan</p>
                            <div className="flex items-center gap-2">
                                <p>1</p>
                                <div><FaMedal className='fill-[#EFBF04]'/></div>
                            </div>
                        </td>
                    </tr>
                    <tr className='bg-[#151515] md:text-center h-16 border-b border-orange-500'>
                        <td className='font-semibold md:w-0 w-20 text-center'>1</td>
                        <td className='md:table-cell hidden'>jehan</td>
                        <td className="md:table-cell hidden max-w-64">
                            <div className="flex items-center gap-2">
                                <p>1</p>
                                <div><FaMedal className='fill-[#C4C4C4]'/></div>
                            </div>
                        </td>
                        <td className='md:hidden table-cell py-6'>
                            <p className="">jehan</p>
                            <div className="flex items-center gap-2">
                                <p>1</p>
                                <div><FaMedal className='fill-[#C4C4C4]'/></div>
                            </div>
                        </td>
                    </tr>
                    <tr className='bg-[#151515] md:text-center h-16 border-b border-orange-500'>
                        <td className='font-semibold md:w-0 w-20 text-center'>1</td>
                        <td className='md:table-cell hidden'>jehan</td>
                        <td className="md:table-cell hidden max-w-64">
                            <div className="flex items-center gap-2">
                                <p>1</p>
                                <div><FaMedal className='fill-[#a05822]'/></div>
                            </div>
                        </td>
                        <td className='md:hidden table-cell py-6'>
                            <p className="">jehan</p>
                            <div className="flex items-center gap-2">
                                <p>1</p>
                                <div><FaMedal className='fill-[#a05822]'/></div>
                            </div>
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}

export default BestTrainer