import React from 'react'
import About2 from '../components/About2'

function About() {
    return (
        <>

            <div className='bg-gradient-to-tl from-cyan-500 via-blue-400 to-indigo-400  pt-28 grid grid-cols-1  md:grid-cols-2 gap-2 md:px-24 px-4 md:h-screen ' id='about'>
                <div className=' md:p-14 p-2 text-center md:text-start text-white'>
                    <h1 className='text-5xl font-bold font-serif '>Apfel Academy</h1>
                    <h1 className='text-3xl font-medium mt-5'>Best Spoken English Institute in Kerala</h1>
                    <h1 className='text-xl mt-5 text-justify text-blue-100 font-medium italic'>Our <span className=' text-white'>highly experienced trainers</span> are dedicated to helping you <span className='text-white'>master the art of spoken English</span>, empowering you to<span className='text-white'> communicate effectively and confidently</span> in both casual and professional environments. Whether you're preparing for <span className='text-white'>career advancement, global interactions,</span> or simply aiming to <span className='text-white'>enhance your fluency</span>, our <span className='text-white'>tailored programs</span> provide the <span className='text-white'>comprehensive guidance</span> you need to succeed. <span className='text-white'>Join us</span> and unlock your <span className='text-white'>full potential</span> in English communication.</h1>
                </div>
                <div className=''>
                    <img src="/cover3.png" alt="cover" className='w-11/12 h-3/4' />
                </div>
            </div>
            <About2 />



        </>
    )
}

export default About
