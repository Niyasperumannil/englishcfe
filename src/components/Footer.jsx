import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
    return (
        <>
            <section>
              
                <section>
                    <div className="flex flex-col md:flex-row  bg-blue-100 ">
                        <div className="flex-1 p-4">
                            <div className=" p-3 ">
                                <h2 className="text-4xl font-bold text-gray-800">Follow Us</h2>

                                <div className="flex    mt-5">
                                    <a href="https://www.youtube.com/@ApfelAcademy396" target="_blank" className="me-6">
                                        <div
                                            className="flex items-center justify-center h-12 w-12  bg-white rounded-lg transition-colors duration-300 ease-in-out hover:bg-red-600  text-red-600 hover:text-white">
                                            <FontAwesomeIcon icon={faYoutube} className='fa-xl' />
                                        </div>
                                    </a>
                                    <a href="" target="_blank" className="me-6">
                                        <div
                                            className="flex items-center justify-center h-12 w-12  bg-white rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-600  text-blue-600 hover:text-white">
                                            <FontAwesomeIcon icon={faFacebook} className='fa-xl' />
                                        </div>
                                    </a>
                                    <a href="https://www.instagram.com/apfel_academy/" target="_blank">
                                        <div
                                            className="flex items-center justify-center h-12 w-12 bg-white rounded-lg transition-colors duration-300 ease-in-out me-6 text-pink-800 hover:text-white hover:bg-gradient-to-tr hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500">
                                            <FontAwesomeIcon icon={faInstagram} className='fa-xl' />

                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1  p-4 ">
                            <div className="p-3">
                                <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
                                <div className="mt-5">


                                    <a href=""
                                        className="links text-2xl group transition-all duration-300 ease-in-out hover:text-teal-500">
                                        {/*  */}
                                        <FontAwesomeIcon icon={faPhone} className='me-5 transition-all duration-300 ease-in-out group-hover:pr-2 ' />
                                        1234567890
                                    </a>

                                

                                    <br />
                                    <a href="mailto:@gmail.com"
                                        className="text-2xl group transition-all duration-300 ease-in-out hover:text-teal-500 ">
                                        <FontAwesomeIcon icon={faEnvelope} className='me-4 transition-all duration-300 ease-in-out group-hover:pr-2 mt-3' /> apfelacademy@gmail.com
                                    </a>
                                    <br />

                                    <a href="mailto:@gmail.com"
                                        className="text-2xl group transition-all duration-300 ease-in-out hover:text-teal-500 ">
                                        <FontAwesomeIcon icon={faEnvelope} className='me-4 transition-all duration-300 ease-in-out group-hover:pr-2 mt-3' /> apfelacademy@gmail.com
                                    </a><br />
                                    <a href="https://maps.app.goo.gl/HnfQTrHqXkMbupR67"
                                        className="text-2xl group transition-all duration-300 ease-in-out hover:text-teal-500">
                                        {/* <FontAwesomeIcon icon={faLocationDot} /> 
                                             me-5 transition-all duration-300 ease-in-out group-hover:pr-2*/}
                                        <FontAwesomeIcon icon={faLocationDot} className=' ms-1   me-6 transition-all duration-300 ease-in-out group-hover:pr-2 mt-3' />
                                        Thrissur,Kerala
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1  p-4 ">

                            <div className="p-3">
                                <h2 className="text-4xl font-bold text-gray-800 ">Quick Links</h2>
                                <div className="mt-5">
                                    <a href="#"
                                        className="text-2xl group transition-all duration-300 ease-in-out hover:text-teal-500">
                                        <FontAwesomeIcon icon={faArrowRight} className='me-4 transition-all duration-300 ease-in-out group-hover:pr-2 ' /> Home
                                    </a> <br />
                                    <a href="about.html"
                                        className="text-2xl group transition-all duration-300 ease-in-out hover:text-teal-500">
                                        <FontAwesomeIcon icon={faArrowRight} className='me-5 transition-all duration-300 ease-in-out group-hover:pr-2 ' />About
                                    </a> <br />
                                    <a href="placements.html"
                                        className="text-2xl group transition-all duration-300 ease-in-out hover:text-teal-500">
                                        <FontAwesomeIcon icon={faArrowRight} className='me-5 transition-all duration-300 ease-in-out group-hover:pr-2 ' />Placements
                                    </a><br />
                                    <a href="gallery.html"
                                        className="text-2xl group transition-all duration-300 ease-in-out hover:text-teal-500">
                                        <FontAwesomeIcon icon={faArrowRight} className='me-5 transition-all duration-300 ease-in-out group-hover:pr-2 ' />Gallery
                                    </a><br />
                                    <a href="contact.html"
                                        className="text-2xl group transition-all duration-300 ease-in-out hover:text-teal-500">
                                        <FontAwesomeIcon icon={faArrowRight} className='me-5 transition-all duration-300 ease-in-out group-hover:pr-2 ' />Contact
                                    </a><br />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <footer className=''>
                <h1 className="text-xl text-center bg-slate-700 text-white p-5 ">Copyright © 2024 by Apfel || All Rights reserved</h1>
            </footer>

        </>
    )
}

export default Footer
