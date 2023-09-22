import React from 'react'

const AboutForthFrame = () => {
  return (
    <div className='w-full h-auto py-14 md:px-20 px-7 bg-white'>
    <div className='flex justify-center items-center'><h1 className='text-4xl font-extrabold py-6'>Do you want to become Dentist?</h1></div>
    <div className='flex justify-center items-center'><h1 className='text-xl font-extrabold pb-14 text-gray-500'>Watch this video!</h1></div>
    <div className=' flex justify-center items-center pb-10'>
        
<iframe className='w-[720px] h-[480px] ' src="https://www.youtube.com/embed/0CFLTrPvwFY?si=sV0yjoD2Z4PpiOpP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
</div>
  )
}

export default AboutForthFrame