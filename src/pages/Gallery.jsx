import React from 'react'
import useWhatsApp from '../hooks/useWhatsApp';
import Aboutlast from '../components/Aboutlast';

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
           <Aboutlast/>

        </>

    )
}

export default Gallery
