import React from 'react';

const Services: React.FC = () => {
  return (
    <div className='about-page p-6'>
      <section className='introduction my-8 flex flex-col lg:flex-row items-center'>
        <div className='lg:w-1/2 text-center lg:text-left'>
          <h1 className='text-4xl font-bold mb-4 custom-underline'>
            What We Do
          </h1>
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
      </section>
    </div>
  );
};

export default Services;
