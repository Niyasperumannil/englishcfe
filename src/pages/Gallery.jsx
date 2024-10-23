import React from 'react'
import useWhatsApp from '../hooks/useWhatsApp';
import Aboutlast from '../components/Aboutlast';
import '../App.css';

function Gallery() {
    const { handleWhatsApp } = useWhatsApp();
    const phoneNumber = '9562869016';

    return (
        <>
            <div className='md:pt-28 pt-24 xl:px-24 h-screen bg-cover1 bg-cover flex justify-center items-center  bg-fixed' >
                <h1 className='text-8xl text-white font-bold'>Welcome to apfel gallery</h1>
               
            </div>
            <div className='grid md:grid-cols-2 h-50 '>
                    <div className='   bg-cover2 bg-no-repeat bg-left  w-full bg-fixed '>
                 
                    </div>
                    <div className='bg-blue-100 flex justify-center items-center '>
                        <h1>lfdkhfjdhk</h1>

                    </div>


                </div>
                <div className='grid md:grid-cols-2 h-50 '>
                    
                    <div className='bg-blue-100 flex justify-center items-center '>
                        <h1>lfdkhfjdhk</h1>

                    </div>
                    <div className='bg-cover3 bg-right bg-cover bg-no-repeat w-full bg-fixed  '></div>

                  


                </div>
                <div className='grid md:grid-cols-2 h-50 '>
                    <div className='   bg-cover1 bg-cover bg-no-repeat bg-left  w-full '>
                 
                    </div>
                    <div className='bg-blue-100 flex justify-center items-center  '>
                        <h1>lfdkhfjdhk</h1>

                    </div>


                </div>
                <div className='grid md:grid-cols-2 h-50 '>
                    
                    <div className='bg-blue-100 flex justify-center items-center '>
                        <h1>lfdkhfjdhk</h1>

                    </div>
                    <div className='bg-cover3 bg-right bg-cover bg-no-repeat w-full  bg-fixed '></div>

                  


                </div>
            <Aboutlast />

        </>

    )
}

export default Gallery
