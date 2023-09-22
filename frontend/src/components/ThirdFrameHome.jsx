import React from 'react'
import Tooth from '../assets/dental-oral-health-what-happens-during-a-tooth-cleaning_thumb-1-732x549.avif'
import Tooth2 from '../assets/iStock-810204792.jpg'
import Tooth3 from '../assets/Dental-Emergency-Appointment.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const data = [
    {
        id:1,
        name:'dental examination',
        pic: Tooth,
        price: '20€',
    
    },
    {
        id:2,
        name:'Teeth whitening',
        pic: Tooth2,
        price: '30€',
        
    },
    {
        id:3,
        name:'Tooth repair',
        pic: Tooth3,
        price: '60€',
      
    },
]

export const ThirdFrameHome = () => {

    useEffect(()=>{
        AOS.init({duration: 1000})
      })
  return (
    <div className='w-full h-auto py-14 lg:px-20 px-7'>
   <h1 data-aos="fade-up" className='text-center font-bold text-4xl pb-14'>Price list</h1>

   <div className='flex lg:flex-row flex-col justify-between items-center w-full h-auto '>

   {data.map(({pic,name,hour,price,id})=>(
    <div data-aos="fade-up" key={id} className='w-full h-auto flex flex-col justify-center items-center pb-14'>
    <div className='lg:w-full lg:h-[240px] md:h-[400px] md:w-[700px] flex justify-center items-center px-3'>
        <img src={pic} alt='pic' className='w-full h-full object-cover'/>
    </div>
    <div className='flex-col flex justify-center items-center'>
    <h1 className='text-xl py-4 font-bold'>{name}</h1>
   
    <h1 className='text-6xl text-gray-600'>{price}</h1>
    </div>
    </div>
   ))}
  
   
   </div>
   <div data-aos="fade-up" className='w-full h-auto py-7 flex justify-center items-center'>
   <Link to='/contact' className='bg-emerald-700 buttonShadow text-white rounded p-3 w-[300px] text-center h-auto text-xl'>Contact us</Link>
   </div>
    
    </div>
  )
}
