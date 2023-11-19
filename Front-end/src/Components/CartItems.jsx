import React, { useEffect, useState } from "react";
import { trancateString } from "../utils/common";
import DeleteIcon from "@mui/icons-material/Delete";
import Product from "../Pages/Product";
import { useDataLayerValue } from "../Datalayer";
import { toast } from "react-toastify";

const CartItems = ({ item, Total, setTotals}) => {
  const [{ cart }, dispatch] = useDataLayerValue();
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState();






  
  
  useEffect(() => {
    const findTotal = () => {
      const price = cart.map((item) => item.price*item.quantity);
      var subTotal=0;
      price.forEach((item)=>{
            subTotal+=item
      })
      setTotals(subTotal)
      
    };
    findTotal();
  }, [cart]);

 
 
 
 
 
  const handleArrowUp = () => {
    
    dispatch({
      type:"UPDATE_CART_ITEM",
      id:item.id,
      name:"increment"

    })









  
  };
 
 
 
 
 
 
  const handleArrowDown = () => {

    if (item.quantity !== 1) {
      dispatch({
        type:"UPDATE_CART_ITEM",
        id:item.id,
        name:"decrement"
  
      })
  

        

  
    }
  };

  useEffect(() => {
    setTotal((item.quantity * item.price).toFixed(2));
  }, [cart]);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: item.id,
    });
    toast.success("Removed successdully");
  };


  




























  return (
    <div className="">
      <div className="flex border-r ">
        <div className="w-[80px] h-[100px] mb-2 ">
          <img
            src={item?.image}
            className="w-[60px]   object-fill"
            alt="image"
          />
        </div>
        <div className="">
          <p className="max-w-[230px] min-w-[230px]">
            {trancateString(item.title, 60)}
          </p>
        </div>
        <div className="items-center justify-center h-full'">
          <p className=" max-w-[70px] min-w-[70px]  mt-10">$ {item?.price}</p>
        </div>
        <div className="ml-[70px] max-w-[80px] min-w-[80px] ">
          <button
            className="w-6 h-5 rounded-sm  bg-gray-200 mt-10 "
            onClick={handleArrowDown}
          >
            &#8595;
          </button>
          <span className="ml-2">{item?.quantity}</span>
          <button
            className="w-6 h-5 rounded-sm  bg-gray-200 ml-1 mt-10 "
            onClick={handleArrowUp}
          >
            &#8593;
          </button>
        </div>
        <div className="">
          <p className=" max-w-[70px] min-w-[70px]  mt-10 ml-[90px]">{total}</p>
        </div>
        <div className="mt-10 ml-3 cursor-pointer" onClick={removeFromBasket}>
          <DeleteIcon sx={{ color: "red" }} />
        </div>
      </div>
      <div className="border border-b-[0.5] border-gray-100 "></div>
    </div>
  );
};

export default CartItems;
