import React from 'react'
import Skeleton from '@mui/material/Skeleton';

const CardSkeleton = () => {
    const data=[1,2,3]
  return (
    <>
    <div className="flex gap-[130px] ">
    <div className="w-[320px] h-[200px] mt-8 mb-[110px]  ">
  
  <Skeleton  variant='rectangular' width={360} height={250} sx={{ bgcolor: 'grey.300',borderRadius:'0.5rem',marginBottom:'1rem',marginRight:'12rem' }} />
  <Skeleton  variant='rectangular' width={250} height={35} sx={{ bgcolor: 'grey.300',borderRadius:'0.5rem' }} />
  <Skeleton  variant='rectangular' width={200} height={35} sx={{ bgcolor: 'grey.300',borderRadius:'0.5rem',marginTop:'0.5rem',marginBottom:'12rem' }} />
 </div>
    </div>
   
   </>
  )
}

export default CardSkeleton