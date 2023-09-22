import React from 'react'

const ContactThirdFrame = () => {
  return (
    <div className='w-full h-auto py-14 px-7 lg:px-52   bg-emerald-200'>
    <div className='flex justify-center items-center'>
    <h1 className='text-2xl md:text-4xl font-bold py-7'>Contact us with this form.</h1>
    </div>
    <div className=' w-full h-auto py-14 bg-white flex flex-col justify-center items-center shadowbox1 rounded-lg'>
        <div className='md:max-w-[700px] md:min-w-[600px] w-full px-7 h-auto py-7 flex flex-col'>
            <label className='text-2xl'>Name</label>
            <input placeholder='Name' className='max-w-full h-auto p-4 border-2 border-gray-600 rounded' />
        </div>
        <div className='md:max-w-[700px] md:min-w-[600px] w-full px-7 h-auto py-7 flex flex-col'>
        <label className='text-2xl'>Phone Number*</label>
        <input placeholder='Name' className='max-w-full h-auto p-4 border-2 border-gray-600 rounded' />
    </div>
    <div className='md:max-w-[700px] md:min-w-[600px] w-full px-7 h-auto py-7 flex flex-col'>
    <label className='text-2xl'>Email*</label>
    <input placeholder='Name' className='max-w-full h-auto p-4 border-2 border-gray-600 rounded' />
</div>
<div className='md:max-w-[700px] md:min-w-[600px] w-full px-7 h-auto py-7 flex flex-col'>
<label className='text-2xl'>Message</label>
<textarea rows="8" className='md:max-w-[700px] h-auto border-2 border-gray-600'></textarea>
</div>
<div className='flex  justify-center items-center w-full h-auto px-7'>
<input type="checkbox" className='w-[30px] h-[30px]  border-gray-500 border-2 rounded-md' />
<h1 className='text-xl pl-4 text-gray-400'>If you want to hear our promotions, check.</h1>
</div>
<div className='w-full h-auto py-7 flex justify-center items-center '><button className='w-[120px] buttonShadow p-3 bg-emerald-800 text-white rounded'>Submit</button></div>
        </div>
    </div>
  )
}

export default ContactThirdFrame