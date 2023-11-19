import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools} from 'react-query/devtools'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Product from './Pages/Product'
import Dashboard from './Pages/admin/pages/Dashboard'
import Layouti from './Pages/admin/pages/Layouti'
import Products from './Pages/admin/pages/Products'
import Login from './Pages/admin/pages/Login'
import { useDataLayerValue } from './Datalayer'
import Cart from './Pages/Cart'
import UserLogin from './Components/UserLogin'
import UserSignup from './Components/UserSignup'
import Checkout from './Pages/admin/pages/Checkout'
import Item from './Components/Item'
import SellerRegister from './Components/SellerRegister'

function App() {
  const queryClient=new QueryClient()
  const [{user,seller},dispatch]=useDataLayerValue()

  




  return (
    <QueryClientProvider client={queryClient} >
  <BrowserRouter>
  <Routes>
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/Products' >
        <Route index element={<Product />}/>
        <Route path=':productId' element={<Item />}  ></Route> 

      </Route>
      
    </Route>
    <Route path='/cart' element={<Cart />}></Route>
    <Route path='/checkout' element={<Checkout />}></Route>
     <Route path='/user/login' element={(<UserLogin />)}  ></Route>
     <Route path='/user/signup' element={(<UserSignup />)}  ></Route>
      <Route path='/seller/dashboard' element={seller ?  (<Dashboard />) : (<Login />)} ></Route>
      <Route path='/seller/dashboard/products' element={seller? <Products /> :<Login/>} ></Route>
      <Route path='/seller/register' element={<SellerRegister />}  ></Route>
  
  

  </Routes>
  </BrowserRouter>
  <ToastContainer />
  </QueryClientProvider>
  )
}

export default App
