import React, { useEffect, useRef, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useMutation } from "react-query";
import { createProducts } from "../../../utils/api";
import { toast } from "react-toastify";
import { useDataLayerValue } from "../../../Datalayer";
import axios from "axios";

const StepOne = ({ productDetails, setProductDetails }) => {
  const [{ user,seller }, dispatch] = useDataLayerValue();
  const [titleError, setTitleError] = useState(false);
  const [discriptionError, setdescriptionError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [images, setImages] = useState(productDetails.image);
 
 
  const cloudinaryRef=useRef();
  const widgetRef=useRef();
  // setProductDetails((prev)=>({...prev,owner:seller.email}))

  useEffect(()=>{
    cloudinaryRef.current=window.cloudinary;
    widgetRef.current=cloudinaryRef.current.createUploadWidget({
        cloudName:"ddkwz7odf",
        uploadPreset:'y8naxvg3',
        maxFiles:1,

    },
    (err,result)=>{
        if(result.event === 'success'){
            setProductDetails((prev)=>({...prev,image:result.info.secure_url}))
            
        }
    }


    )
},[])
  

  useEffect(() => {
    setProductDetails((prev) => ({ ...prev,image:images,owner:seller.email}));
    
    
  }, []);

 
  








  const handleSubmit = async() => {

    // if (productDetails.title.length < 5) {
    //   setTitleError(true);
    //   return;
    // } else if (productDetails.description.length < 15) {
    //   setdescriptionError(true);
    //   setTitleError(false);
    //   return;
    // } else if (productDetails.price < 1) {
    //   setPriceError(true);
    //   setTitleError(false);
    //   setdescriptionError(false);
    //   return;
    // } else if (productDetails.category === "") {
    //   setCategoryError(true);
    //   setPriceError(false);
    //   setTitleError(false);
    //   setdescriptionError(false);
    //   return;
    // }
    // } else if (
    //   productDetails.image ==="" 
   
    // ) {
    //   setImageError(true);
    //   setCategoryError(false);
    //   setPriceError(false);
    //   setTitleError(false);
    //   setdescriptionError(false);
    //   return;
    // }
    // mutate()
    const formData=new FormData()

    formData.append('title',productDetails.title)
    formData.append('price',productDetails.price)
    formData.append('description',productDetails.description)
    formData.append('image',productDetails.image1)
    formData.append('category',productDetails.category)
    console.log(formData)
    await axios.post("http://localhost:8000/api/products/create",formData)
    

    

  };




  

  const { mutate, isLoading } = useMutation({
    mutationFn: () => createProducts(productDetails),
    onSuccess: () => {
      toast.success("Added successfully");
      setProductDetails({
        title: "",
        description: "",
        price: "",
        category: "",
        image:"",
        owner:seller?.email
      });
      
     
    },
  });

  return (
    <div>
      <form
      method="POST"
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="">
        <div className="mb-8 ">
          <p className="text-2xl font-semibold  " htmlFor="name">
            Product image <span className="text-red-600">*</span>
          </p>
          <div className="flex mt-3  gap-3">
            <div
              className={`w-[260px] ${
                imageError && "border-red-500"
              } h-[205px] border border-blue-500 rounded-xl`}
            >
              {!productDetails.image&& (
                <div className="">
                  <div className="mt-[70px] mx-[50px] ">
                    <Button
                      component="label"
                      variant="contained"
                      startIcon={<CloudUploadIcon />}
                      onClick={()=>widgetRef.current?.open()}
                    >
                      Upload file
                    
                    </Button>
                  </div>
                </div>
              )}

              {productDetails.image && (
                <img
                  src={productDetails.image}
                  alt=""
                  className="w-[220px] h-[150px] object-contain"
                />
              )}
            </div>
        
          </div>
          {imageError && (
            <p className="text-red-600">At least one image is required</p>
          )}
        </div>
          <p className="text-2xl font-semibold ">
            Title <span className="text-red-600">*</span>
          </p>
          <input
            className={`border w-full h-[40px] rounded-[4px] ${
              titleError && "border-red-500"
            }   border-blue-600 px-3`}
            type="text"
            name=""
            id=""
            value={productDetails.title}
            onChange={(e) =>
              setProductDetails((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          {titleError && (
            <p className="text-red-600">
              Title must be greater than 5 characters
            </p>
          )}
        </div>
        <div className="mt-8 ">
          <p className="text-2xl font-semibold  " htmlFor="name">
            Description <span className="text-red-600">*</span>
          </p>
          <textarea
            className={`border w-full  rounded-[4px] ${
              discriptionError && "border-red-500"
            }   border-blue-600 px-3`}
            type="text"
            cols={40}
            rows={3}
            name=""
            value={productDetails.description}
            id=""
            onChange={(e) =>
              setProductDetails((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
          />
          {discriptionError && (
            <p className="text-red-600">
              Description must be greater than 15 characters
            </p>
          )}
        </div>
        <div className="mt-8">
          <p className="text-2xl font-semibold ">
            Price <span className="text-red-600">*</span>
          </p>
          <input
            className={`border h-[40px] rounded-[4px] ${
              priceError && "border-red-500"
            }   border-blue-600 px-3`}
            min={1}
            type="number"
            name=""
            id=""
            value={productDetails.price}
            onChange={(e) =>
              setProductDetails((prev) => ({ ...prev, price: e.target.value }))
            }
          />
          {priceError && (
            <p className="text-red-600">
              Price must be greater than one dollar
            </p>
          )}
        </div>
        <div className="mt-8">
          <p className="text-2xl font-semibold ">
            Category <span className="text-red-600">*</span>
          </p>
          <select
            className={`border w-full h-[40px] rounded-[4px] ${
              categoryError && "border-red-500"
            }     border-blue-600 px-3`}
            onChange={(e) =>
              setProductDetails((prev) => ({
                ...prev,
                category: e.target.value,
              }))
            }
            placeholder="pick"
            name=""
            id=""
            value={productDetails.category}
          >
            <option value=""></option>
            <option value="jewerely">jewerely</option>
            <option value="electronics">electronics</option>
            <option value="kids">kids</option>
            <option value="men's">men's</option>
          </select>
          {categoryError && (
            <p className="text-red-600">Please choose category</p>
          )}
        </div>
        
        <button
          className="bg-green-600 text-white rounded-3xl text-xl p-3 w-[120px] h-[50px] mt-5"
          disabled={isLoading}
          onClick={()=>console.log(productDetails.owner)}
        >
          {isLoading ? "Submiting" :"Submit"}
        </button>
      </form>
    </div>
  );
};

export default StepOne;
