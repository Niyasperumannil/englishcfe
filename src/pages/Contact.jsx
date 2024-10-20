import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function Contact() {
    const form = useRef();

    const[formData,setFormData]=useState({
        from_name:'',
        from_email:'',
        address:'',
        message:''
    })

    // emailjs call
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(
          () => {
           
            toast.success('✨ Your message has been sent successfully! We’ll get back to you shortly. 😊', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
                });
                // clear the form
                setFormData({
                    from_name:'',
                    from_email:'',
                    address:'',
                    message:''

                })
          },
          (error) => {
            toast.error('⚠️ Oops! Something went wrong while sending your message. Please try again later. 🙁', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
            console.log('FAILED...', error.text); 
          },
        );
    };
    // update form data on iput change
    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData({...formData,[name]:value})

    }
 
    
console.log(formData)

    return (
        <>
            <div className='md:pt-28 md:px-24 pt-20 bg-cover  contactimg'>
                <div className='grid md:grid-cols-2 grid-cols-1 md:p-14 p-10 text-white'>
                    <div>
                        <h1 className='md:text-6xl text-5xl font-semibold text-white'  >Contact Us</h1>
                        {/* call us */}
                        <div className='flex items-center md:text-4xl text-3xl md:mt-24 mt-10'>
                            <FontAwesomeIcon icon={faPhone} className='text-blue-600 me-5' />
                            <h1 className='text-white font-bold '>Call Us</h1>
                        </div>
                        <h1 className='mt-5 text-xl'>+91 1234567890,+91 1234567890</h1>
                        {/* location */}
                        <div className='flex items-center md:text-4xl text-3xl md:mt-20 mt-10'>
                            <FontAwesomeIcon icon={faLocationDot} className='text-blue-600 me-5' />
                            <h1 className='text-white font-bold '>Location</h1>
                        </div>
                        <h1 className='mt-5 text-xl'>Indira Nagar, Mannuthy
                            Thrissur, Kerala 680651</h1>
                        {/* e-mail */}
                        <div className='flex items-center md:text-4xl text-3xl md:mt-20 mt-10'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-blue-600 me-5' />
                            <h1 className='text-white font-bold '>E-Mail</h1>
                        </div>
                        <h1 className='mt-5 text-xl'>apfelacademy@gmail.com</h1>
                    </div>
                    {/* form */}
                    <div>
                        <form ref={form} onSubmit={sendEmail} >
                        <div className='grid md:grid-cols-2 grid-cols-1 md:mt-4 mt-20' >
                            {/* email form */}
                            <div >
                                <h1 className='text-xl' >E-mail</h1>
                                <input type="email" className='w-full h-10 bg-transparent outline-none active:none' placeholder='Enter a valid Email Address' name='from_email' value={formData.from_email} required onChange={(e)=>handleChange(e)} />
                                <div className='h-px w-100% bg-red-100'></div>
                            </div>
                            {/* name */}
                            <div className='md:ms-10 mt-10 md:mt-0'>
                                <h1 className='text-xl' >Name</h1>
                                <input type="text" className='w-full h-10 bg-transparent outline-none border-none focus:none' placeholder='Enter Your Name' name='from_name' value={formData.from_name} required onChange={(e)=>handleChange(e)} />
                                <div className='h-px w-100% bg-red-100'></div>
                            </div>

                        </div>
                        <div className='mt-20'>
                            {/* address */}
                            <h1 className='text-xl' >Address</h1>
                            <input type="text" className='w-full h-10 bg-transparent outline-none' placeholder='Enter Your  Address' name='address' value={formData.address} required onChange={(e)=>handleChange(e)}/>
                            <div className='h-px w-100% bg-red-100'></div>
                            {/* message */}
                            <h1 className='mt-20 text-xl'>Message</h1>
                            <textarea className='w-full h-28 bg-transparent outline-none mt-3' placeholder='Enter Your  Address' name='message' value={formData.message} required onChange={(e)=>handleChange(e)}/>
                            <div className='h-px w-100% bg-red-100'></div>
                            <button className='bg-blue-700 py-4 w-full rounded-full mt-10 hover:bg-blue-800 font-bold text-xl tracking-widest'>SUBMIT</button>
                        </div>
                        </form>
                    </div>
                    
                
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Contact
