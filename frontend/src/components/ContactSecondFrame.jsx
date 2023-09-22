import React from 'react'
import pic from '../assets/mas.PNG'




const ContactSecondFrame = () => {
  return (
    <div className='w-full h-auto z-10'>
    <h1 className='text-center text-3xl md:text-6xl font-extrabold pt-14  '>Here you can find us</h1>
    <div className='py-14 w-full h-auto flex lg:flex-row-reverse flex-col px-7 lg:px-20 z-20'>

    <div className='w-full h-auto lg:h-[500px] pb-5 lg:pb-0 rounded-full flex flex-col justify-center items-center '>
    <h1 className='w-full h-auto text-2xl md:text-4xl  py-3 font-bold'>Google Maps location</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.0105695090824!2d-118.45138052443133!3d33.9922622731795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba8dc9b8e22d%3A0x8e030cf93b9f4982!2zMTIzNCBFbG0gU3QsIFZlbmljZSwgQ0EgOTAyOTEsINCh0ZjQtdC00LjRmtC10L3QtSDQlNGA0LbQsNCy0LU!5e0!3m2!1ssr!2sba!4v1695408819514!5m2!1ssr!2sba" className='w-full h-full object-cover'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className='w-full h-auto px-10 flex flex-col justify-center'>
        <h1 className=' font-bold text-2xl py-4 lg:text-4xl'>Dentist</h1>
        <h1 className='text-2xl text-bold'>Adress:</h1>
        <h1 className='py-7 text-xl text-gray-500'>1234 Elm Street, Los Angeles, California 90001, United States</h1>
        <h1 className=' text-xl text-gray-500'>Phone: 066/889-435 </h1>
        <h1 className='pb-7 text-xl text-gray-500'>Phone 2: 051/584-986 </h1>
        <h1 className=' font-bold text-2xl lg:text-4xl'>What time do we work?</h1>
        <h1 className='py-7 text-xl text-gray-500'>06:00 am - 05:00 pm</h1>
        
        </div>
   
    </div>
    </div>
  )
}

export default ContactSecondFrame