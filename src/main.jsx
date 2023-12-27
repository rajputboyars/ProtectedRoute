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
    // <Route path='/' element={<Layout/>} errorElement={<Navigate to={"/login"}/>}>
    <Route path='/' element={<Layout/>} errorElement={<ErrorPage/>}>
      <Route path='/' element={<Login/>}/>
      <Route path='logout' element={<ProtectedRoute Component={Logout}/>}/>
      <Route path='home' element={<ProtectedRoute Component={Home}/>}/>
      <Route path='about' element={<ProtectedRoute Component={About}/>}/>
      <Route path='contacts' element={<ProtectedRoute Component={Contacts}/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>

  </React.StrictMode>,
)
