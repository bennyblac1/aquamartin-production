
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
               <WaterDropIcon className="h-8 w-8 mr-2 text-brand-light-blue" />
               Aquamartin
            </h3>
            <p className="text-gray-300 max-w-md">
              Your trusted source for pure, refreshing, and reliable table water. Committed to quality and your hydration.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-brand-light-blue transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-brand-light-blue transition-colors">Products</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-light-blue transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-brand-light-blue transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-light-blue transition-colors">Contact</Link></li>
              <li><Link to="/order" className="hover:text-brand-light-blue transition-colors">Order Now</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                    <LocationMarkerIcon className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-brand-light-blue" />
                    <span>NO 10, OGODOMIZA QUARTERS, SOUTH-IBIE EDO STATE NIGERIA</span>
                </li>
                <li className="flex items-center">
                    <PhoneIcon className="h-5 w-5 mr-3 flex-shrink-0 text-brand-light-blue" />
                    <span>08169661333</span>
                </li>
                <li className="flex items-center">
                    <MailIcon className="h-5 w-5 mr-3 flex-shrink-0 text-brand-light-blue" />
                    <span>aquamartin@gmail.com</span>
                </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aquamartin Table Water. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// SVG Icons
const WaterDropIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s9.75 11.023 9.75 11.023c.294.262.68.262.974 0 0 0 9.75-4.832 9.75-11.023S17.385 2.25 12 2.25Zm0 16.523c-1.874-2.12-4.18-4.99-4.18-7.773 0-2.43 1.97-4.4 4.4-4.4s4.4 1.97 4.4 4.4c0 2.783-2.306 5.653-4.18 7.773a.75.75 0 0 1-.44 0Z" clipRule="evenodd" />
  </svg>
);
const LocationMarkerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25-2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export default Footer;
