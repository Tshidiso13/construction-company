import React, { useState } from "react";
import residentialIcon from "../assets/residential.jpg";
import commercialIcon from "../assets/commercial.jpg";
import renovationIcon from "../assets/renovation.jpg";
import plumbingIcon from "../assets/plumbing.jpg";
import Footer from "../components/Footer";

type Service = {
  title: string;
  description: string;
  icon: string;
  details: string;
};

const services: Service[] = [
  {
    title: "Residential",
    description: "High-quality home construction and renovation services.",
    icon: residentialIcon,
    details:
      "We provide complete residential construction, from single-family homes to multi-unit apartments, ensuring quality, safety, and timely delivery.",
  },
  {
    title: "Commercial",
    description: "Office buildings, retail spaces, and commercial projects.",
    icon: commercialIcon,
    details:
      "Our commercial projects range from offices and shopping centers to industrial facilities, built to meet your business needs efficiently.",
  },
  {
    title: "Renovation",
    description: "Transform your existing spaces with expert renovation services.",
    icon: renovationIcon,
    details:
      "From kitchen and bathroom upgrades to full-scale building renovations, we modernize and improve spaces while maintaining structural integrity.",
  },
  {
    title: "Plumbing & Electrical",
    description: "Reliable plumbing and electrical installations and maintenance.",
    icon: plumbingIcon,
    details:
      "Our skilled teams handle plumbing and electrical systems for both residential and commercial projects, ensuring compliance and safety standards.",
  },
];

const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 bg-cover bg-center flex flex-col justify-center items-center text-white text-center bg-orange-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Our Services</h1>
          <p className="text-lg md:text-2xl mt-2">Delivering quality construction services</p>
        </div>
      </section>

      {/* Services Cards Grid */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
            >
              <img src={service.icon} alt={service.title} className="h-20 w-20 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accordion Detailed Description */}
      <section className="py-20 max-w-4xl mx-auto px-6 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Learn More About Our Services
        </h2>

        <div className="space-y-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-md transition duration-300"
            >
              <button
                className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                onClick={() => toggleAccordion(idx)}
              >
                <span className="font-medium text-gray-800">{service.title}</span>
                <span className="text-gray-500">{openIndex === idx ? "-" : "+"}</span>
              </button>
              {openIndex === idx && (
                <div className="p-4 text-gray-700 bg-white">
                  {service.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Free Quote</h2>
        <p className="text-lg md:text-xl mb-8">
          Contact us today and get a free estimate for your construction project.
        </p>
        <a
          href="/contact"
          className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full shadow hover:shadow-lg transition duration-300"
        >
          Get a Quote
        </a>
      </section>
      <Footer/>
    </div>
  );
};

export default Services;
