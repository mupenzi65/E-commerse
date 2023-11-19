import React from "react";
import landing from "../../../assets/landing.png";
import LogIn from "../Components/LogIn";

const Login = () => {
  return (
    <>
      <section>
          <div className="flex">
          <div className="w-full h-full flex   bg-gray-900  from-black relative  ">
            <img
              src={landing}
              className="w-full h-[650px] object-cover mix-blend-overlay "
              alt=""
            />
          </div>
          <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2  ">
          <div className=" ">
             <LogIn />
          </div>

          </div>

          </div>
         
         
       
      </section>
    </>
  );
};

export default Login;
