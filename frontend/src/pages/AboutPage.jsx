import React from 'react'
import NavBar from './NavBar'
import Footer from '../components/Footer'
import AboutFirstFrame from '../components/AboutFirstFrame'
import AboutSixthFrame from '../components/AboutSixthFrame'
import AboutForthFrame from '../components/AboutForthFrame'
import AboutSecondFrame from '../components/AboutSecondFrame'
import AboutThirdFrame from '../components/AboutThirdFrame'
import AboutFifthPage from '../components/AboutFifthPage'

const AbboutPage = () => {
  return (
    <div>
    <NavBar />
      <AboutFirstFrame />
      <AboutSecondFrame />
      <AboutThirdFrame />
      <AboutForthFrame />
      <AboutFifthPage />
      <AboutSixthFrame />
    <Footer />
    </div>
  )
}

export default AbboutPage