import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

function Layout() {
  return (
  <div className=' p-4 flex-col'>
 <Navbar/>
 <Outlet/>
 <Footer/>
 
  </div>
  )
}

export default Layout