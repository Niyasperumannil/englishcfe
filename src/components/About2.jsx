
import React from 'react'
import Aboutteam from './Aboutteam'

function About2() {
  return (
    <>
      <div className='md:px-24 px-5 bg-blue-300 '>
        <div className='md:ps-14 pt-14  grid md:grid-cols-2 '>

          <div data-aos='zoom-in-down' data-aos-duration="1000" >
            <h1 className='md:text-3xl text-xl  font-bold text-center text-blue-700 md:text-justify'>Provide The Best Spoken English Training For Confidence And Fluency For You.</h1>
            <div className="max-h-80 scrollable-content overflow-y-scroll md:maxh-full pe-5">
              <h1 className='text-justify mb-5 text-lg mt-5'>
                Providing advanced spoken English training to students, Apfel Academy is dedicated to enhancing communication skills for personal and professional success. Located in [Your Location], Apfel Academy focuses on delivering high-quality language education.
              </h1>
              <h1 className='text-justify mb-5 text-lg'>
                With a passionate team of educators, Apfel Academy offers the best training in spoken English, equipping students with the confidence and fluency needed for effective communication in various settings.
              </h1>
              <h1 className='text-justify mb-5 text-lg'>
                Our mission is to empower students through specialized spoken English courses, fostering their ability to communicate effectively and confidently. Our vision is to become a premier training center that maximizes value for our students by providing exceptional training services driven by excellence, innovation, and integrity in a supportive and engaging environment.
              </h1>
              <h1 className='text-justify mb-5 text-lg'>
                At Apfel Academy, we offer a variety of courses tailored to meet the needs of different learners, including beginner, intermediate, and advanced levels. Each course is designed with a curriculum that emphasizes practical speaking skills, listening comprehension, and real-life conversation scenarios.
              </h1>
              <h1 className='text-justify mb-5 text-lg'>
                We utilize modern teaching methods, including interactive activities, role-playing, and multimedia resources, to engage our students and enhance their learning experience. Our classrooms are equipped with the latest technology, allowing for an immersive and dynamic educational environment.
              </h1>
              <h1 className='text-justify mb-5 text-lg'>
                Beyond just language training, Apfel Academy is committed to fostering personal growth and self-confidence in our students. We provide personalized feedback and support to help each learner achieve their individual goals, whether for academic, professional, or personal purposes.
              </h1>
              <h1 className='text-justify mb-5 text-lg'>
                Additionally, we organize workshops and seminars featuring guest speakers from various industries, providing students with valuable insights into the professional world and the importance of effective communication in their careers.
              </h1>
              <h1 className='text-justify mb-5 text-lg'>
                Join us at Apfel Academy and take the first step toward mastering spoken English. With our comprehensive training programs and dedicated team, we are here to guide you on your journey to becoming a confident and fluent communicator.
              </h1>
            </div>


          </div>
          <div data-aos="zoom-in-down" data-aos-duration="1000" className='' >
            <img src="/about.png" alt="" className='  w-full h-full' />
          </div>
        </div>

      </div>
      <div className='md:px-24 bg-gradient-to-tl from-cyan-500 via-blue-400 to-indigo-400 pb-20'>
        <div className='md:pt-14 md:ps-14 py-16 px-5'>
          <h1 className='text-center md:text-4xl text-2xl text-white mb-10 font-bold'>Why Should You Prefer Us</h1>
          <div className='flex justify-between flex-wrap' data-aos='fade-up'>
            <div className='flex flex-col items-center text-white py-5'>
              <img src="/smile.png" alt="" className='w-28 h-28' />
              <h1 className='text-2xl font-bold '>95%</h1>
              <h1 className='font-semibol text-lg'>customer satisication </h1>
            </div>
            <div className='flex flex-col items-center text-white py-5'>
              <img src="/rupee.png" alt="" className='w-28 h-28' />
              <h1 className='text-2xl font-bold '>100%</h1>
              <h1 className='font-semibol text-lg'>Affordable Class</h1>
            </div>
            <div className='flex flex-col items-center text-white py-5'>
              <img src="/timer.png" alt="" className='w-28 h-28' />
              <h1 className='text-2xl font-bold '>24/7</h1>
              <h1 className='font-semibol text-lg'>Flexible Schedule</h1>
            </div>
            <div className='flex flex-col items-center text-white py-5'>
              <img src="/teacher.png" alt="" className='w-28 h-28' />
              <h1 className='text-2xl font-bold '>100%</h1>
              <h1 className='font-semibol text-lg'>Expert Instructors</h1>
            </div>
          </div>
        </div>
      </div>
      <Aboutteam />

    </>
  )
}

export default About2
