import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'



function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_1a4m0y5', 'template_c3x0ctj', form.current, {
          publicKey: 'wBahZPzgdSgVk8hm9',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
        <>
            <div className='pt-28 px-24 bg-cover  contactimg'>
                <div className='grid md:grid-cols-2 grid-cols-1 p-14 text-white'>
                    <div>
                        <h1 className='text-6xl font-semibold text-white'  >Contact Us</h1>
                        {/* call us */}
                        <div className='flex items-center text-4xl mt-24'>
                            <FontAwesomeIcon icon={faPhone} className='text-blue-600 me-5' />
                            <h1 className='text-white font-bold '>Call Us</h1>
                        </div>
                        <h1 className='mt-5 text-xl'>+91 1234567890,+91 1234567890</h1>
                        {/* location */}
                        <div className='flex items-center text-4xl mt-20'>
                            <FontAwesomeIcon icon={faLocationDot} className='text-blue-600 me-5' />
                            <h1 className='text-white font-bold '>Location</h1>
                        </div>
                        <h1 className='mt-5 text-xl'>Indira Nagar, Mannuthy
                            Thrissur, Kerala 680651</h1>
                        {/* e-mail */}
                        <div className='flex items-center text-4xl mt-20'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-blue-600 me-5' />
                            <h1 className='text-white font-bold '>E-Mail</h1>
                        </div>
                        <h1 className='mt-5 text-xl'>apfelacademy@gmail.com</h1>
                    </div>
                    {/* form */}
                    <div>
                        <form ref={form} onSubmit={sendEmail} >
                        <div className='grid md:grid-cols-2 grid-cols-1'>
                            {/* email form */}
                            <div>
                                <h1>E-mail</h1>
                                <input type="text" className='w-full h-10 bg-transparent outline-none' placeholder='Enter a valid Email Address' name='from_email' />
                                <div className='h-px w-100% bg-red-100'></div>
                            </div>
                            {/* name */}
                            <div className='ms-10'>
                                <h1>Name</h1>
                                <input type="text" className='w-full h-10 bg-transparent outline-none' placeholder='Enter Your Name' name='from_name' />
                                <div className='h-px w-100% bg-red-100'></div>
                            </div>

                        </div>
                        <div className='mt-10'>
                            {/* address */}
                            <h1>Address</h1>
                            <input type="text" className='w-full h-10 bg-transparent outline-none' placeholder='Enter Your  Address' name='address' />
                            <div className='h-px w-100% bg-red-100'></div>
                            {/* message */}
                            <h1 className='mt-10'>Message</h1>
                            <textarea className='w-full h-28 bg-transparent outline-none mt-3' placeholder='Enter Your  Address' name='message' />
                            <div className='h-px w-100% bg-red-100'></div>
                            <button className='bg-blue-700 py-4 w-full rounded-full mt-10 hover:bg-blue-800 font-bold text-xl tracking-widest'>SUBMIT</button>
                        </div>
                        </form>
                    </div>
                    
                 
                </div>
            </div>

        </>
    )
}

export default Contact
