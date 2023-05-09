import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dash from './Dashboard.module.css'


export default function Dashboard() {
    const [adminLogin,setAdminLogin]=useState(false)
    const [userLogin,setuserLogin]=useState(false)
   const nevigate=useNavigate()

    function handleAdminLogin(){
        if(!adminLogin)
        setAdminLogin(true)
        nevigate('/adminlogin')
    }

    function handleUserLogin(){
        if(!userLogin)
        setuserLogin(true)
        nevigate('/login')
    } 
  return (
    <div className={dash.wrapper}>
      <h1> Dashboard</h1>
      <button  className={dash.button1} onClick={handleUserLogin}>user login</button>
      <button className={dash.button2}  onClick={handleAdminLogin}>admin login</button>
    </div>
  )
}
