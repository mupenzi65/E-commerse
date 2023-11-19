import React from 'react'
import { useState } from 'react';
import Chart from "react-apexcharts";

const Donut = () => {
    const [dataPie,setdataPie]=useState({
      
        series: [44, 55, 41, 17],
        chartOptions: {
          labels: ['Social Media', 'Affliate Visitors', 'Purchased Visitors', 'Others'],
          plotOptions:{
            pie:{
                donut:{
                    size:"65%",
                    labels:{
                        show:true,
                        total:{
                            show:true,
                            fontSize:20,
                            color:'green'
                        }
                    }
                }
            }
        }
       
        },
        
       
      })
  
  return (
    <div className="">
        <Chart options={dataPie.chartOptions} series={dataPie.series}  type="donut" width={400} height={350} />
    </div>
  )
}

export default Donut