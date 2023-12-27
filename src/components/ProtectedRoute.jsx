import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (prop) => {
    const{Component} = prop
    const navigate = useNavigate()

    useEffect(() => {
    const login = JSON.parse(localStorage.getItem("token"))
    console.log(login);
    if (!login) {
        navigate("/")
    };
    }, []);

    return (
    <div>
        <Component/>
    </div>
  )
}

export default ProtectedRoute