import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import StepOne from "../Components/StepOne";
import Header from "../Components/Header";
import { useDataLayerValue } from "../../../Datalayer";

const Products = () => {
  const [{ user,seller }, dispatch] = useDataLayerValue();
  const [productDetails, setProductDetails] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image:"",
    owner:seller?.email
  
  });

  return (
    <>
      <div className="containe">
        <Header />
        <div className="flex">
          <div className="">
            <Sidebar />
          </div>
          <h2 className="text-2xl mt-2  font-bold text-gray-800">
            Add Products
          </h2>
          <div className="justify-center mt-12 items-center mx-auto">
            <div className="mt-12">
              <StepOne
                productDetails={productDetails}
                setProductDetails={setProductDetails}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
