import React from 'react'

const RecentOrder = ({order}) => {
  return (
    <>
    <div className="containe">

    <div className="flex   mt-3 justify-between">
        <p className='text-xl font-semibold text-gray-600 ' >{order.id}</p>
        <p className='text-xl font-semibold text-gray-600 '>{order.name}</p>
        <p className='text-xl font-semibold text-gray-600 '>{order.email}</p>
        <p className='text-xl font-semibold text-gray-600 '>$ {order.price}</p>
        <p className='text-xl px-7 mx-2 w-[129px]    font-semibold text-green-600 '>{order.status}</p>
        <p className='text-xl font-semibold text-gray-600 '>{order.date}</p>
        
    </div>
    <div className='w-full border-b border mt-1 h-0  border-gray-300'></div>
    </div>
    </>
  )
}

export default RecentOrder