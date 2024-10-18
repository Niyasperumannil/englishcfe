import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import Aboutlast from './Aboutlast'

function Aboutteam() {
    return (
        <>
            <div className='md:px-24 px-5 bg-blue-300  '>
            <h1 className='text-4xl text-center text-blue-900 pt-10 font-bold'>Our Team</h1>
                <div className='md:ps-14 pt-14  grid md:grid-cols-4 gap-5 py-20'>
                    {/* 1st card */}
                   
                    <div className='bg-blue-100 shadow-2xl rounded-lg hover:bg-blue-200 hover:shadow-red-100' data-aos='flip-left' >
                        <div className='flex justify-center items-center '>
                            <img src="/basil.png" alt="" className='rounded-full w-28 h-28 mt-16 border-4 border-white' />
                        </div>
                        <div className='text-center'>
                            <h1 className=' font-bold'>Mohammed Basil</h1>
                            <h1 className=''>Founder & CEO</h1>
                        </div>
                        {/* social media links */}
                        <div className='flex justify-evenly mt-16 mb-5'>
                            {/* whatsapp */}
                            <a href="" target="_blank" className="">
                                <div
                                    className="flex items-center justify-center h-10 w-10  bg-white rounded-lg transition-colors duration-300 ease-in-out hover:bg-green-600  text-green-600 hover:text-white">
                                    <FontAwesomeIcon icon={faWhatsapp} className='fa-xl' />
                                </div>
                            </a>
                            {/* facebook */}
                            <a href="" target="_blank" className="">
                                <div
                                    className="flex items-center justify-center h-10 w-10  bg-white rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-600  text-blue-600 hover:text-white">
                                    <FontAwesomeIcon icon={faFacebook} className='fa-xl' />
                                </div>
                            </a>
                            {/* linkedin */}
                            <a href="" target="_blank" className="">
                                <div
                                    className="flex items-center justify-center h-10 w-10  bg-white rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-500  text-blue-500 hover:text-white">
                                    <FontAwesomeIcon icon={faLinkedin} className='fa-xl' />
                                </div>
                            </a>
                            {/* instagram */}
                            <a href="" target="_blank">
                                <div
                                    className="flex items-center justify-center h-10 w-10 bg-white rounded-lg transition-colors duration-300 ease-in-out  text-pink-800 hover:text-white hover:bg-gradient-to-tr hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500">
                                    <FontAwesomeIcon icon={faInstagram} className='fa-xl' />

                                </div>
                            </a>




                        </div>

                    </div>
                    {/* 2nd card */}
                    <div className='bg-blue-100 shadow-2xl rounded-lg hover:bg-blue-200 hover:shadow-red-100' data-aos='flip-left'>
                        <div className='flex justify-center items-center '>
                            <img src="/teacher.png" alt="" className='rounded-full w-28 h-28 mt-16 border-4 border-white' />
                        </div>
                        <div className='text-center'>
                            <h1 className=' font-bold'>Mohammed Basil</h1>
                            <h1 className=''>Founder & CEO</h1>
                        </div>
                        {/* social media links */}
                        <div className='flex justify-evenly mt-16 mb-5'>
                            {/* whatsapp */}
                            <a href="" target="_blank" className="">
                                <div
                                    className="flex items-center justify-center h-10 w-10  bg-white rounded-lg transition-colors duration-300 ease-in-out hover:bg-green-600  text-green-600 hover:text-white">
                                    <FontAwesomeIcon icon={faWhatsapp} className='fa-xl' />
                                </div>
                            </a>
                            {/* facebook */}
                            <a href="" target="_blank" className="">
                                <div
                                    className="flex items-center justify-center h-10 w-10  bg-white rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-600  text-blue-600 hover:text-white">
                                    <FontAwesomeIcon icon={faFacebook} className='fa-xl' />
                                </div>
                            </a>
                            {/* linkedin */}
                            <a href="" target="_blank" className="">
                                <div
                                    className="flex items-center justify-center h-10 w-10  bg-white rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-500  text-blue-500 hover:text-white">
                                    <FontAwesomeIcon icon={faLinkedin} className='fa-xl' />
                                </div>
                            </a>
                            {/* instagram */}
                            <a href="" target="_blank">
                                <div
                                    className="flex items-center justify-center h-10 w-10 bg-white rounded-lg transition-colors duration-300 ease-in-out  text-pink-800 hover:text-white hover:bg-gradient-to-tr hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500">
                                    <FontAwesomeIcon icon={faInstagram} className='fa-xl' />

                                </div>
                            </a>




                        </div>

                    </div>
                    {/* 3rd card */}
                    <div className='bg-blue-100 shadow-2xl rounded-lg hover:bg-blue-200 hover:shadow-red-100' data-aos='flip-left'>
                        <div className='flex justify-center items-center '>
                            <img src="/teacher.png" alt="" className='rounded-full w-28 h-28 mt-16 border-4 border-white' />
                        </div>
                        <div className='text-center'>
                            <h1 className=' font-bold'>Mohammed Basil</h1>
                            <h1 className=''>Founder & CEO</h1>
                        </div>
                        {/* social media links */}
                        <div className='flex justify-evenly mt-16 mb-5'>
                            {/* whatsapp */}
                            <a href="" target="_blank" className="">
                                <div
                                    className="flex items-center justify-center h-10 w-10  bg-white rounded-lg transition-colors duration-300 ease-in-out hover:bg-green-600  text-green-600 hover:text-white">
                                    <FontAwesomeIcon icon={faWhatsapp} className='fa-xl' />
                                </div>
                            </a>
                            {/* facebook */}
                            <a href="" target="_blank" className="">
                                <div
                                    className="flex items-center justify-center h-10 w-10  bg-white rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-600  text-blue-600 hover:text-white">
                                    <FontAwesomeIcon icon={faFacebook} className='fa-xl' />
                                </div>
                            </a>
                            {/* linkedin */}
                            <a href="" target="_blank" className="">
                                <div
                                    className="flex items-center justify-center h-10 w-10  bg-white rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-500  text-blue-500 hover:text-white">
                                    <FontAwesomeIcon icon={faLinkedin} className='fa-xl' />
                                </div>
                            </a>
                            {/* instagram */}
                            <a href="" target="_blank">
                                <div
                                    className="flex items-center justify-center h-10 w-10 bg-white rounded-lg transition-colors duration-300 ease-in-out  text-pink-800 hover:text-white hover:bg-gradient-to-tr hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500">
                                    <FontAwesomeIcon icon={faInstagram} className='fa-xl' />

                                </div>
                            </a>




                        </div>

                    </div>
                    {/* 4th card */}
                    <div className='bg-blue-100 shadow-2xl rounded-lg hover:bg-blue-200 hover:shadow-red-100' data-aos='flip-left'>
                        <div className='flex justify-center items-center '>
                            <img src="/teacher.png" alt="" className='rounded-full w-28 h-28 mt-16 border-4 border-white' />
                        </div>
                        <div className='text-center'>
                            <h1 className=' font-bold'>Mohammed Basil</h1>
                            <h1 className=''>Founder & CEO</h1>
                        </div>
                        {/* social media links */}
                        <div className='flex justify-evenly mt-16 mb-5'>
                            {/* whatsapp */}
                            <a href="" target="_blank" className="">
                                <div
                                    className="flex items-center justify-center h-10 w-10  bg-white rounded-lg transition-colors duration-300 ease-in-out hover:bg-green-600  text-green-600 hover:text-white">
                                    <FontAwesomeIcon icon={faWhatsapp} className='fa-xl' />
                                </div>
                            </a>
                            {/* facebook */}
                            <a href="" target="_blank" className="">
                                <div
                                    className="flex items-center justify-center h-10 w-10  bg-white rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-600  text-blue-600 hover:text-white">
                                    <FontAwesomeIcon icon={faFacebook} className='fa-xl' />
                                </div>
                            </a>
                            {/* linkedin */}
                            <a href="" target="_blank" className="">
                                <div
                                    className="flex items-center justify-center h-10 w-10  bg-white rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-500  text-blue-500 hover:text-white">
                                    <FontAwesomeIcon icon={faLinkedin} className='fa-xl' />
                                </div>
                            </a>
                            {/* instagram */}
                            <a href="" target="_blank">
                                <div
                                    className="flex items-center justify-center h-10 w-10 bg-white rounded-lg transition-colors duration-300 ease-in-out  text-pink-800 hover:text-white hover:bg-gradient-to-tr hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500">
                                    <FontAwesomeIcon icon={faInstagram} className='fa-xl' />

                                </div>
                            </a>




                        </div>

                    </div>
                </div>
            </div>
            <Aboutlast/>

        </>
    )
}

export default Aboutteam
