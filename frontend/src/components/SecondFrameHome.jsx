import React from 'react'
import Doctor from '../assets/45743843-dentist-doctor-portrait-young-man-at-his-workplace-dental-clinic.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const SecondFrameHome = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  })
  return (
    <div className='py-14 w-full h-auto flex lg:flex-row flex-col px-7 lg:px-20 bg-emerald-200'>
    <div data-aos="fade-left" className='w-full h-auto lg:h-[500px] pb-5 lg:pb-0 flex justify-center items-center '>
        <img src={Doctor} alt='pic' className='w-full h-full object-cover border-emerald-500 border-8 p-2 rounded-[20px]'/>
    </div>
    <div data-aos="fade-left" className='w-full h-auto px-10'>
        <h1 className=' font-bold text-3xl lg:text-5xl'>Welcome</h1>
        <h1 className='py-7 lg:text-xl text-md text-gray-500'>Dentists in California are committed to fostering a culture of oral health and bright smiles. Dr. Anderson is a shining example of this dedication. With years of experience in the field of dentistry, he's become a trusted figure in the community, ensuring that his patients have access to top-quality dental care.</h1>
        <h1 className=' pb-7 lg:text-xl text-md text-gray-500'>Dr. Anderson is passionate about oral health education and outreach. He actively participates in local initiatives aimed at improving dental hygiene, especially among children, adults, and underserved populations. His involvement in school programs, dental health seminars, and community clinics helps spread awareness and knowledge about the importance of maintaining healthy teeth and gums.</h1>
       
    </div>
    
    </div>
  )
}

export default SecondFrameHome