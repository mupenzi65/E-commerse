import React, { useState } from 'react'
import axios from 'axios'



const Categories = ({category,setCategory,products, setProducts}) => {
   
const [keyword,setKeyword]=useState('')   
   


const handleAll=async()=>{
    try {
        const res=await axios.get("https://fakestoreapi.com/products")
        if(Array.isArray(res.data)){
            setProducts([])
            setProducts(res.data)
            setCategory('All')
        }
      
     
    } catch (error) {
        console.error(error)
    }
}

const handleJewerely= async(key)=>{
   

    try {
       
        const res=await axios.get(`https://fakestoreapi.com/products/category/${key}`)
        if(Array.isArray(res.data)){
             setCategory(key)
            setProducts([])
            setProducts(res.data)
            console.log(products)
        }
      
        
    } catch (error) {
       console.error(error)
    }

}


    
  
  return (
    <div className="basis-[60%]  border-r border-gray-500 mt-12  w-full">
    <h5 className='text-xl font-bold text-blue-500'>Categories</h5>
        <div className={`ml-5  flex items-center hover:bg-gray-100 rounded-2xl mr-3 p-5 ${category=='All'&&'bg-gray-100'} `}  onClick={handleAll}>
        <i class='bx bxs-store bx-flip-horizontal' style={{fontSize:30}} ></i>
        <span className='text-xl text-gray-400 font-semibold cursor-pointer ml-2 mt-3 ' >All</span>
        </div>
        <div className={`ml-5  flex items-center hover:bg-gray-100 rounded-2xl mt-3 mr-3 p-5 ${category=='Men\'s clothing'&&'bg-gray-100'} `} onClick={()=>setCategory('Men\'s clothing')}>
        <i class='bx bx-male' style={{fontSize:30}}></i>
        <span className='text-xl text-gray-400 font-semibold cursor-pointer ml-2 mt-3' >Men's clothing</span>
        </div>
        <div className={`ml-5  flex items-center hover:bg-gray-100 rounded-2xl mt-3 mr-3 p-5 ${category=='Women\'s clothing'&&'bg-gray-100'} `} onClick={()=>setCategory('Women\'s clothing')} >
        <i class='bx bx-female' style={{fontSize:30}}></i>
        <span className='text-xl text-gray-400 font-semibold cursor-pointer ml-2 mt-3 '>women's clothing</span>
        </div>
        <div className={`ml-5  flex items-center hover:bg-gray-100 rounded-2xl mt-3 mr-3 p-5 ${category=='Kids\'s clothing'&&'bg-gray-100'} `} onClick={()=>setCategory('Kids\'s clothing')}>
        <i class='bx bx-child'style={{fontSize:30}}> </i>
        <span className='text-xl text-gray-400 font-semibold cursor-pointer mt-3 ml-2 '>Kido's clothing</span>
        </div>
        <div className={`ml-5  flex items-center hover:bg-gray-100 rounded-2xl mt-3 mr-3 p-5 ${category=='jewerely'&&'bg-gray-100'} `} onClick={()=>handleJewerely("jewelery")}>
        <i class='bx bx-diamond'style={{fontSize:30}} ></i>
        <span className='text-xl text-gray-400 font-semibold cursor-pointer ml-2 mt-3 ' >Jewelery</span>
        </div>
        <div className={`ml-5  flex items-center hover:bg-gray-100 rounded-2xl mt-3 mr-3 p-5 ${category=='Electronics'&&'bg-gray-100'} `} onClick={()=>handleJewerely('electronics')}>
        <i class='bx bxs-devices' style={{fontSize:30}} ></i>
        <span className='text-xl text-gray-400 font-semibold cursor-pointer   ml-2 '>Electronics</span>
        </div>
    </div>
  )
}

export default Categories