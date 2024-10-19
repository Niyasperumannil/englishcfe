import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import useWhatsApp from '../hooks/useWhatsApp';

function Home() {
    const { handleWhatsApp } = useWhatsApp();
    const phoneNumber = '9562869016';
    return (
        <>
            <section className='bg-gradient-to-b from-blue-500 from-50% via-sky-500  to-sky-500 '>
                <div className='grid grid-cols-1 md:grid-cols-2 md:h-screen'>
                    <div className=' sm:pt-60 sm:ps-36  pt-28'>
                        <h1 className='text-xl sm:text-4xl font-bold  mb-6 text-white text-center md:text-start '><span className='font-normal text-blue-100 '>WELCOME TO</span> APFEL ACADEMY</h1>
                        <h1 className='text-blue-100 sm:text-5xl text-2xl sm:ms-6 ms-0 md:ms-6 text-center md:text-start'>Speak English Fluently </h1>
                        <h1 className='text-blue-100 sm:text-5xl text-2xl mt-5  ms-0 md:ms-20 text-center md:text-start'>With Confidence</h1>
                        <div className='flex justify-center md:justify-start'>
                            <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded-full mt-10     md:ms-32 " onClick={() => handleWhatsApp(phoneNumber)}>
                                <FontAwesomeIcon icon={faWhatsapp} className='fa-2xl me-4 ' /> Contact on WhatsApp!
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-center mt-10'>
                        <img src="/cover.png" className='md:w-11/12 w-12/12' alt="" />


                    </div>
                </div>
            </section>
            <section className="py-20 bg-gray-100">
                <h2 className="text-3xl text-center font-bold mb-8">Featured Courses</h2>

                {/* Course Features Description */}
                <p className="text-center text-lg mb-10 px-4">
                    At Apfel Academy, our courses are designed to empower students with the skills and confidence needed to communicate effectively in English.
                    Each course covers essential language skills through interactive learning, experienced instructors, and real-world application, ensuring a well-rounded learning experience.
                    Join us to enhance your fluency and connect with a supportive community!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Example of a Course Card */}
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Course Title</h3>
                        <p>A brief description of the course.</p>
                        <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
                    </div>

                    {/* Repeat for additional courses */}
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Course Title 2</h3>
                        <p>A brief description of the second course.</p>
                        <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Course Title 3</h3>
                        <p>A brief description of the third course.</p>
                        <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
                    </div>
                </div>
            </section>



            {/* enroll now */}
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
    );
}

export default Home;
