import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import useWhatsApp from '../hooks/useWhatsApp';
import Aboutlast from '../components/Aboutlast';
import { motion } from 'framer-motion';
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}
const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

function Home() {
    const { handleWhatsApp } = useWhatsApp();
    const phoneNumber = '919562869016';
    return (
        <>
            <section className='bg-gradient-to-b from-blue-500 from-50% via-sky-500  to-sky-500 '>
                <div className='grid grid-cols-1 xl:grid-cols-2 xl:h-screen'>
                    <div className=' xl:pt-60 xl:ps-36  pt-28'>
                        <h1 className='text-xl sm:text-6xl xl:text-4xl font-bold  mb-6 text-white text-center xl:text-start '><span className='font-normal text-blue-100 '>WELCOME TO</span> English Cafe</h1>
                        <h1 className='text-blue-100 sm:text-7xl xl:text-5xl text-2xl xl:ms-6 ms-0 text-center xl:text-start'>Speak English Fluently </h1>
                        <h1 className='text-blue-100  sm:text-7xl  xl:text-5xl text-2xl mt-5  ms-0 xl:ms-20 text-center xl:text-start'>With Confidence</h1>
                        <div className='flex justify-center xl:justify-start'>
                         
                                <motion.button whileHover={{scale:'1.1',boxShadow:'0px 0px 8px rgb(255,255,255)'}} transition={{duration:'0.5'}}
                                  
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:text-3xl xl:text-base px-5 rounded-full mt-10 xl:ms-32"
                                    onClick={() => handleWhatsApp(phoneNumber)}
                                >
                                    <FontAwesomeIcon icon={faWhatsapp} className="fa-2xl  xl:fa-2xl sm:  me-4" /> Contact on WhatsApp!
                                </motion.button>
                         
                        </div>
                    </div>
                    <div className='flex items-center justify-center mt-10'>
                        <img src="./Vineeth4.png" className='xl:w-11/12 w-12/12' alt="" />


                    </div>
                </div>
            </section>




            {/* enroll now */}
            <Aboutlast />




        </>
    );
}

export default Home;
