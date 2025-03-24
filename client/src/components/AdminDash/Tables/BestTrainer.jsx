import React from 'react'

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
                        <td className='md:table-cell hidden max-w-64'>1</td>
                        <td className='md:hidden table-cell py-6'>
                            <p className="">jehan</p>
                            <p className="">1</p>
                        </td>
                    </tr>
                    <tr className='bg-[#151515] md:text-center h-16 border-b border-orange-500'>
                        <td className='font-semibold md:w-0 w-20 text-center'>1</td>
                        <td className='md:table-cell hidden'>jehan</td>
                        <td className='md:table-cell hidden max-w-64'>2</td>
                        <td className='md:hidden table-cell py-6'>
                            <p className="">jehan</p>
                            <p className="">2</p>
                        </td>
                    </tr>
                    <tr className='bg-[#151515] md:text-center h-16 border-b border-orange-500'>
                        <td className='font-semibold md:w-0 w-20 text-center'>1</td>
                        <td className='md:table-cell hidden'>jehan</td>
                        <td className='md:table-cell hidden max-w-64'>3</td>
                        <td className='md:hidden table-cell py-6'>
                            <p className="">jehan</p>
                            <p className="">3</p>
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}

export default BestTrainer