import React from 'react'
import Insta from '../assets/new-Instagram-logo-white-glyph.png'
import Fb from '../assets/facebook-icon-white-png.png'
import YT from '../assets/dc4LABqni.png'
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
        name:'Financing',
        link:'/financing',
    },
    {
        id:6,
        name:'Contact',
        link:'/contact',
    },
]

const Footer = () => {

  return (
    <div className='w-full h-auto flex md:flex-row flex-col justify-between  py-14 px-20 bg-black'>
    <div className='flex-col flex w-full'>
        
        <div className='w-[100px]  pl-14 text-white h-auto flex flex-grow items-center justify-center'>
            <img src={logo} className='w-[40px]'/>
            <h1 className='font-light text-xl'>Dentisry</h1>
        </div>

    </div>


<div className=' w-full h-auto'>
<div className='pb-6'>
<h1 className='text-white text-2xl font-extrabold'>NavBar</h1>
</div>
    {
        data.map(({name,id,link})=>(
            <Link to={link}>
            <div key={id} className='w-full h-auto py-2 text-white'>
              <h1 className='text-xl font-semibold'>{name}</h1>
              </div>
              </Link>
        ))
    }
    </div>  


    <div className='w-full h-auto flex flex-col'>

        <div className='py-6'>
        <h1 className='text-white text-2xl font-extrabold'>Subscribe</h1>
        </div>

        <div className='pb-10'>
        <h1 className='text-white text-xl'>Sign up here to hear about news and promotions.</h1>
        </div>
        <div className='pb-4'>
        <h1 className='text-white text-xl'>Your email</h1>
        <div className='flex flex-row w-full h-auto'>
        <input placeholder='Email' className='p-3 w-3/4' type='e-mail' />
        <button className='text-white bg-gray-500  w-1/4 h-auto'>SUBMIT</button>
        </div>
        </div>

    </div>
   
    </div>
  
  )
}

export default Footer