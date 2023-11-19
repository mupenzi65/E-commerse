import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../../Footer'





const Layouti = () => {
  return (
    <>
    <div>
        <Header/>
        <Outlet />
        
    </div>
    <Footer />
    </>
  )
}

export default Layouti