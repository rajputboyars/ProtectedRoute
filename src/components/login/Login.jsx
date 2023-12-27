import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handelSubmit = () =>{
        if (username && password) {
            localStorage.setItem("token", JSON.stringify(`${username}${password}`))
            setUsername("")
            setPassword("")
            navigate('/home')
        }
    }
  return (
    <>
        <div className='flex flex-col w-[500px] m-auto bg-zinc-100 p-5'>
            <div className='flex flex-row justify-between m-2'>
                <div className='p-3'>Username</div>
                <input className="border border-blue-400 p-3" type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <div className='flex flex-row justify-between m-2'>
                <div className='p-3'>Password</div>
                <input className="border border-blue-400 p-3" type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button className='m-3 bg-blue-400 p-2 rounded-full' onClick={handelSubmit}>Submit</button>
        </div>
    </>
  )
}

export default Login