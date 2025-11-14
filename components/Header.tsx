
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavLinks = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About Us' },
  { path: '/products', name: 'Products' },
  { path: '/gallery', name: 'Gallery' },
  { path: '/blog', name: 'Blog' },
  { path: '/contact', name: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkClass = 'text-brand-light-blue';
  const inactiveLinkClass = 'text-white hover:text-brand-light-blue transition-colors duration-300';

  const NavItems = () => (
    <>
      {NavLinks.map((link) => (
        <li key={link.name}>
          <NavLink
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `${isActive ? activeLinkClass : inactiveLinkClass} py-2 md:py-0 block`
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <header className="bg-brand-dark shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white flex items-center">
              <WaterDropIcon className="h-8 w-8 mr-2 text-brand-light-blue" />
              Aquamartin
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8 text-lg">
              <NavItems />
            </ul>
          </nav>
          <div className="hidden md:block">
            <Link
              to="/order"
              className="bg-brand-light-blue text-brand-dark font-bold py-2 px-6 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              Order Now
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <CloseIcon className="h-8 w-8" />
              ) : (
                <MenuIcon className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-sm absolute w-full">
          <ul className="px-4 pt-2 pb-4 space-y-2 text-center text-lg">
            <NavItems />
            <li>
              <Link
                to="/order"
                onClick={() => setIsMenuOpen(false)}
                className="bg-brand-light-blue text-brand-dark font-bold py-3 px-6 rounded-full hover:bg-white transition-colors duration-300 w-full block mt-4"
              >
                Order Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

// SVG Icons
const WaterDropIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s9.75 11.023 9.75 11.023c.294.262.68.262.974 0 0 0 9.75-4.832 9.75-11.023S17.385 2.25 12 2.25Zm0 16.523c-1.874-2.12-4.18-4.99-4.18-7.773 0-2.43 1.97-4.4 4.4-4.4s4.4 1.97 4.4 4.4c0 2.783-2.306 5.653-4.18 7.773a.75.75 0 0 1-.44 0Z" clipRule="evenodd" />
  </svg>
);
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);
const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


export default Header;
