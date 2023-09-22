import React from 'react'

import first from '../assets/yellow-in-chair.jpg'
import second from '../assets/Fellowship-stock-1024x836.jpg'

import tooth from '../assets/g9vqBC-lougheed-village-dentist-drjill-lee.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const data = [
    {
        id:1,
        name:'Dental Care',
        pic:first,
        text: '"Our primary mission is to deliver tailored and individualized dental care, and we are a team of devoted dentists committed to enhancing and preserving your oral well-being. Whether you require preventive treatments, cosmetic dentistry procedures, oral surgery, or comprehensive root canal therapy with crown placement, rest assured, you are in expert hands. We are proud to collaborate with a wide range of dental insurance plans, ensuring accessibility to quality care for all."',
        style: 'flex-row',
        fad:'fade-right'
    },
    {
        id:2,
        name:'We Are Dental Proffesinals',
        pic:second,
        text: '"We provide a comprehensive range of services to cater to diverse dental needs. Our experienced team understands that there is no such thing as a one-size-fits-all treatment, which is why we steer clear of a one-size-fits-all approach when crafting your personalized dental plan."',
        style: 'flex-row-reverse',
        fad:'fade-left'
    },
  
]

const AboutSixthFrame = () => {
    useEffect(()=>{
        AOS.init({duration: 1000})
      })
  return (
    <div className='w-full h-auto py-14 px-7 md:px-20'>
    

    <div className='w-full h-auto py-6 flex justify-center items-center'>
        <h1 className='font-extrabold text-4xl'>We are the best</h1>
    </div>

    <div className='w-full h-auto py-7 flex flex-col justify-between  '>
    {
        data.map(({id,pic,name,text, style,fad})=>(
            <div data-aos={fad} key={id} className={`flex flex-col lg:${style} w-full h-auto p-3`}>
            <div className='md:h-[400px] w-full h-auto'><img alt='pic' className='w-full h-full object-cover rounded-lg' src={pic} /></div>
            <div className='w-full h-auto p-7'>
            <div><h1 className='text-5xl font-bold py-6'>{name}</h1></div>
            <div><h1 className='text-xl'>{text}</h1></div>
            </div>
            </div>
        ))
    }
    <img className='absolute lg:flex hidden w-[100px] h-[100px] left-[46%] mt-[400px]' src={tooth} alt='Tooth'/>
 
    </div>
    
    </div>
  )
}

export default AboutSixthFrame