import React from "react";
import bannerImage from "../assets/image4.png";
import historyImage from "../assets/image6.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

type TeamMember = { name: string; role: string; photo: string; };
const team: TeamMember[] = [
  { name: "Derrick Smith", role: "CEO", photo: team1 },
  { name: "Elton Smith", role: "Project Manager", photo: team2 },
  { name: "Leandra Thompson", role: "Lead Engineer", photo: team3 },
];

const certifications = [cert1, cert2, cert3];

const About: React.FC = () => {
  return (
    <div className="font-poppins pt-16"> {/* Add top padding for navbar */}
      {/* Banner */}
      <section
  className="relative h-80 md:h-[600px] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6"
  style={{ backgroundImage: `url(${bannerImage})` }}
>
  {/* Dark overlay to make text readable */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Banner text */}
  <div className="relative z-10 space-y-4">
    <h1 className="text-5xl md:text-7xl font-bold">About Us</h1>
    <p className="text-xl md:text-3xl mt-2">Experience you can trust</p>
  </div>
</section>



      {/* Company History / Mission */}
      <section className="py-20 bg-gray-300">
  <div className="max-w-6xl mx-auto px-6 md:px-0 grid md:grid-cols-2 gap-10 items-stretch">
    {/* Text Content */}
    <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & History</h2>
      
      <p className="text-gray-700 mb-4">
        Buildco has been delivering top-quality construction services for over 5 years. 
        Our mission is to combine innovation, safety, and expertise to create buildings 
        that last a lifetime.
      </p>
      
      <p className="text-gray-700 mb-4">
        From residential villas to commercial skyscrapers, we pride ourselves on completing 
        projects efficiently, safely, and on budget.
      </p>

      <p className="text-gray-700 mb-4">
        We believe in sustainable construction practices and continuously adopt the latest 
        technology to improve project quality and efficiency.
      </p>

      <p className="text-gray-700">
        Our clients’ satisfaction is our top priority. We ensure every project is tailored 
        to meet their exact needs while exceeding industry standards.
      </p>
    </div>

    {/* Image Content */}
    <div className="relative flex items-stretch">
      <img
        src={historyImage} // Add your history image path
        alt="Company History"
        className="rounded-3xl shadow-xl object-cover w-full h-full hover:scale-105 transition-transform duration-500"
      />
    </div>
  </div>
</section>



      {/* Team Section */}
      <section className="py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl pt-5 md:text-4xl font-bold">Meet Our Team</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our team of professionals ensures every project exceeds expectations.
          </p>
        </div>
        <div className="max-w-6xl mx-auto pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition duration-300 text-center">
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications / Licenses */}
      <section className="py-20 pt-2 max-w-6xl mx-auto px-6 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Certifications & Licenses</h2>
        <div className="flex gap-8 overflow-x-auto py-4">
          {certifications.map((cert, idx) => (
            <img
              key={idx}
              src={cert}
              alt={`Certification ${idx + 1}`}
              className="h-20 md:h-24 flex-shrink-0 object-contain"
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg md:text-xl mb-8">Contact us today to get a free consultation and estimate.</p>
        <Link
          to="/contact"
          className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full shadow hover:shadow-lg transition duration-300"
        >
          Contact Us
        </Link>
        
      </section>
      <Footer />
    </div>
  );
};

export default About;
