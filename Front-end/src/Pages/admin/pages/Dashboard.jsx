import React, { useState } from 'react'
import Home from './Home'
import Login from './Login'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [user,setUser]=useState('')
  const navigate=useNavigate()
  return (
    <>
    <div className="">
      <Home />
    </div>
    </>
  )
}

export default Dashboard