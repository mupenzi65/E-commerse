import React from 'react'

import logo from '../assets/logo.png'
import img from '../assets/imgi1.png'
import ProfileMenu from '../Components/ProfileCard'
import { Link, useNavigate } from 'react-router-dom'
import { useDataLayerValue } from '../Datalayer'

const Header = () => {
  const [{cart,user}]=useDataLayerValue()
  const navigate=useNavigate()
  return (
    <section className=''>
        <div className="containe ">
            <div className="flex md:gap-6 justify-between bg-[#0084FE] rounded-2xl mb-3 ">
            <Link to={'/'}>
              <div className="bg-white rounded-full">
              <img src={logo} alt="" className='md:w-[84px]  w-[60px] h-[60px] md:h-[82px]' />
              </div>
           
            </Link>
           
            <div className=" text-white flex overflow-x-auto md:flex gap-5    md:gap-[120px]">
                 
                <ul className='text-center   items-center justify-center mt-5 text-xl font-bold '>
                
                  <li className='md:flex hidden items-center justify-center'>
                      
                       <i className='bx bx-home text-center  ' style={{fontSize:30}}></i>
                        <Link to={'/'}><span className='ml-2'>Home</span></Link>
                        
                   </li>
             
                    
                </ul> 
               
           <ul className='text-center items-center justify-center mt-5 font-bold'>
                    <li className='flex items-center'>
                   <i className='bx bx-shopping-bag bx-flip-horizontal'style={{fontSize:30}} ></i>
                        <Link  className='text-[12px] md:text-[20px]' >Shopping</Link>
                     </li>
                </ul>
             

                <ul className='text-center items-center justify-center mt-5 font-bold '>
                     <li className='flex items-center'>
                    <i className='bx bxs-cart bx-tada ' style={{fontSize:30}} >
                      <span style={{position:"absolute",left:0,bottom:10}} className='bg-red-600 rounded-full text-[13px] px-[5px] py-[3px] text-white'>{cart?.length}</span>

                    </i>
                         <Link className='text-[12px] md:text-[20px]'  to={'/cart'}>Cart</Link>
                    </li>
                </ul>
               
                 <div className="items-center text-center justify-center mt-5" >
                    { user ? (<ProfileMenu />) : 
                    
                    <button className='bg-gray-500 rounded-[4px] shadow-2xl p-1 mr-2 w-[60px] md:w-[100px]' onClick={()=>navigate('/user/login')}  >Login</button>
                    
                    }
                </div> 
               
                
            </div>
            </div>
            

        </div>

    </section>




















































   
    // <section className='w-full  flex items-center '>
    //     <div className=" h-full containe    ">
    //         <div className="flex  gap-[110px]  ">
    //         <div className=" flex gap-[110px] justify-evenly  ">
    //           
                    
                   
    //             </ul>
    //            

    //         </div>
    //         <div className=" flex  gap-[112px]   ">
    //            
    //             
               
    //         </div>
            
           

    //         </div>
            
            
           
    //     </div>

    // </section>
  )
}

export default Header