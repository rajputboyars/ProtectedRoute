import React from 'react'
import { useState } from 'react';
import { FaUserCheck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri";


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
        <div className=' w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pt-[150px]'>
            <div className='flex flex-col w-[500px] text-center text-[25px] m-auto rounded-xl bg-zinc-100 p-5'>
                <div className='text-[40px] font-[600]'>Login</div>
                <div className=' w-full flex flex-row  mx-2 my-5 bg-zinc-50 border rounded-full border-blue-400'>
                    <FaUserCheck className="ml-[20px] text-[40px] self-center"/>
                    <input className=" w-full p-3 rounded-full focus:outline-none" type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
                </div>
                <div className=' w-full flex flex-row  mx-2 my-5 bg-zinc-50 border rounded-full border-blue-400'>
                    <RiLockPasswordLine className="ml-[20px] text-[40px] self-center"/>
                    <input className=" w-full p-3 rounded-full focus:outline-none" type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button className='my-5 mx-2 bg-blue-400 hover:bg-blue-300 active:text-white active:bg-blue-600 p-2 rounded-full' onClick={handelSubmit}>Login</button>
            </div>
        </div>
    </>
  )
}

export default Login