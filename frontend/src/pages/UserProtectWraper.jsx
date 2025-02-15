import React, { useContext, useEffect } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserProtectWraper = ({children}) => {
    // const {user} = useContext(UserDataContext);
    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    if(!token){
      return useEffect(()=>{
        navigate('/login')
      })
    }

  return children
  
}

export default UserProtectWraper