import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path ? ' text-[#000] hover:text-[#5a5a5a]' : 'text-[#7c7b7b] hover:bg-[#f1e7cd] hover:text-[#5a5a5a]';

  return (
    <nav className={`md:bg-transparent text-white ${isOpen ? 'fixed top-0 right-0 left-0 bottom-0 bg-white z-50' : 'relative'}`}>
      <div className="max-w-7xl mx-auto md:px-2 px-8 lg:px-8">
        <div className="relative flex items-center justify-between h-24">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0">
              <a href="/" className="text-3xl flex flex-col md:flex-row md:gap-2 font-medium">
                <span className='text-[#c59d38]'>Gayatri</span>
                <span className='text-black'>Architects</span>
              </a>
            </div>
            <div className="hidden sm:flex sm:space-x-8 items-center">
              <a href="/about" className={`text-2xl font-normal px-3 py-2 rounded-md ${isActive('/about')}`}>
                About Us
              </a>
              <a href="/blog" className={`text-2xl font-normal px-3 py-2 rounded-md ${isActive('/blog')}`}>
                Blog
              </a>
              <a href="/work" className={`text-2xl font-normal px-3 py-2 rounded-md ${isActive('/work')}`}>
                Work
              </a>
              <a href="/team" className={`text-2xl font-normal px-3 py-2 rounded-md ${isActive('/team')}`}>
                Team
              </a>
              <a href="/contact" className={`text-2xl font-normal px-3 py-2 rounded-md ${isActive('/contact')}`}>
                Contact
              </a>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="bg-transparent border-0 font-black text-black inline-flex items-center justify-center p-2 rounded-md hover:text-[#7c7b7b] hover:bg-[#f1e7cd] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-10 w-10" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} ${isOpen ? 'h-[85vh] flex flex-col justify-center items-center' : ''}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col justify-center items-center h-full">
          <a
            href="/about"
            className={`text-xl  font-medium block px-3 py-2 rounded-md ${isActive('/about')}`}
          >
            About Us
          </a>
          <a
            href="/blog"
            className={`text-xl font-medium block px-3 py-2 rounded-md ${isActive('/blog')}`}
          >
            Blog
          </a>
          <a
            href="/work"
            className={`text-xl font-medium block px-3 py-2 rounded-md ${isActive('/work')}`}
          >
            Work
          </a>
          <a
            href="/team"
            className={`text-xl font-medium block px-3 py-2 rounded-md ${isActive('/team')}`}
          >
            Team
          </a>
          <a
            href="/contact"
            className={`text-xl font-medium block px-3 py-2 rounded-md ${isActive('/contact')}`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
