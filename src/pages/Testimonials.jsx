import React from 'react';
import { motion } from 'framer-motion';
import Aboutlast from '../components/Aboutlast';

const testimonials = [
    {
        name: 'John Doe',
        role: 'Software Engineer',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        testimonial: 'This product has significantly improved my workflow, allowing me to focus on more important tasks.',
    },
    {
        name: 'Jane Smith',
        role: 'Product Designer',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        testimonial: 'The design and user experience are outstanding, making it a pleasure to use every day!',
    },
    {
        name: 'Michael Chen',
        role: 'Entrepreneur',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        testimonial: 'It helped me scale my business and manage everything with ease.',
    }

];

const Testimonials = () => {
    return (
        <>
        <section className="md:pt-28 pt-24 md:px-24 px-4 bg-gradient-to-b from-blue-500 from-50% via-sky-500  to-sky-500  ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-14">
                <motion.div
                    animate={{ x: 1, opacity: 1 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="md:text-4xl text-3xl font-bold text-center  mb-8 text-white">What Our Clients Say</h2>
                </motion.div>


                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div

                            className={`bg-blue-100 shadow-lg rounded-lg p-6 transition-all transform hover:shadow-2xl hover:scale-110 ${index % 2 === 0 ? 'border-t-4 border-indigo-500' : 'border-t-4 border-pink-500'
                                }`}>
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                />
                                <div>
                                    <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                                    <span className="text-gray-600">{testimonial.role}</span>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                        </div>
                    ))}
                </div>
              
            </div>


         
        </section>
        <Aboutlast/>
   
        </>
    );
};

export default Testimonials;
