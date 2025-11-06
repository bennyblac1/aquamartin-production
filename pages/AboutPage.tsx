
import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">About Aquamartin</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Our journey to delivering pure, safe, and refreshing drinking water to every household and business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/factory/600/400" 
              alt="Aquamartin Factory"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-brand-dark">Our Story & Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded on the principle that everyone deserves access to clean and safe drinking water, Aquamartin Table Water was established to be a benchmark for quality in the industry. We are a team of dedicated professionals committed to upholding the highest standards of hygiene and production excellence.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our mission is simple: to provide our customers with premium quality purified water that is not only refreshing but also promotes a healthy lifestyle. We believe in transparency, reliability, and continuous improvement in all our processes.
            </p>
          </div>
        </div>

        <div className="mt-24">
            <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">Our Purification Process</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <ProcessStep title="1. Filtration" description="Raw water passes through multiple stages of filtration to remove suspended particles and impurities." />
                <ProcessStep title="2. Reverse Osmosis" description="Advanced reverse osmosis membranes remove dissolved solids, heavy metals, and microorganisms." />
                <ProcessStep title="3. UV Sterilization" description="Water is exposed to ultraviolet light to eliminate any remaining bacteria and viruses, ensuring 100% purity." />
                <ProcessStep title="4. Ozonation & Packaging" description="A final ozonation step ensures lasting freshness before hygienic, automated packaging." />
            </div>
        </div>
      </div>
    </div>
  );
};

interface ProcessStepProps {
    title: string;
    description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ title, description }) => (
    <div className="bg-brand-gray p-6 rounded-lg shadow-md border-l-4 border-brand-blue">
        <h3 className="text-xl font-semibold text-brand-dark mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);


export default AboutPage;
