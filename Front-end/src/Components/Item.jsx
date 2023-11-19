import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProduct } from "../utils/api";
import { toast } from "react-toastify";
import axios from "axios";
import ProductSkeleton from "./ProductSkeleton";
import Rating from "@mui/material/Rating";
import ProductCard from "./ProductCard";
import useAuthenticate from "../hooks/useAuthenticate";

const Item = ({category}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {validatelogin}=useAuthenticate()

  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];


  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/products/products/${id}`
        );
        

        if (Array.isArray(res.data) ){
          setData(res.data[0]);
          setLoading(false);
    
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  
   
  const addTocart = () => {
    if(validatelogin()){

      const ids=cart.map((item)=>item.id)
      if(ids.includes(product.id)){
       return
      }
      else{
        dispatch({
          type: "ADD_TO_CART",
          cart: {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity:1,
            
          },
        });
        toast.success('Item added successfully')
      }
    }
  


  };

 

 


















  return (
    <>
      <div className=" containe">{loading && <ProductSkeleton />}</div>
      {data && (
        <div className="containe">
          <div className="md:flex ">
            <div className="h-full  basis-[50%] ">
              <img src={data?.image} className="object-cover" alt="" />
            </div>
            <div className="mt-3">
              <p className="font-bold text-2xl max-w-[400px]  capitalize mb-4 ">
                {data?.title}
              </p>
              <div className="flex">
                <Rating
                  className="mt-1"
                  name=""
                  defaultValue={5}
                  precision={5}
                  readOnly
                />
                <div className="mt-1">
                  <span className="text-center items-center ml-1 text-[]">
                    {data?.count} Reviews{" "}
                  </span>
                </div>
              </div>
              <p className="max-w-[550px] mt-3 font-medium">
                {data?.descriptions}
              </p>
              <p className="mt-5 font-bold text-xl">$ {data?.price}</p>
              <div className="mt-5">
                {/* <button
                  className="w-12 h-8 rounded-sm  bg-gray-200 mt-10 "
                  // onClick={handleArrowDown}
                >
                  &#8595;
                </button>
                <span className="ml-2">{1}</span>
                <button
                  className="w-12 h-8 rounded-sm  bg-gray-200 ml-1 mt-10 "
                  // onClick={handleArrowUp}
                >
                  &#8593;
                </button> */}
                <button className="w-[400px] border bg-slate-400 rounded-[4px] ml-3 bg-gradient-to-tl from-black text-white shadow-2xl p-1" onClick={addTocart} >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        
        </div>
      )}
    </>
  );
};

export default Item;
