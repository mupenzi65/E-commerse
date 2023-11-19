import React from 'react'
import img9 from '../assets/img9.png'
import { Link } from 'react-router-dom'
const EmtyCart = () => {
  return (
    <div className='containe'>
        <div className="w-full h-full ">

        <img src={img9} alt="" className='mx-auto w-[200px] 2xl:w-[400px] object-fill' />
        <h2 className=' text-center leading-5 text-[32px] w-full '>Oops! Your cart is Empty! </h2>
        <div className="flex gap-12 mt-5 mx-auto">

        <div className='w-1 h-[30px] items-center justify-center text-center ml-[200px] bg-black mt-5'></div>
       <div className='mt-7'>
          <p className='text-[18px] font-semibold'>I'm sorry , I'm afraid there's nothing here.</p>
          <p className='max-w-[580px] text-[18px] font-medium'>It appears that your shopping cart is empty. We're eagerly awaiting your money. Remember: the more you spend, the quicker we all get to buy Lamborghinis</p>
       </div>
        </div>
        <Link to={'/'}>
       <button className='mx-[220px] mt-5 bg-blue-500 text-white p-2 rounded-lg'>START SHOPPING</button>
        </Link>
        </div>
    </div>
  )
}

export default EmtyCart