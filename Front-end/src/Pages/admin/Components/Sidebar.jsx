import React, { useState } from "react";
import Options from "./Options";
import MenuIcon from "@mui/icons-material/Menu";
const Sidebar = () => {
  

  return (
    <div className="containe  h-full">
      <div className="flex bg-slate-500 h-full mt-1 basis-[60%] ">
        <Options />
      </div>
    </div>
  );
};

export default Sidebar;
