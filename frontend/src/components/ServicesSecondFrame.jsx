import React from 'react'
import second from '../assets/tooth-cleaning.jpg'
import first from '../assets/dental-work-cover.jpg'
import third from '../assets/kid-at-dentist-header-768x384.webp'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const data = [
    {
        id:1,
        name:'Aesthetic Dentistry',
        pic:first,
        text: '"Aesthetic Dentistry, through the use of prosthetics and artificial teeth, has the power to transform the appearance of one\'s teeth, restoring both confidence and a beautiful smile. This branch of dentistry not only improves oral health but also enhances the overall aesthetic appeal of a person\'s teeth."',
        style: 'flex-row bg-emerald-100',
        fad:'fade-right'
    },
    {
        id:2,
        name:'Oral Health Preservation',
        pic:second,
        text: '"Dentists are skilled professionals who address dental issues by assessing, diagnosing, and treating damaged or decayed teeth. They employ various techniques, including fillings, root canals, and crowns, to restore both the function and aesthetics of a compromised tooth, ensuring your continued oral health and a confident smile."',
        style: 'flex-row-reverse bg-emerald-200',
        fad:'fade-left'
    },
    {
        id:3,
        name:'Specialized Dental Care',
        pic:third,
        text: '"Within our dental practice, our team consists of highly skilled and experienced professionals who are dedicated to delivering exceptional care. With a commitment to excellence, they employ their expertise and state-of-the-art techniques to ensure your dental needs are met with the utmost professionalism and precision."',
        style: 'flex-row bg-emerald-100',
        fad:'fade-right'
    },
]
const ServicesSecondFrame = () => {
    useEffect(()=>{
        AOS.init({duration: 1000})
      })
  return (
    <div className='w-full h-auto py-14 px-7 relative z-50 md:px-20 bg-emerald-100'>

    <div className='w-full h-auto py-7 flex flex-col justify-between  '>
    {
        data.map(({id,pic,name,text,style,fad})=>(
            <div data-aos={fad} key={id} className={`flex flex-col lg:${style} w-full h-auto p-3`}>
            <div className='w-full h-auto'><img alt='pic' className='w-full h-full object-cover rounded-lg' src={pic} /></div>
            <div className='w-full h-auto p-7'>
            <div><h1 className='text-5xl font-bold py-6'>{name}</h1></div>
            <div><h1 className='text-xl'>{text}</h1></div>
            </div>
            </div>
        ))
    }
    </div>

    </div>
  )
}

export default ServicesSecondFrame