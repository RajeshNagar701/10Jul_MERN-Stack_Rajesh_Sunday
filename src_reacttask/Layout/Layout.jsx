import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Main_home from './Main_home'
import Footer from './Footer'

function Layout() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Main_home/>
        <Footer/>
    </div>
  )
}

export default Layout