/* eslint-disable @next/next/no-img-element */
import React from 'react';

const About: React.FC = () => {
  return (
    <div className='about-page p-6'>
      <section className='introduction my-8 flex flex-col lg:flex-row items-center'>
        <div className='lg:w-1/2 text-center lg:text-left'>
          <h1 className='text-4xl font-bold mb-4 custom-underline'>About Us</h1>
          <p className='text-lg leading-relaxed mb-4'>
            Welcome to Accessible Design Group. We specialize in designing
            accessible interiors tailored for individuals with injuries or
            disabilities. Our mission is to create spaces that enhance the
            quality of life, promoting independence and safety.
          </p>
          <p className='text-lg leading-relaxed mb-4'>
            Our team collaborates with insurance companies and health experts to
            ensure our designs meet the specific needs of our clients. We are
            dedicated to delivering top-notch services and innovative solutions
            that make a real difference in people's lives.
          </p>
        </div>
        <div className='lg:w-1/2 flex justify-center lg:justify-end'>
          <img
            src='/images/angie.jpeg'
            alt='Angie Aspeck'
            className='mask mask-squircle shadow-lg w-80 object-cover'
          />
        </div>
      </section>
      <section className='additional-content my-8'>
        <h2 className='text-3xl font-semibold mb-4 custom-underline'>
          Our Philosophy
        </h2>
        <p className='text-lg leading-relaxed mb-4'>
          At Accessible Design Group, we believe that accessible design is more
          than just compliance; it’s about creating inclusive environments that
          cater to the unique needs of each individual. Our holistic approach
          involves understanding the challenges faced by our clients and
          providing empathetic, thoughtful solutions.
        </p>
      </section>
    </div>
  );
};

export default About;
