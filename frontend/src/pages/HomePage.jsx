import React from 'react'
import FirstFrameHome from "../components/FirstFrameHome";
import SecondFrameHome from "../components/SecondFrameHome";
import { ThirdFrameHome } from "../components/ThirdFrameHome";
import Footer from "../components/Footer";
import NavBar from "../pages/NavBar";

export const HomePage = () => {
  return (
    <div>
    <NavBar />
    <FirstFrameHome />
    <SecondFrameHome />
    <ThirdFrameHome />
    <Footer />
    </div>
  )
}
