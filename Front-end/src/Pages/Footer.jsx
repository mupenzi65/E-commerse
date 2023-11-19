import React from 'react'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <section className='bg-gray-900   mt-[120px]'>
     <div className="containe">
      <div className="flex items-center justify-between">
        <img src={logo} alt="" className='w-[84px] h-[82px]' />
        <p className='text-gray-400 text-center justify-center'>Designed and developed by Mupenzi Abillah</p>
      </div>
     </div>
    </section>
  )
}

export default Footer
