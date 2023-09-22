import React from 'react'
import man from '../assets/rm328-366-tong-08_1.jpg'
import man1 from '../assets/download.jpg'
import woman from '../assets/smiling-woman-on-a-white-background-hands-together.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const data = [
    {
        id:1,
        text:'\"They are so friendly...\"',
        name:'Maja Megalopez',
        pic: woman,
    },
    {
        id:2,
        text:'\"I am very confortable here.\"',
        name:'Stefan Markovic',
        pic: man
    },
    {
        id:3,
        text:'\"So, so, so friendly...\"',
        name:'Marcus Wiliams',
        pic: man1
    },
]

const AboutFifthPage = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  })
  return (
    <div className='w-full h-auto py-14 md:px-20 px-7 bg-emerald-200'>
        <h1 className='w-full h-auto py-14 text-4xl font-bold text-center'>Reviews</h1>
        <div className='w-full h-auto flex flex-col lg:flex-row'>

        {data.map(({id,name,text,pic})=>(
            <div data-aos="fade-up" key={id} className='w-full h-auto p-3 flex flex-col justify-center items-center mx-3 my-3 bg-white py-14 px-7'>
            <div className='w-[150px] h-[150px] rounded-full bg-gray-300'> <img src={pic} alt='pic' className='w-full h-full object-cover rounded-full'/></div>
            <div className=' h-auto justify-center items-center w-[200px] flex py-7 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
            </div>
            <div className='w-full h-auto flex justify-start'>
            <h1>{text}</h1>
            </div>
            <div className='flex justify-start items-start w-full h-auto py-4 '>
            <h1 className='text-xl font-bold'>{name}</h1>
            </div>
        </div>
        ))}
        </div>
        <div className='w-full h-auto py-14  justify-center items-center hidden lg:flex'>
            <div className='w-[20px] h-[20px] rounded-full bg-white'></div>
            <div className='w-[20px] h-[20px] mx-3 rounded-full bg-white'></div>
            <div className='w-[20px] h-[20px] rounded-full bg-white'></div>
        </div>
    </div>
  )
}

export default AboutFifthPage