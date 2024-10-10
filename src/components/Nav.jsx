import React, { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='padding-x  absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container '>
        <a href="/">
        <img src={headerLogo} alt="Logo" width={100} height={30} />
        </a>

        {/* Navigation for larger devices */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-md:hidden ">
                {navLinks.map((items)=>
                <li key={items.label}>
                    <a
                    href={items.href}
                    className="font-montserrat k
                    leading-normal text-lg text-white slate-gray transition-all hover:text-sky-900 hover:font-semibold">
                        {items.label}
                    </a>

                </li>            
            )}
            </ul>
        

        {/* Mobile navigation */}
        <div className='relative md:hidden px-11'>
          <img 
            src={hamburger} 
            alt="Hamburger" 
            width={25} 
            height={25}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          />
          {isMobileMenuOpen && (
            <div className="absolute top-full mt-2 w-40 bg-gray-100  shadow-xl rounded-lg overflow-hidden transition-all transform translate-x-[-50%] left-[50%] opacity-100 scale-100"
                 style={{ transition: "opacity 0.3s ease, transform 0.3s ease" }}>
              <ul className="flex flex-col space-y-2 p-4 divide-y divide-gray-300">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className='font-monserrat leading-normal font-semibold text-lg text-slate-gray block py-2 px-2 rounded-lg hover:bg-gray-300'>
                      {item.label}
                    </a>
                  </li>
                ))}
               
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Nav;