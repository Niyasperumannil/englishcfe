import React from 'react'
import useWhatsApp from '../hooks/useWhatsApp';

function Gallery() {
    const { handleWhatsApp } = useWhatsApp();
    const phoneNumber = '9562869016';

    return (
        <>
            <div className='md:pt-28 pt-24 md:px-24 bg-blue-200'>

                <div className='md:p-14 p-5 grid md:grid-cols-3 grid-cols-1 gap-8'>

                    <div className='rounded-lg'>
                        <img
                            src="/cover.png"
                            alt="Cover"
                            className='w-full h-full  rounded-lg shadow-2xl  hover:scale-110 transition duration-300 ease-in-out'
                        />
                    </div>
                    <div className='rounded-lg'>
                        <img
                            src="/cover.png"
                            alt="Cover"
                            className='w-full h-full  rounded-lg shadow-2xl  hover:scale-110 transition duration-300 ease-in-out'
                        />
                    </div>   <div className='rounded-lg'>
                        <img
                            src="/cover.png"
                            alt="Cover"
                            className='w-full h-full  rounded-lg shadow-2xl  hover:scale-110 transition duration-300 ease-in-out'
                        />
                    </div>   <div className='rounded-lg'>
                        <img
                            src="/cover.png"
                            alt="Cover"
                            className='w-full h-full  rounded-lg shadow-2xl  hover:scale-110 transition duration-300 ease-in-out'
                        />
                    </div>   <div className='rounded-lg'>
                        <img
                            src="/cover.png"
                            alt="Cover"
                            className='w-full h-full  rounded-lg shadow-2xl  hover:scale-110 transition duration-300 ease-in-out'
                        />
                    </div>   <div className='rounded-lg'>
                        <img
                            src="/cover.png"
                            alt="Cover"
                            className='w-full h-full  rounded-lg shadow-2xl  hover:scale-110 transition duration-300 ease-in-out'
                        />
                    </div>
                </div>
            </div>
            <div className='md:px-24 md:py-32 py-20 bg-black text-white'>
                <div className='md:px-14  '>
                    <h1 className='text-center  md:text-4xl md:p-16 py-9'>Don't wait! Enroll in Apfel Academy's expert-led English courses today and improve your communication skills</h1>
                    <h1 className='text-center md:text-xl'>For any inquiries, feel free to call or WhatsApp us at +91 80866 51651.</h1>
                    <div className='flex justify-center'>
                        <button className=' bg-blue-500 px-8 py-2 rounded-full text-2xl mt-10 hover:bg-blue-700' data-aos='fade-up' onClick={() => handleWhatsApp(phoneNumber)}>Join Now</button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Gallery
