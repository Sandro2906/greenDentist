import React from 'react'
import Team from '../assets/istockphoto-1331285308-1024x1024.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const AboutThirdFrame = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  })
  return (
    <div className='bg-emerald-200'>
    <div className='py-14 w-full h-auto flex lg:flex-row-reverse flex-col px-7 lg:px-20 '>

    <div data-aos='fade-left' className='w-full h-auto lg:h-[500px] rounded-full pb-5 lg:pb-0 flex  flex-col justify-center items-center '>
        <img src={Team} alt='pic' className='w-full h-full rounded-full object-cover border-8 p-2 shadowbox border-emerald-500'/>
       <div className='flex justify-start items-start w-full h-auto py-3'>
       <h1 className='text-3xl font-bold'>Dr. Emily Rodriguez</h1>
       </div>
       <div className='flex justify-start items-start w-full h-auto '>
       <h1 className='text-xl '></h1>
       </div>
    </div>
    <div data-aos='fade-right' className='w-full h-auto px-10'>
        
        <h1 className='py-7 text-xl text-gray-500'>Dr. Emily Rodriguez is a prominent dental doctor based in the bustling city of New York. With a passion for dentistry that has driven her career, Dr. Rodriguez completed her dental education and training in one of New York's prestigious dental schools, where she excelled academically and earned recognition for her commitment to the field.</h1>
        <h1 className='py-7 text-xl text-gray-500'>After graduation, Dr. Rodriguez chose to stay in New York, a city known for its diverse population and high standards of healthcare. She established her dental practice, where she has since become a trusted and respected dental professional in the local community. Patients appreciate her warm and empathetic approach, knowing that they receive not only expert dental care but also personalized treatment plans tailored to their unique needs.</h1>
        </div>
    
    </div>
    </div>
  )
}

export default AboutThirdFrame