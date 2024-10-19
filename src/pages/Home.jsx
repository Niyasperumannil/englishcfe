import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Home() {
    const handlewhatsapp = () => {
        const phoneNumber = 9562869016
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
        window.open(whatsappURL, '_blank')

    }
    return (
        <>
            <section className='bg-gradient-to-b from-blue-500 from-50% via-sky-500  to-sky-500 '>
                <div className='grid grid-cols-1 md:grid-cols-2 md:h-screen'>
                    <div className=' sm:pt-60 sm:ps-36  pt-28'>
                        <h1 className='text-xl sm:text-4xl font-bold  mb-6 text-white text-center md:text-start '><span className='font-normal text-blue-100 '>WELCOME TO</span> APFEL ACADEMY</h1>
                        <h1 className='text-blue-100 sm:text-5xl text-2xl sm:ms-6 ms-0 md:ms-6 text-center md:text-start'>Speak English Fluently </h1>
                        <h1 className='text-blue-100 sm:text-5xl text-2xl mt-5  ms-0 md:ms-20 text-center md:text-start'>With Confidence</h1>
                        <div className='flex justify-center md:justify-start'>
                            <button class="bg-green-500 hover:bg-green-600 text-white font-normal py-3 px-5 rounded-full mt-10    md:ms-32 " onClick={handlewhatsapp}>
                                <FontAwesomeIcon icon={faWhatsapp} className='fa-2xl me-4' /> Contact on WhatsApp!
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-center mt-10'>
                        <img src="/cover.png" className='md:w-11/12 w-12/12' alt="" />


                    </div>
                </div>
            </section>

        </>
    );
}

export default Home;
