import React, { useEffect, useState } from "react";
import img8 from "../assets/img8.png";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDataLayerValue } from "../Datalayer";
import CartItems from "../Components/CartItems";
import EmtyCart from "../Components/EmtyCart";
const Cart = () => {
  const [{ cart }, dispatch] = useDataLayerValue();

  const [Total, setTotals] = useState(0);
  const navigate=useNavigate()

  

  return (
    <section>
      <div className="containe">
        <div className="flex ">
          <img src={img8} alt="" className="w-full h-[200px] " />

          <div className="absolute w-[100px] ">
            <Link to={"/"}>
              <img src={logo} alt="" className="cursor-pointer" />
            </Link>
          </div>
          <div className="absolute  text-center  text-blue-900  top-[10%]">
            <div className="w-full h-full mx-[220px] ">
              <a
                href=""
                className="text-slate-800 mx-auto text-center justify-center items-center"
              >
                Home/Your cart
              </a>
              <h1 className="text-[50px] font-bold text-center justify-center items-center ">
                Your cart <span>({cart?.length})</span>{" "}
              </h1>
            </div>
          </div>
        </div>
        {cart?.length > 0 ? (
          <div className="div">
            <div className="mt-5">
              <p>
                You are $ 10 away from free shipping.{" "}
                <span className="text-red-600 font-bold ">
                  <a href="">
                    Keep Shopping <span>&gt;</span>
                  </a>
                </span>
              </p>
            </div>
            <div className="flex">
              <div className="mt-3 basis-[60%] w-full h-full ">
                <div className="flex bg-gray-200 gap-[19px] h-[30px] rounded-2xl px-2  text-black font-semibold ">
                  <ul className="ml-[80px]">
                    <li>
                      <a href="">item</a>
                    </li>
                  </ul>
                  <ul className="ml-[170px]">
                    <li>
                      <a href="">Price</a>
                    </li>
                  </ul>
                  <ul className="ml-[90px]">
                    <li>
                      <a href="">Quantity</a>
                    </li>
                  </ul>
                  <ul className="ml-[80px]">
                    <li>
                      <a href="">Total</a>
                    </li>
                  </ul>
                </div>
                <div>
                  {cart?.map((item) => (
                    <CartItems item={item} Total={Total} setTotals={setTotals}  />
                  ))}
                </div>
              </div>
              <div className="border basis-[40%] rounded-2xl h-[330px] ml-5 border-blue-500">
                <h2 className="text-center mt-2">ORDER SUMMARY</h2>
                <div className="flex justify-between mr-5 mt-3 ml-2">
                  <p>Subtotal:</p>
                  <span>$ {Total}</span>
                </div>
                <div className="flex justify-between mr-5 mt-8 ml-2">
                  <p>Shipping:</p>
                  <span>$ {20}</span>
                </div>
                <div className="flex justify-between mr-5 mt-8 ml-2">
                  <p>Est.Sales tax:</p>
                  <span>*TBD</span>
                </div>
                <hr />
                <div className=" text-white font-bold h-[120px] mt-8 bg-blue-500 rounded-xl">
                  <div className="flex justify-between">
                    <p className="ml-3">Total:</p>
                    <span className="mr-3">${Total+20}</span>
                  </div>
                  <button className="text-[12px] bg-orange-700 p-1 mt-4 rounded-[4px] mx-[140px]" onClick={()=>navigate('/checkout')}>
                    PROCEED TO CHECKOUT
                  </button>
                  <Link to={'/'}>
                  <p className="text-[12px] mx-[145px] mt-5 underline ">
                    <a href="">CONTINUE SHOPPING</a>
                  </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <EmtyCart />
        )}
      </div>
    </section>
  );
};

export default Cart;
