import React from 'react'
import pic from '../assets/npr.brightspotcdn.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const CarrerFifthFrame = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  })
  return (
    <div className='bg-emerald-200'>
    <div className='w-full h-auto z-10'>
    <div data-aos="fade-up" className='py-14 w-full h-auto flex lg:flex-row flex-col px-7 lg:px-20 z-20'>

    <div  className='w-full h-auto lg:h-[500px] pb-5 lg:pb-0 rounded-full flex flex-col justify-center items-center '>
        <img src={pic} alt='pic' className='w-full h-full object-cover  rounded-lg   '/>
    </div>
    <div className='w-full h-auto px-10 flex flex-col justify-center'>
        <h1 className=' font-bold text-3xl lg:text-4xl pb-7'>Volunteer</h1>
     
        <h1 className='py-7 text-xl text-gray-500'>A volunteer dentist is a dental professional who generously donates their time, skills, and expertise to provide dental care and services to individuals or communities in need, often without any financial compensation. These compassionate individuals play a vital role in addressing oral health disparities and improving the well-being of underserved populations. Volunteer dentists may participate in various initiatives and programs, such as free dental clinics, humanitarian missions, and community outreach efforts, to ensure that dental care is accessible to those who may otherwise go without it. Their selfless dedication to serving others demonstrates the profound impact that healthcare professionals can have on the lives of those in less fortunate circumstances.</h1>
       
        </div>
   
    </div>
    </div>
    </div>
  )
}

export default CarrerFifthFrame