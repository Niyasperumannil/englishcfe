import React from 'react'
import useWhatsApp from '../hooks/useWhatsApp';

function Aboutlast() {
  const { handleWhatsApp } = useWhatsApp();
  const phoneNumber = '919562869016';
  return (
    <>
    <div className='xl:px-24 xl:py-32 py-20 bg-black text-white'>
        <div className='xl:px-14  '>
            <h1 className='text-center sm:text-3xl xl:text-4xl xl:p-16 py-9'>Don't wait! Enroll in English cafe expert-led English courses today and improve your communication skills</h1>
            <h1 className='text-center sm:text-3xl xl:text-xl'>For any inquiries, feel free to call or WhatsApp us at +91 9562869016 .</h1>
            <div className='flex justify-center'>
                <button className=' bg-blue-500 px-8 py-2 rounded-full text-2xl mt-10 hover:bg-blue-700' data-aos='fade-up' onClick={()=>handleWhatsApp(phoneNumber)}>Join Now</button>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Aboutlast
