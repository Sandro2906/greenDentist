import React from 'react'
import pic from '../assets/bright-dental-office-design.jpg'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const FirstFrameHome = () => {

  useEffect(()=>{
    AOS.init({duration: 1000})
  })

  return (
    <div className='w-full h-auto py-14 flex justify-around lg:flex-row flex-col'>

        <div data-aos="fade-right" className='w-full h-auto flex flex-col justify-center items-start pb-10  px-10 lg:pl-20 lg:pr-10'>
        <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold py-3'>Dental practice</h1>
        <h1 className='text-gray-300 text-xl pb-6'>Keep you smile bright and clean!</h1>
        </div>

        <div data-aos="fade-left"  className='w-full h-auto lg:h-[500px] flex items-center justify-center rounded px-10 lg:px-20'>
            <img src={pic} alt='Img' className='w-full h-full object-cover rounded ' />
        </div>
        
    </div>
  )
}

export default FirstFrameHome