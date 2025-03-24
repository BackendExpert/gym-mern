import React from 'react'

const TrainerActLog = () => {
    return (
        <div className='overflow-hidden rounded-lg'>
            <table className='w-full rounded'>
                <thead className=''>
                    <tr className='w-full bg-orange-500 h-12'>
                        <th className='md:pl-8'>#</th>
                        <th className='md:table-cell hidden'>Username</th>
                        <th className='md:table-cell hidden'>Activity</th>
                        <th className='md:table-cell hidden'>Date</th>
                        <th className='table-cell md:hidden'>Data</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr className='bg-[#151515] md:text-center h-16 border-b border-orange-500'>
                        <td className='font-semibold md:w-0 w-20 text-center'>1</td>
                        <td className='md:table-cell hidden'>jehan</td>
                        <td className='md:table-cell hidden max-w-64'>Start new WorkOut for New Commers </td>
                        <td className='md:table-cell hidden'>02/04/2025 10:40AM</td>
                        <td className='md:hidden table-cell'>
                            <p className="">jehan</p>
                            <p className="">Start new WorkOut for New Commers</p>
                            <p className="">02/04/2025 10:40AM</p>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default TrainerActLog