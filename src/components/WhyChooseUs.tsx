import React from "react";
import bgImage from "../assets/image6.png"; // Replace with your actual file name

// Define type for a single metric
type Metric = {
  value: string;
  label: string;
};

// Array of metrics
const metrics: Metric[] = [
  { value: "5+ Years", label: "Experience" },
  { value: "70+", label: "Projects Completed" },
  { value: "100%", label: "Safety Compliance" },
  { value: "50+", label: "Skilled Experts" },
];

const WhyChooseUs: React.FC = () => {
  return (
    
    <section
      className="py-32 bg-black/60 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
        
      {/* Header */}
      <div className="text-center mb-16 text-white">
        <h2 className="text-4xl md:text-5xl font-bold">
          Why Choose Us
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-md md:text-lg">
          We deliver high-quality construction services with safety, efficiency, and expertise.
        </p>
      </div>

      {/* Metrics */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white/80 rounded-2xl p-8 shadow hover:shadow-lg transition duration-300"
          >
            <p className="text-3xl md:text-4xl font-bold text-orange-600">
              {metric.value}
            </p>
            <p className="text-gray-700 mt-2 font-medium">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
