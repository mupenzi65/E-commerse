import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { Link } from "react-router-dom";

const ProductsMenu = () => {
  return (
    <div className="mt-3 ml-3">
       <Link to={'/seller/dashboard/products'}>
       <div className="hover:bg-gray-200 rounded-2xl cursor-pointer">
        <AddIcon />
        <span className="font-semibold text-gray-700 ml-1">Add Products</span>
      </div>

       </Link>
      
      <div className="hover:bg-gray-200 rounded-2xl cursor-pointer mt-3">
        <Inventory2OutlinedIcon />
        <span className="font-semibold text-gray-700 ml-1">Products Lists</span>
      </div>
    </div>
  );
};

export default ProductsMenu;
