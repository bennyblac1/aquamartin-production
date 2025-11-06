import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/1J2ZNNyN/EDI-ultra-pure-water-system.jpg')" }}>
        <div className="absolute inset-0 bg-brand-dark opacity-70"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Pure. Refreshing. Reliable.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the crisp, clean taste of Aquamartin Table Water, purified to perfection for your health and hydration.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/order" className="bg-brand-light-blue text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-white transition-all duration-300 transform hover:scale-105">
              Order Now
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-brand-dark transition-all duration-300 transform hover:scale-105">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-brand-gray py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Why Choose Aquamartin?</h2>
            <p className="text-lg text-gray-600 mt-2">Your guarantee for quality and trust.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FeatureCard
              icon={<ShieldCheckIcon className="h-12 w-12 text-brand-blue" />}
              title="NAFDAC Approved"
              description="Our facilities and processes meet the highest standards of safety and quality, fully approved by NAFDAC."
            />
            <FeatureCard
              icon={<ClockIcon className="h-12 w-12 text-brand-blue" />}
              title="24/7 Delivery"
              description="We offer round-the-clock delivery services to ensure you never run out of pure, refreshing water."
            />
            <FeatureCard
              icon={<StarIcon className="h-12 w-12 text-brand-blue" />}
              title="Premium Quality"
              description="Using state-of-the-art purification technology, we deliver water that is consistently pure and tastes great."
            />
          </div>
        </div>
      </section>
    </div>
  );
};


interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="flex justify-center items-center mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-brand-dark mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);


const ShieldCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.016h-.008v-.016z" />
  </svg>
);
const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.324h5.385a.562.562 0 01.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 21.05a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988h5.385a.563.563 0 00.475-.324L11.48 3.5z" />
  </svg>
);

export default HomePage;