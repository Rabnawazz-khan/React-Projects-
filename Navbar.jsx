import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative z-50">
      <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
        <span className="text-xl font-bold tracking-wide z-50">Rab Nawaz</span>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-10 top-6 cursor-pointer z-50">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {menuOpen ? 'X' : '☰'}
          </button>
        </div>

        {/* Menu List - Desktop */}
        <ul className="hidden md:flex gap-6 font-semibold">
          <a href="#About"><li className="hover:text-gray-300">About</li></a>
          <a href="#Experience"><li className="hover:text-gray-300">Experience</li></a>
          <a href="#Projects"><li className="hover:text-gray-300">Projects</li></a>
          <a href="#Contact"><li className="hover:text-gray-300">Contact</li></a>
        </ul>

        {/* Menu List - Mobile */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm mt-16 z-40">
            <ul className="flex flex-col items-center gap-8 pt-10 text-xl">
              <a href="#About" onClick={toggleMenu}><li className="hover:text-gray-300">About</li></a>
              <a href="#Experience" onClick={toggleMenu}><li className="hover:text-gray-300">Experience</li></a>
              <a href="#Projects" onClick={toggleMenu}><li className="hover:text-gray-300">Projects</li></a>
              <a href="#Footer" onClick={toggleMenu}><li className="hover:text-gray-300">Contact</li></a>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
