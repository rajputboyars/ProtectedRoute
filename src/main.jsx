import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,Route,createRoutesFromElements, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Login from './components/login/Login.jsx'
import Logout from './components/logout/Logout.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import ProtectedRoute from './components/ProtectedRoute.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Login/>} errorElement={<ErrorPage/>}>
      <Route path='/' element={<ProtectedRoute Component={Layout}/>}>
        <Route path='logout' element={<Logout/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contacts' element={<Contacts/>}/>
      </Route>
    </Route>
  )
)
    
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
