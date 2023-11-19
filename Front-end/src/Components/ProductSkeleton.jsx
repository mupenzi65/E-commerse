import React from 'react'
import Skeleton from '@mui/material/Skeleton';
const ProductSkeleton = () => {




  return (
   
    <div className="flex mt-4 overflow-x-hidden">
        <div className="basis-[60%]  "  >
        <Skeleton  variant='rectangular' animation="wave" width={610} height={450} sx={{ bgcolor: 'grey.200',borderRadius:'0.5rem',marginBottom:'1rem',marginRight:'12rem' }} />

        </div>
        <div className="">
        <Skeleton  variant='rectangular' animation="wave" width={410} height={40} sx={{ bgcolor: 'grey.200',borderRadius:'0.5rem',marginBottom:'1rem',marginRight:'12rem' }} />
        <Skeleton  variant='rectangular' animation="wave" width={190} height={30} sx={{ bgcolor: 'grey.200',borderRadius:'0.5rem',marginBottom:'1rem',marginRight:'12rem' }} />
        <Skeleton  variant='rectangular' animation="wave" width={410} height={60} sx={{ bgcolor: 'grey.200',borderRadius:'0.5rem',marginBottom:'1rem',marginRight:'12rem' }} />
        <div className="flex mt-8 gap-3">
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton  variant='rectangular' animation="wave" width={370} height={20} sx={{ bgcolor: 'grey.200',borderRadius:'0.5rem',marginBottom:'1rem',marginRight:'12rem' }} />
        </div>
        <div className="flex mt-2 gap-3">
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton  variant='rectangular' animation="wave" width={370} height={20} sx={{ bgcolor: 'grey.200',borderRadius:'0.5rem',marginBottom:'1rem',marginRight:'12rem' }} />
        </div>
        <div className="flex mt-2 gap-3">
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton  variant='rectangular' animation="wave" width={370} height={20} sx={{ bgcolor: 'grey.200',borderRadius:'0.5rem',marginBottom:'1rem',marginRight:'12rem' }} />
        </div>
       

        </div>


    </div>




  )
}

export default ProductSkeleton