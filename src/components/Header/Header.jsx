import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlinePoweroff } from "react-icons/ai";


const Header = () => {
  const navigate = useNavigate()

  const logout = () =>{
    setTimeout(() => {
      
      localStorage.removeItem("token")
      console.log("seti");
    }, 1000);
    navigate("/logout")
  }


  return (
    <>
        <div className="flex flex-row justify-between bg-slate-100 w-full">
        <div className="text-red-600 p-5 font-bold text-[20px]">LOGOTYPE</div>
        <div >
          <ul className='flex flex-row'>
            
            <NavLink to={"/home"} className={({isActive})=>`p-5 font-semibold text-[20px] tracking-tighter hover:text-orange-300 ${isActive ? "text-orange-400" : "text-gray-600"}`}>Home</NavLink>
            <NavLink to={"/about"} className={({isActive})=>`p-5 font-semibold text-[20px] tracking-tighter hover:text-orange-300 ${isActive ? "text-orange-400" : "text-gray-600"}`}>About</NavLink>
            <NavLink to={"/contacts"} className={({isActive})=>`p-5 font-semibold text-[20px] tracking-tighter hover:text-orange-300 ${isActive ? "text-orange-400" : "text-gray-600"}`}>Contacts</NavLink>
            <NavLink to={"/logout"} onClick={logout} className={({isActive})=>`p-3 font-semibold text-[20px] tracking-tighter text-white m-3 rounded-3xl active:bg-red-800  hover:bg-red-400 ${isActive ? "bg-orange-400" : "bg-red-600"}`}><AiOutlinePoweroff/></NavLink>
          
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header