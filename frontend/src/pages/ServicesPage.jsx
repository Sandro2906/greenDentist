import React from 'react'
import NavBar from './NavBar'
import Footer from '../components/Footer'
import ServicesComponent from '../components/ServicesComponent'
import ServicesSecondFrame from '../components/ServicesSecondFrame'


const ServicesPage = () => {
  return (
    <div>
    <NavBar />
        <ServicesComponent />
        <ServicesSecondFrame />
  
    <Footer />
    </div>
  )
}

export default ServicesPage