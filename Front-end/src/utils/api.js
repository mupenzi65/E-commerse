import { em } from '@mantine/core'
import axios from 'axios'
import {toast} from 'react-toastify'

export const api=axios.create({
    baseURL:"http://localhost:8000/api",
})



export const Logiin=async(email,password)=>{
    try {
        const res=await api.post("/user/admin/login",{email,password})
        if(res.data.msg=="invalid credential"){
           return toast.error("Invalid credential")
        }else if(res.data.msg=="not admin"){
            return toast.error("oops ! looks like you are not admin")
        }else if(res.data.msg=="user not exist"){
            return toast.error("oops ! looks like you are not registered yet")
        }
       
        return res.data
    }catch (error) {
       toast.error('Something went wrong')
        
    }
}
export const createProducts=async(data)=>{
    console.log(data)


    try {
        const res=await api.post('/products/create',{...data})
       console.log(res)
        
    } catch (error) {
        toast.error("something went wrong")
        
    }

}

export const signup=async(email,password)=>{
    try {
        const res=await api.post("/user/create" ,{email,password})
        if(res.data==="user arleady exist"){
            return res.data
        }
        return res.data
     

        
    } catch (error) {
        toast.error('Something went wrong')
    }
}
export const login=async(email,password)=>{
    try {
        const res=await api.post("/user/login" ,{email,password})
        if(res.data.msg=="invalid credential"){
            return toast.error("Invalid credential")
        
        }else if(res.data.msg=="account not exist"){
            return toast.error("oops ! looks like you are not registered yet")
        }
        return res.data
        
    } catch (error) {
        toast.error('Something went wrong')
    }
}

export const getProduct=async(id)=>{
    try {
        const res=await api.get(`/products/products/${id}`)
        console.log(res.data)
       return res.data
        
    } catch (error) {
        toast.error("Something went wrong ")
        
    }

}

export const registerSeller=async(data)=>{
    // console.log(data)
    try {
        const res=await api.post('/user/seller/register',(data))
        return res.data
        
    } catch (error) {
        toast.error("Something went wrong ")
        
    }
}

