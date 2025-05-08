import React from 'react';

const Footer = () => {
  return (
    <div id='Contact' className='flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-start md:items-center gap-6'>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-3xl font-normal'>Feel free to reach out</h3>
      </div>

      <ul className='text-sm md:text-xl space-y-3'>
      <li>
    <a href="rabnawazz2006@gmail.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
      ahsan663399@gmail.com
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/home" className="hover:underline" target="_blank" rel="noopener noreferrer">
      linkedin.com/home
    </a>
  </li>
  <li>
    <a href="https://github.com/https://github.com/Rabnawazz-khan" className="hover:underline" target="_blank" rel="noopener noreferrer">
      https://github.com/Rabnawazz-khan
    </a>
  </li>
      </ul>
    </div>
  );
};

export default Footer;
