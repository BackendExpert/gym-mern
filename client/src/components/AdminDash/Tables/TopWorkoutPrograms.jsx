import React from 'react'

const TopWorkoutPrograms = () => {
    return (
        <div className='overflow-hidden rounded-lg'>
            <table className='w-full rounded'>
                <thead className=''>
                    <tr className='w-full bg-orange-500 h-12'>
                        <th className='md:pl-8'>#</th>
                        <th className='md:table-cell hidden'>Programme</th>
                        <th className='md:table-cell hidden'>Trainer</th>
                        <th className='table-cell md:hidden'>Data</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr className='bg-[#151515] md:text-center h-16 border-b border-orange-500'>
                        <td className='font-semibold md:w-0 w-20 text-center'>1</td>
                        <td className='md:table-cell hidden'>10 Pushups</td>
                        <td className='md:table-cell hidden max-w-64'>Jehan</td>
                        <td className='md:hidden table-cell py-6'>
                            <p className="">jehan</p>
                            <p className="text-orange-500">10 Pushups</p>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default TopWorkoutPrograms