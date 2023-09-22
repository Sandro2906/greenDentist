import React from 'react'
import Team from '../assets/45743843-dentist-doctor-portrait-young-man-at-his-workplace-dental-clinic.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const AboutSecondFrame = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  })
  return (
    <div className='w-full h-auto z-10'>
    <h1 data-aos="fade-up" className='text-center text-6xl font-extrabold py-14 '>This is our team</h1>
    <div className='py-14 w-full h-auto flex lg:flex-row flex-col px-7 lg:px-20 z-20'>

    <div data-aos='fade-left' className='w-full h-auto lg:h-[500px] pb-5 lg:pb-0 rounded-full flex flex-col justify-center items-center '>
        <img src={Team} alt='pic' className='w-full h-full rounded-full object-cover border-8 p-2 shadowbox border-emerald-500  '/>
       <div className='flex justify-start items-start w-full h-auto py-3'>
       <h1 className='text-3xl font-bold'>Dr. Anderson</h1>
       </div>
      
    </div>
    <div data-aos='fade-right' className='w-full h-auto px-10'>
        <h1 className=' font-bold text-3xl lg:text-5xl'>Dr. Anderson</h1>
        <h1 className='py-7 text-md text-gray-500'>Dr. Anderson is a male dentist who completed his dental studies in the vibrant city of Los Angeles, California. His journey in the field of dentistry began with a strong passion for helping others achieve and maintain optimal oral health. Graduating with honors from a prestigious dental school in California, he distinguished himself as a dedicated and promising dental professional, earning respect among his peers and professors.</h1>
        <h1 className='py-7 text-md text-gray-500'>Dr. Anderson's journey from dental school in Los Angeles to becoming a respected male dentist in the city exemplifies his unwavering dedication to dentistry and his genuine commitment to the well-being of his patients. His expertise, compassionate approach, and community involvement make him a valued healthcare provider in the Los Angeles community.</h1>

    </div>
    
    </div>
    </div>
  )
}

export default AboutSecondFrame