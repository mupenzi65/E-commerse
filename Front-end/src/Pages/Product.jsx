import React, { useState, useEffect } from "react";
import CardSkeleton from "../Components/CardSkeleton";
import Categories from "../Components/Categories";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
const Product = () => {
  const [categoryOpened, setCategoryOpened] = useState(false);
  const [category, setCategory] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");
  const datas = [1, 2, 3, 4, 5, 6];
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState([]);
  

  useEffect(()=>{

    const fetch = async()=>{
  
  try{
    const resp = await axios.get("https://fakestoreapi.com/products")
  if(Array.isArray(resp.data)){
    if(resp.data.length==0){
      setIsloading(false)
    }else{
      setData(resp.data)
      setIsloading(false)
      console.log(data)
    }
  }
  
  
  }catch(error){
    console.error(error)
  }
    }
    fetch()
  },[])




  const categoryModol = () => {
    setCategoryOpened((prev) => !prev);
  };
 
  useEffect(() => {
    const handleData = () => {
      if (Array.isArray(products)) {
        if (products.length > 0) {
          setData(products);
          setIsloading(false);
          setCategoryOpened((prev) => !prev);
        } else {
         
        }
      }
    };
    handleData();
  
  }, [products]);

  return (
    <div>
      <section>
        <div className="containe">
          <div className="flex ">
            <div className="mt-12  mr-3">
              <div
                className="flex gap-2 cursor-pointer "
                onClick={categoryModol}
              >
                <i
                  class="bx bx-menu bx-flip-horizontal"
                  style={{ color: "#2230a2", fontSize: 30 }}
                ></i>
              </div>
            </div>
            {categoryOpened && (
              <Categories
                category={category}
                setCategory={setCategory}
                products={products}
                setProducts={setProducts}
              />
            )}
            <div className="mt-12 p-3">
              <h5 className="text-2xl text-gray-800 font-semibold">
                {category}
              </h5>
              {isLoading && (
                <div className="flex gap-[120px] flex-wrap ">
                  {datas.map((x) => (
                    <CardSkeleton key={x.id} />
                  ))}
                </div>
              )}
              
               <div className="flex justify-evenly gap-[10px] flex-wrap">
          {data.slice(0,8).map((product , i) => (
            <ProductCard product={product} key={i} />
          ))}
        
        </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
