import React, { useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ProductsMenu from './ProductsMenu';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
import RateReviewSharpIcon from '@mui/icons-material/RateReviewSharp';
import PaidSharpIcon from '@mui/icons-material/PaidSharp';
import SellSharpIcon from '@mui/icons-material/SellSharp';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
const Options = () => {
    const [MenuProducts,setMenuProducts]=useState(false)

  


    

  return (
    <div className="ml-4 mt-5  w-full  border-r border-gray-700 ">
        <Link to={'/admin/dashboard'}>
        <div className="cursor-pointer hover:bg-slate-400 rounded-2xl ">
        <DashboardIcon sx={{fontSize:30}} />
        <span className=' ml-2 text-gray-200 text-[20px] font-bold'>Dashboard</span>
        </div>
        </Link>
      
        <div className="cursor-pointer hover:bg-slate-400 rounded-2xl mt-5 " onClick={()=>setMenuProducts((prev)=>!prev)}>
        <InventoryIcon sx={{fontSize:30}} />
        <span  className=' ml-2 text-[20px] font-bold text-gray-200' >Products</span>
        <ArrowDropDownIcon sx={{fontSize:40}} />
        </div>
        <div className="">
        {MenuProducts &&(<ProductsMenu />)}
        </div>
        <div className="cursor-pointer hover:bg-slate-400 rounded-2xl mt-5 ">
        <ShoppingCartSharpIcon sx={{fontSize:30}} />
        <span className='text-gray-200 ml-2 text-[20px] font-bold'>Orders</span>
        </div>
        <div className="cursor-pointer hover:bg-slate-400 rounded-2xl mt-5 ">
        <PeopleSharpIcon sx={{fontSize:30}} />
        <span className='text-gray-200 ml-2 text-[20px] font-bold'>Customers</span>
        </div>
        <div className="cursor-pointer hover:bg-slate-400 rounded-2xl mt-5 ">
        <BarChartSharpIcon sx={{fontSize:30}} />
        <span className='text-gray-200 ml-2 text-[20px] font-bold'>Statistics</span>
        </div>
        <div className="cursor-pointer hover:bg-slate-400 rounded-2xl mt-5 ">
        <RateReviewSharpIcon sx={{fontSize:30}} />
        <span className='text-gray-200 ml-2 text-[20px] font-bold'>Reviews</span>
        </div>
       
        <div className="cursor-pointer hover:bg-slate-400 rounded-2xl mt-5 ">
        <PaidSharpIcon sx={{fontSize:30}} />
        <span className='text-gray-200 ml-2 text-[20px] font-bold'>Transactions</span>
        </div>
     
       
        <div className="cursor-pointer hover:bg-slate-400 rounded-2xl mt-5 ">
        <SellSharpIcon sx={{fontSize:30}} />
        <span className='text-gray-200 ml-2 text-[20px] font-bold'>Sellers</span>
        </div>
        <div className="cursor-pointer hover:bg-slate-400 rounded-2xl mt-5 ">
        <SettingsApplicationsSharpIcon sx={{fontSize:30}} />
        <span className='text-gray-200 ml-2 text-[20px] font-bold'>Settings</span>
        </div>
        <div className="cursor-pointer hover:bg-slate-400 rounded-2xl mt-10 ">
        <LogoutOutlinedIcon sx={{fontSize:30}} />
        <span className='text-red-800 ml-2 text-[20px] font-bold'>Logout</span>
        </div>

      
    

    </div>
  )
}

export default Options