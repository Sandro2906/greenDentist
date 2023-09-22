import React from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const CarrerSecondFrame = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  })
  return (
    <div className='w-full h-auto py-14 px-7 md:px-20'>
    <h1 data-aos="fade-up" className='md:text-4xl text-2xl font-bold text-center pb-14'>Join Us</h1>
      <div className='w-full h-auto flex items-center flex-col'>
      <h1 data-aos='fade-left' className='text-gray-500 md:w-[700px] pb-7'>The demand for skilled dentists in the job market is more crucial than ever. Dentistry plays a pivotal role in healthcare, as it directly impacts an individual's overall well-being. Here's why we need dentists for the job:</h1>
      
      <ul data-aos='fade-left' className='text-gray-500 pb-7 md:w-[700px] w-full'>
          <li>Oral Health is Integral to Overall Health: Dentists are essential because they don't just focus on teeth; they're also responsible for detecting and treating various oral health issues that can affect the entire body. Problems like gum disease have been linked to heart disease, diabetes, and other serious health conditions. Dentists play a vital role in identifying these issues early on.</li>
          <li>Preventive Care Saves Costs: Dentists emphasize preventive care, helping patients maintain healthy teeth and gums. By promoting regular check-ups and cleanings, they can prevent costly dental procedures and emergency treatments down the road. This proactive approach not only saves patients money but also reduces the burden on the healthcare system.</li>
          <li>Improving Quality of Life: Dentists are responsible for restoring and enhancing smiles. Cosmetic dentistry procedures like teeth whitening and veneers can boost a person's self-esteem and confidence, significantly improving their quality of life.</li>
          <li>Addressing the Aging Population: As the population ages, there is a growing need for dental care, particularly for the elderly who may have complex dental health issues. Dentists play a crucial role in providing specialized care to meet the unique needs of this demographic.</li>
    
      </ul>

     
      </div>
    
    </div>
  )
}

export default CarrerSecondFrame