import React from 'react'
import NavBar from './NavBar'
import Footer from '../components/Footer'
import ContactFirstFrame from '../components/ContactFirstFrame'
import ContactSecondFrame from '../components/ContactSecondFrame'
import ContactThirdFrame from '../components/ContactThirdFrame'

const ContactPage = () => {
  return (
    <div>
    <NavBar />
        <ContactFirstFrame />
        <ContactSecondFrame />
        <ContactThirdFrame />
    <Footer />
    </div>
  )
}

export default ContactPage