import React, { useState } from 'react'
import logo from '../assets/9c879909741ebaa6b7a614071079e542.jpg'
import { Link } from 'react-router-dom'


const data = [
    {
        id:1,
        name:'Home',
        link:'/',
    },
    {
        id:2,
        name:'About',
        link:'/about',
    },
    {
        id:3,
        name:'Services',
        link:'/services',
    },
    {
        id:4,
        name:'Carrer',
        link:'/carrer',
    },
   
    {
        id:5,
        name:'Contact',
        link:'/contact',
    },
]

const NavBar = () => {

    const [nav,setNav] = useState(false)
  return (
    <div className='w-full z-20 h-20 flex justify-between items-center px-7 md:px-10 lg:px-20'>
        <div className='md:w-[350px] w-[150px] h-auto flex items-center justify-center'>
        <Link to='/'>
        <img src={logo} className='w-full h-20 hidden md:flex'/>
        </Link>
        <h1 className='font-light text-xl'>Dentist</h1>
    </div>
        
        <div className='w-full h-auto md:flex justify-between items-center pl-20 pr-20 hidden'>
        {data.map(({id,name,link})=>(
            <Link to={link}>
            <div className='w-full h-auto px-2'>
            <h1 key={id} className='lg:text-xl md:text-sm font-semibold text-emerald-700'>{name}</h1>
            </div>
            </Link>
        ))} 
        </div>

        <div className='md:hidden flex' onClick={()=>setNav(!nav)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
        </div>
       
        <div className='w-[400px] hidden h-16 justify-center items-center bg-emerald-300 font-semibold text-xl text-white lg:flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
             </svg>
             <h1>066/889-435</h1>
            </div>


            {nav && (
                    <div className='w-full h-screen flex flex-col py-10  items-center px-10 absolute top-0 left-0 z-20 bg-white'>
                    
                    <div className=' pb-10 px-7 absolute top-7 right-2' onClick={()=> setNav(!nav)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  
                    </div>
                    {
                        data.map(({name,id,link})=>(
                            <Link to={link}>
                            <div key={id} className='w-full h-auto py-3'>
                              <h1 className='text-2xl font-semibold p-2'>{name}</h1>
                              </div>
                              </Link>
                              
                        ))
                    }
                    <div className='w-[200px] h-20 realtive flex justify-center items-center  bg-emerald-300 font-semibold text-xl text-white '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
             </svg>
             <h1>066/889-435</h1>
            </div>

                    </div>
                )}
        </div>
   
  )
}

export default NavBar
