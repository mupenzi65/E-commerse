
import React, { useState } from "react";
import { useDataLayerValue } from "../Datalayer";
import { toast } from "react-toastify";
import useAuthenticate from "../hooks/useAuthenticate";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import '../App.css'
const ProductCard = ({ product }) => {
  const [{ cart }, dispatch] = useDataLayerValue();
  const {validatelogin}=useAuthenticate()
  const navigate=useNavigate()
  
  
  
  
  
  
  
  const trancateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
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
    <div className="flex flex-wrap hover:border mt-5 rounded-xl hover:bg-gray-100 items-center justify-center">
      <div className="w-[300px] h-[420px]  group cursor-pointer ease-in duration-300 z-1 " onClick={()=> navigate(`/Products/${product.id}`)}  >
        <img
          src={product.image}
          alt=""
          className="w-full h-[200px] object-contain "
        />
        <div className="p-3 ">
          <div className="mb-5 h-12">
            <p className="text-xl text-gray-800 font-medium">
              {trancateString(product.title, 45)}
            </p>
          </div>
          <div className="">
            <p className="text-2xl font-bold">$ {product.price}</p>
          </div>
          <div className="flex gap-3 text-center items-center mt-5">
          <Rating
                  className="mt-1"
                  name=""
                  defaultValue={5}
                  precision={5}
                  readOnly
                />
          </div>
        
        </div>
      </div>
      <div className="flex absolute mt-[400px] mr-9 group items-left mb-3">
            <button
              className="rounded-3xl bg-gray-900 text-white z-0  h-7 px-2 hover:bg-gray-700 ease-in duration-200 "
              onClick={addTocart}
            
            >
              <span>{cart?.map((item)=>item.id).includes(product.id) ? "Added to cart" :"Add to cart"}</span>
            </button>
            
          </div>
    </div>
  );
};

export default ProductCard;
