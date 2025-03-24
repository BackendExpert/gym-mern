import React from 'react'

const RecentCheckins = () => {
    return (
        <div className='overflow-hidden rounded-lg'>
            <table className='w-full rounded'>
                <thead className=''>
                    <tr className='w-full bg-orange-500 h-12'>
                        <th className='md:pl-8'>#</th>
                        <th className='md:table-cell hidden'>Email</th>
                        <th className='md:table-cell hidden'>Check-In</th>
                        <th className='table-cell md:hidden'>Data</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr className='bg-[#151515] md:text-center h-16 border-b border-orange-500'>
                        <td className='font-semibold md:w-0 w-20 text-center'>1</td>
                        <td className='md:table-cell hidden'>jehanweerasuriya@123.com</td>
                        <td className='md:table-cell hidden max-w-64'>23/3/2025 10:45AM</td>
                        <td className='md:hidden table-cell py-6'>
                            <p className="">jehanweerasuriya@123.com</p>
                            <p className="">23/3/2025 10:45AM</p>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default RecentCheckins