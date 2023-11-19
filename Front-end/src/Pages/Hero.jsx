import React from 'react'
import img from '../assets/Frame 2.png'

const Hero = () => {

   





  return (
    <section className='mt-[10px'>
        <div className="containe">
            <div className="h-[500px] md:flex  items-center justify-between">
              <div className="bg-[#0084FE] text-center basis-[50%] md:h-[522px]">
              <h1 className='text-[30px] md:mt-[120px] font-bold md:leading-[80px] text-white ' style={{fontFamily:'Amiri,selif'}}>HOME FOR YOUR FAVOURITES</h1>
              <p className='text-[50px] text-white leading-10'>Summer Sales 50% OFF !</p>
            
            <button className='border solid border-gray- mt-10 items-start bg-gray-900 text-white rounded-3xl p-2'>
             Shop Now 
            </button>

              </div>
              <div className="">
                <img src={img} alt="" />
              </div>


















               
            </div>
        </div>




    </section>
  )
}

export default Hero