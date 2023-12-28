import React from 'react'
import { Route, redirect, useNavigate } from 'react-router-dom'


const ProtectedComponent = ({token,Component,...rest}) => {
    const navigate = useNavigate()
  return (
    <>
        <Route {...rest} render={(props)=>{
            if(token) return <Component {...props}/>
            if(!token) return navigate("/")
        }}/>
    </>
  )
}

export default ProtectedComponent