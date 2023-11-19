import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import InventoryIcon from "@mui/icons-material/Inventory";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

import { useScrollTrigger } from "@mui/material";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";
import Donut from "../Components/donut";
import { order } from "../../../utils/data";
import RecentOrder from "../Components/RecentOrder";
import Header from "../Components/Header";

const Home = () => {
  const [userData, setUserData] = useState({
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
    datasets: [
      {
        label: "Sales growth per month",
        data: [30440, 47895, 34468, 54678, 45378, 33426, 17567],
        barThickness: 16,
        borderRadius: 8,
      },
    ],
  });

  return (
    <section>
      <div className="containe">
        <Header />
        <div className="flex ">
          <div className=" min-w-[250px]">
            <Sidebar />
          </div>

          <div className="">
            <h2 className="mt-7 ml-3 text-3xl font-semibold text-gray-800 ">
              Dasboard
            </h2>
            <div className="flex items-center  gap-[80px]  flex-wrap ">
              <div className="border border-gray-100 mt-3 rounded-xl   w-[180px] h-[100px] flex ">
                <h2 className="w-12 h-12 bg-orange-600 text-white text-center justify-center mx-3 mt-4  text-[32px]  rounded-full ">
                  $
                </h2>
                <div className="mt-3">
                  <p className="text-gray-500">Total Sales</p>
                  <p className="font-bold text-gray-700">$20,567,43</p>
                </div>
              </div>
              <div className="border border-gray-100 mt-3 rounded-xl   w-[180px] h-[100px] flex ">
                <div className="mt-3 rounded-full w-12 h-12 mr-3 items-center bg-yellow-600 text-white ">
                  <ShoppingCartSharpIcon
                    sx={{ fontSize: 40 }}
                    className="items-center mx-1 mt-1"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-gray-500">Total Orders</p>
                  <p className="font-bold text-gray-700">1567</p>
                </div>
              </div>
              <div className="border border-gray-100 mt-3 rounded-xl   w-[180px] h-[100px] flex ">
                <div className="mt-3 rounded-full w-12 h-12 mr-3 items-center bg-blue-600 text-white ">
                  <InventoryIcon
                    sx={{ fontSize: 40 }}
                    className="items-center mx-1 mt-1"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-gray-500">Total Orders</p>
                  <p className="font-bold text-gray-700">1567</p>
                </div>
              </div>
              <div className="border border-gray-100 mt-3 rounded-xl   w-[180px] h-[100px] flex ">
                <div className="mt-3 rounded-full w-12 h-12 mr-3 items-center bg-green-600 text-white ">
                  <SupervisorAccountIcon
                    sx={{ fontSize: 40 }}
                    className="items-center mx-1 mt-1"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-gray-500">Total Visitors</p>
                  <p className="font-bold text-gray-700">3567</p>
                </div>
              </div>
            </div>
            <div className="flex gap-11">
              <div className="w-[450px] h-[370px] bg-gray-50 mt-7">
                <h2 className=" mt-2 px-2 mx-3 ml-3 text-xl font-semibold text-gray-800 ">
                  Sales statistics
                </h2>
                <Bar data={userData} />
              </div>
              <div className="mt-7 w-[480px] bg-gray-50 h-[370px] rounded-xl">
                <h2 className="text-xl font-bold ml-2 mt-2">Visitor stats</h2>
                <Donut />
              </div>
            </div>
            <div className="bg-gray-50  mt-11">
              <h2 className="text-xl font-bold mt-1 ml-2">Recent Orders </h2>
              <div className="">
                {order.map((item, index) => (
                  <RecentOrder order={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
