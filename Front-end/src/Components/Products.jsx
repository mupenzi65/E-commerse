import React, { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";

import { Link, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

import axios from "axios";


const Products = () => {
  const datas = [1, 2, 3, 4, 5, 6];

  const [isloading,setIsloading]  = useState(true)
  const [data, setData] =useState([]);
  const navigation = useNavigate()
   
useEffect(()=>{

  const fetch = async()=>{

try{
  const resp = await axios.get("http://localhost:8000/api/products/allproducts")
if(Array.isArray(resp.data)){
  if(resp.data.length==0){
    setIsloading(false)
  }else{
    setData(resp.data)
    setIsloading(false)
  }
}


}catch(error){
  console.error(error)
}
  }
  fetch()
},[])
  


  return (
    <section className="mt-[160px]">
      <div className="containe">
        <div className="flex items-center">
          <a href="">
            <h3 className="text-xl font-bold border-b border-solid border-gray-900  ">
              Hot deals
            </h3>
          </a>
          <input
            type="text"
            name=""
            id="search"
            className="border-gray-700 border rounded-lg ml-10 w-[344px] h-8 items-center customs"
           
          />
        </div>

        {isloading && (
          <div className="flex gap-[120px] flex-wrap ">
            {datas.map((x,i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        )}
        {!isloading && data.length==0 &&(<>
        <h3>NO DATA AVAILABLE FOR NOW</h3>
        </>)}
        <div className="flex gap-[10px] flex-wrap">
          {data.slice(0,8).map((product , i) => (
            <ProductCard product={product} key={product.id} />
          ))}
        
        </div>
        <div className="mt-10 flex items-center">
          <Link to="/Products">
            <span className="text-2xl text-gray-900 font-bold border-solid border-b border-gray-800 ">See More </span>
           
          </Link>
          <span><i className='bx bx-right-arrow-alt bx-tada'style={{fontSize:30}} ></i></span>
        </div>
      </div>
    </section>
  );
};

export default Products;
