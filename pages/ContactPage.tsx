import React, { useState } from 'react';

const ContactPage = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to a server or email service
        console.log('Form submitted:', formState);
        setSubmitted(true);
    };


  return (
    <div className="bg-brand-gray py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">Get In Touch</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We'd love to hear from you. Whether it's an inquiry, feedback, or a large order, our team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-xl">
             {submitted ? (
                <div className="text-center py-10">
                    <h2 className="text-2xl font-bold text-brand-dark mb-2">Thank you!</h2>
                    <p className="text-gray-600">Your message has been sent. We will get back to you shortly.</p>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                        <input type="text" name="name" id="name" onChange={handleChange} value={formState.name} className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email or Phone</label>
                        <input type="text" name="email" id="email" onChange={handleChange} value={formState.email} className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
                        <textarea name="message" id="message" onChange={handleChange} value={formState.message} rows={5} className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-brand-dark transition-colors duration-300">
                        Send Message
                    </button>
                </form>
             )}
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                 <ul className="space-y-4 text-gray-700 text-lg">
                    <li className="flex items-start">
                        <LocationMarkerIcon className="h-6 w-6 mr-3 mt-1 flex-shrink-0 text-brand-blue" />
                        <span>NO 10,OGODOMIZA QUATERS,SOUTH-IBIE EDO STATE NIGERIA</span>
                    </li>
                    <li className="flex items-center">
                        <PhoneIcon className="h-6 w-6 mr-3 text-brand-blue" />
                        <span>08169661333</span>
                    </li>
                    <li className="flex items-center">
                        <MailIcon className="h-6 w-6 mr-3 text-brand-blue" />
                        <span>aquamartin@gmail.com</span>
                    </li>
                </ul>
            </div>
             <div className="bg-white rounded-lg shadow-xl overflow-hidden h-96">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.835978184693!2d6.50570897486829!3d7.144883992857418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1045a1656f5e27a1%3A0xea214151322a456d!2sOgodomiza%20Quaters!5e0!3m2!1sen!2sng!4v1716388836262!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Aquamartin Location"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// SVG Icons
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

export default ContactPage;