import React from 'react';
import TextChange from '../TextChange.jsx';

const Home = () => {
  return (
    <div className='text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-10 md:p-20'>
      
      {/* Text Content */}
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-5xl font-bold leading-normal tracking-tighter'>
        <div className="transition ease duration-300 mt-4  text-5xl tracking-wide">
          <TextChange />
    <span className="animate-pulse">|</span>
  </div>
        </h1>
        <p className='text-sm md:text-xl tracking-wide p-2 leading-6'>
          Completed a hands-on web development internship focused on building responsive front-end applications using HTML, CSS, Bootstrap, Tailwind CSS, React JS, and modern JavaScript.
        </p>
        <button className='mt-5 text-white py-2 px-4 text-sm md:text-lg hover:opacity-80 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
          Contact Me
        </button>
      </div>

      {/* Image */}
      <div className='mb-8 md:mb-0 md:w-1/3'>
        <img
          className='w-full object-contain'
          src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Home;
