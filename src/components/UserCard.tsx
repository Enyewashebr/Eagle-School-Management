import Image from 'next/image'
import React from 'react'

const UserCard = ({type}: {type: string}) => {
  return (
    <div className='rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]'>
      <div className='flex justify-between items-center'>
        <span className='bg-white text-[10px] rounded-full px-2 py-1 text-green-600'>2025/26</span>
        <Image src="/more.png" alt="" width={20} height={20} className='float-right cursor-pointer' />
      </div>
      <h1 className='text-2xl font-semibold my-4'>6450</h1>
      <h2 className='text-sm font-medium text-gray-500'>{type}</h2>
    </div>
  )
}

export default UserCard

