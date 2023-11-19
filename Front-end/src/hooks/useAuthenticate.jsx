import React from 'react'
import { useDataLayerValue } from '../Datalayer'
import {toast} from 'react-toastify'
const useAuthenticate = () => {
    const [{user},dispatch]=useDataLayerValue()

    const validatelogin=()=>{
        if(!user){
            toast.error('You must first login',{position:"bottom-right"})
            return false
        }else return true
    }








  return (
     { validatelogin}
  )
}

export default useAuthenticate