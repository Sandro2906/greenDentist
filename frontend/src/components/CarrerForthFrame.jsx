import React from 'react'
import pic from '../assets/Facebook_GeneralDentistry.jpg'
import { Link } from 'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const CarrerForthFrame = () => {

  useEffect(()=>{
    AOS.init({duration: 1000})
  })

  return (
    <div className='w-full h-auto z-10'>
    <div className='py-14 w-full h-auto flex lg:flex-row-reverse flex-col px-7 lg:px-20 z-20'>

    <div data-aos="fade-left" className='w-full h-auto lg:h-[500px] pb-5 lg:pb-0 rounded-full flex flex-col justify-center items-center '>
        <img src={pic} alt='pic' className='w-full h-full object-cover  rounded-lg   '/>
    </div>
    <div data-aos="fade-right" className='w-full h-auto px-10 flex flex-col justify-center'>
        <h1 className=' font-bold text-3xl lg:text-4xl'>General Dentist</h1>
        <h1 className='py-7 text-xl text-gray-500'>A general dentist is a crucial healthcare professional who provides comprehensive dental care to patients of all ages. Their responsibilities encompass preventive care, diagnosis, and treatment of common dental issues. General dentists offer routine dental check-ups, cleanings, and essential procedures like fillings and crowns to maintain and restore oral health. They also play a vital role in patient education, promoting proper oral hygiene practices, and raising awareness about the significance of regular dental visits.</h1>
        <h1 className='py-7 text-xl text-gray-500'>Moreover, general dentists act as the first line of defense against oral health problems by conducting screenings for conditions like oral cancer. They coordinate care with dental specialists when needed and stay updated with the latest advancements in dentistry through continuous education. General dentists are the cornerstone of dental healthcare, ensuring that individuals receive the necessary care to preserve their oral well-being and overall health.</h1>
        <Link to='/contact' className='w-[170px] buttonShadow h-auto p-3 text-center text-xl text-white bg-emerald-500 rounded'>Apply for job</Link>
        </div>
   
    </div>
    </div>
  )
}

export default CarrerForthFrame