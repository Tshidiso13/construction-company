import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.png";
import { motion } from "framer-motion";



const Hero = () => {
const navigate = useNavigate();

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="text-white text-4xl sm:text-5xl md:text-7xl font-bold"
>
  Building the Future <br /> 
  <span className="text-yellow-500">with Precision</span>
</motion.h1>

        <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg">
          Reliable construction services for residential and commercial projects
        </p>

        <button 
        onClick={() => navigate("/contact")}
         className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-md transition">
          Get a Free Quote
        </button>
      </div>
    </section>
  );
};

export default Hero;
