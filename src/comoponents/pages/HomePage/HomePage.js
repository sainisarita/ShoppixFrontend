import React from 'react'
import MyNavbar from './components/MyNavbar/MyNavbar'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import './HomePage.css'


const HomePage = () => {
  return (

    <div className="homePage">
        <Header/>
    <MyNavbar/>
    <Card/>
    </div>
  
  )
}

export default HomePage