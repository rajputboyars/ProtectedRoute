import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {

  return (
    <>
      <div className='w-[1000px] h-[400px] bg-slate-50 m-auto my-10 rounded-2xl text-center'>
        <div className='text-[100px] font-[500] text-red-600'>Bye..!!</div>
        <div className='text-[50px]'>UH OH! You're Logged Out....</div>
        <div className=' capitalize text-zinc-700 my-3'>Login to access this webpage....</div>
        
        <div className='my-10'>
          <NavLink className="bg-blue-500 py-4 px-6 rounded-3xl text-white hover:bg-blue-300 active:bg-blue-700" to="/">Login</NavLink>
        </div>

      </div>
    </>
  )
}

export default Error