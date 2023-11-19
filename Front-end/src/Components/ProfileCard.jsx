import { Avatar, Menu } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../assets/imgi1.png'
import { useDataLayerValue } from '../Datalayer'

const ProfileMenu = () => {
    const [{ user }, dispatch] = useDataLayerValue();
    const navigate=useNavigate()
  const logout=()=>{
     dispatch({
        type:"RESET"
     })

  }


  return (
    
    <Menu>
        <Menu.Target>
            <Avatar src={img} alt='user image' radius={"xl"} />
        </Menu.Target>
        <Menu.Dropdown>
            <Menu.Item onClick={logout} >
                Logout
            </Menu.Item>
            
        </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu