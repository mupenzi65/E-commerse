import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import countries from "i18n-iso-countries";
import { Select, MenuItem } from "@mui/material";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import visa from '../../../assets/visa.svg'
import jcb from '../../../assets/jcb.svg'
import mastecard from '../../../assets/mastercard.svg'
import union from '../../../assets/unionpay.svg'
import discover from '../../../assets/discover.svg'
import paypal from '../../../assets/paypal (1).svg'
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../../../Datalayer";
import { trancateString } from "../../../utils/common";




const Checkout = () => {
  const [selectedCountry, setSelecteCountry] = useState("");
  const [{ cart }, dispatch] = useDataLayerValue();
  const selectCountryHandler = (value) => setSelecteCountry(value);
  const [Total, setTotals] = useState(0);

  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);

  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

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
  }, []);









  return (
    <section className="containe">
      <div className="flex">
        <div className="basis-[40%]">
          <img src={logo} alt="" className="w-[72px] " />
        </div>
        <div className="flex">
          <div className="mt-5 w-8 h-8 bg-green-500 text-center rounded-full  ">
            <p className="text-white text-center mx-auto  text-[22px] ">
              &#10003;
            </p>
          </div>
          <div className="mt-6 ml-2">
            <p>Shopping cart</p>
          </div>
          <div className=" mt-9 ml-3  w-[120px] h-1 bg-green-500"></div>
          <div className="flex mt-5">
            <p className="border rounded-full w-8 h-8 text-center  ml-2 mx-1 p-1 border-green-500 text-green-500 ">
              2
            </p>
            <p className="mt-1">Checkout</p>
          </div>
          <div className=" mt-9 ml-3  w-[120px] h-1 bg-gray-200"></div>
          <div className="flex mt-5">
            <p className="border rounded-full w-8 h-8 text-center  ml-2 mx-1 p-1 border-gray-200 text-gray-500 ">
              2
            </p>
            <p className="mt-1">Finish</p>
          </div>
        </div>
      </div>
      <section className="bg-gray-100 overflow-auto shadow-xl  h-[850px]">
        <div className="flex">
            <div className="basis-[60%]">
            <div className="">
          <p className="pt-10 ml-10">Billing address</p>
        </div>
        <div className="mt-5 ml-10">
          <p>First name and Last name</p>
          <input
            type="text"
            name=""
            id=""
            className="border border-blue-700 rounded-[4px] w-[400px] mt-3"
          />
        </div>
        <div className="mt-5 ml-10">
          <p>Email address</p>
          <input
            type="email"
            name=""
            id=""
            className="border border-blue-700 rounded-[4px] w-[400px] mt-3"
          />
        </div>
        <div className="mt-5 ml-10">
          <p>Country</p>
          <Select
            style={{ width: "400px", height: "30px", border: "solid 1px blue" }}
            value={selectedCountry}
            onChange={(e) => selectCountryHandler(e.target.value)}
          >
            {!!countryArr?.length &&
              countryArr.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
          </Select>
          <div className="mt-5  ">
            <div className="flex">
              <div className="">
                <p>State/city</p>
                <input
                  type="email"
                  name=""
                  id=""
                  className="border border-blue-700 rounded-[4px] w-[200px] mt-3"
                />
              </div>
              <div className=" ml-12">
                <p>Zip/Postal code</p>
                <input
                  type="email"
                  name=""
                  id=""
                  className="border border-blue-700 rounded-[4px] w-[150px] mt-3"
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="font-bold">Payment Method</p>
            <div className="mt-2 flex  gap-[90px] border w-[400px] border-blue-500 px-2">
                <div className="mt-2">
               
                <input type="radio" name="radio" id="" />
                <label htmlFor="radio" className="ml-2 text-center">Credit card</label>

                </div>
                <div className="flex gap-1">
                    <img src={visa} alt="" />
                    <img src={mastecard} alt="" />
                    <img src={discover} alt="" />
                    <img src={jcb} alt="" />
                    <img src={union} alt="" />
                </div>
            </div>
          </div>
          <div className="mt-5 ">
          <p>Card Number</p>
          <input
            type="email"
            name=""
            id=""
            className="border border-blue-700 rounded-[4px] w-[400px] mt-1"
          />
        </div>
        <div className="mt-5  ">
            <div className="flex">
              <div className="">
                <p>Expiration Date</p>
                <p></p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border px-3 border-blue-700 rounded-[4px] w-[100px] mt-3"
                  placeholder="month "
                />
              </div>
              <div className="mt-6 ml-3">
                <input
                  type="text"
                  name=""
                  id=""
                  className="border px-3 border-blue-700 rounded-[4px] w-[80px] mt-3"
                  placeholder="year "
                />
              </div>
              <div className=" ml-12">
                <p>Security code</p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-blue-700 rounded-[4px] px-3 w-[150px] mt-3"
                  placeholder="three digits"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex  justify-between border h-[50px] w-[400px] border-blue-500 px-2">
                <div className="mt-2">
               
                <input type="radio" name="radio" id="" />
                <label htmlFor="radio" className="ml-2 text-center">Paypal</label>

                </div>
                <div className="flex gap-1">
                    <img src={paypal} className="object-fill" alt="" />
               
                </div>
            </div>
            <div className="mt-3 block">

            <small className="block mb-2">by clicking the buttons you agree to the   <spa className="  font-bold underline cursor-pointer" >terms and conditions</spa></small>
            <button className="w-[400px] border bg-green-500 rounded-[4px] bg-gradient-to-tl from-black text-white shadow-xl p-1">Place order</button>
            </div>
        </div>

            </div>
            <div className="mt-[100px] max-h-[500px] border w-[400px]">
                <div className="flex items-center">

               <i class='bx bxs-cart mt-2 ml-10 '></i>
               <span className="text-center ml-2 mt-2">Cart summary</span>
               <Link to={'/cart'} className="mt-2">
               <span className="text-blue-500 mt-3 ml-1"><a href="">(edit)</a></span>
               </Link>
                </div>
                <div>
                <div className=" mx-2 mt-3 overflow-auto max-h-[300px]    ">
                  { cart?.map((item)=>(
                    <>
                    
                    
                      <div className="flex mx-2 gap-3 mt-1 ">
                      <span>{item.quantity}</span>
                      <span className="min-w-[270px]">{trancateString(item.title, 30)}</span>
                      <span>$ {item.price*item.quantity}</span>


                      </div>
                    
                    
                    
                     
                    
                   
                    <div className="border border-b-[0.5] border-gray-200 "></div>
                    </>
                    
                    
                  )) }
                   </div>
                </div>
                <div className="mt-[100px] mx-3 ">
                  <p className="font-bold">Sub Total: <span>$ {(Total).toFixed(2)}</span></p>
                </div>
            </div>

        </div>
      
      </section>
    </section>
  );
};

export default Checkout;
