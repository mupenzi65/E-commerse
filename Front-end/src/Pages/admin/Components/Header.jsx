import React from 'react'
import logo from '../../../assets/logo.png'
import img from '../../../assets/imgi1.png'
import { Link } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ProfileMenu from '../../../Components/ProfileCard'
const Header = () => {
  return (
    <section className=''>
    <div className='containe '>
        <div className='flex items-center justify-between z-10 bg-slate-500 w-full  gap-7'>
            <div className='md:flex hidden '>
            <Link to={'/admin/dashboard'}>
            <img src={logo} alt="" className='md:w-[84px] w-[124px] h-[94px] md:h-[82px]' />
            </Link>
            
       
            </div>
            <div className='md:hidden block'>
            <i
                  className="bx bx-menu bx-flip-horizontal"
                  style={{ color: "white", fontSize: 30 }}
                ></i>
            </div>
            <div className='flex'>
                <div className='flex relative'>
                <input type="text" name="" id="" placeholder='search dashboard' className='border border-gray-700 rounded-3xl px-2  p-2 md:w-[600px]'  />
                </div>
                <div className='absolute ml-[145px] md:ml-[478px] item-center justify-center '>
                    <button className='bg-blue-500 font-semibold text-white rounded-3xl md:w-[120px] p-2 '>Search</button>
                   
                </div>
                
            </div>
            <div className="flex  md:gap-8">
            <div className="md:flex hidden cursor-pointer items-center">
                <EmailIcon className='relative' sx={{fontSize:30}} />
                <span className='absolute  top-3  rounded-full bg-red-600 p-1 text-white w-7 ml-4 text-center text-[14px]'>3</span>
            </div>
            <div className="md:flex hidden cursor-pointer items-center">
                <NotificationsIcon className='relative' sx={{fontSize:30}} />
                <span className='absolute  top-3  rounded-full bg-red-600 p-1 text-white w-7 ml-4 text-center text-[14px]'>9+</span>
            </div>
            <div className="">
                <ProfileMenu />
            </div>
          

            </div>
           

        </div>

    </div>





    </section>
  )
}

export default Header