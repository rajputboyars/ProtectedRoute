import React from 'react'
import {Navigate} from 'react-router-dom';

const ProtectedRoute = (prop) => {
    const{Component} = prop
    const token = JSON.parse(localStorage.getItem("token"))
    if (!token) {
            return <Navigate to={"/"}/>
    }
    return <Component/>
}

export default ProtectedRoute