import React from "react";

// Define a type for each testimonial
type Testimonial = {
  id: number;
  text: string;
  name: string;
  title: string;
  image: string;
};

const testimonials: Testimonial[] = [
  
  {
    id: 1,
    text: "BuildCo transformed our vision into a reality with precision and professionalism. Our new office building exceeded all expectations.",
    name: "Richard Nelson",
    title: "CTO, Skyline Corp",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    id: 2,
    text: "Thanks to BuildCo, our residential project was completed on time and within budget. The attention to detail was remarkable.",
    name: "Ava Johnson",
    title: "Homeowner",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
  {
    id: 3,
    text: "The BuildCo team handled our commercial renovation flawlessly. Their expertise and communication made the process stress-free.",
    name: "Liam Carter",
    title: "CEO, BrightTech Offices",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    text: "We relied on BuildCo for our industrial warehouse construction, and the results were outstanding. Professional and efficient.",
    name: "Sophia Lee",
    title: "Operations Manager, FactoryWorks",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    text: "From planning to execution, BuildCo made our commercial complex project seamless. Highly recommended for large-scale construction.",
    name: "Noah Patel",
    title: "Developer, UrbanBuild",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
  },
  {
    id: 6,
    text: "BuildCo’s team is exceptional! They completed our luxury villa project on time, with attention to every detail.",
    name: "Oliver Brooks",
    title: "Homeowner",
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
  },


];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto font-poppins">
      <h1 className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-slate-500 text-transparent bg-clip-text mt-4">
        Don't just take our words
      </h1>
      <p className="text-slate-500 mt-4 max-w-2xl">
        Hear what our users say about us. We're always looking for ways to improve. If you have a positive
        experience with us, leave a review.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition duration-500"
          >
            <p className="text-base text-slate-500">{t.text}</p>
            <div className="flex items-center gap-3 mt-8">
              <img className="w-12 h-12 rounded-full object-cover" src={t.image} alt={t.name} />
              <div>
                <h2 className="flex items-center gap-2 text-base text-gray-900 font-medium">
                  {t.name}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.6943 0.9002C5.5117 1.0559 5.4203 1.1337 5.3228 1.1991C5.0992 1.349 4.8481 1.453 4.5841 1.505C4.4689 1.5278 4.3493 1.5373 4.1101 1.5564C3.509 1.6044 3.2085 1.6284 2.9578 1.7169C2.3779 1.9218 1.9218 2.3779 1.7169 2.9578C1.6284 3.2085 1.6044 3.509 1.5564 4.1101C1.5373 4.3493 1.5278 4.4689 1.505 4.5841C1.4529 4.8481 1.3489 5.0992 1.1991 5.3228C1.1337 5.4203 1.0559 5.5117 0.9002 5.6943C0.5091 6.1532 0.3136 6.3827 0.1989 6.6226C-0.0663 7.1775 -0.0663 7.8225 0.1989 8.3774C0.3136 8.6174 0.5091 8.8468 0.9002 9.3057C1.0558 9.4883 1.1337 9.5797 1.1991 9.6772C1.3489 9.9008 1.4529 10.152 1.505 10.416C1.5278 10.5311 1.5373 10.6508 1.5564 10.8899C1.6044 11.491 1.6284 11.7915 1.7169 12.0422C1.9218 12.6221 2.3779 13.0783 2.9578 13.2831C3.2085 13.3716 3.509 13.3956 4.1101 13.4436C4.3493 13.4627 4.4689 13.4722 4.5841 13.495C4.8481 13.5471 5.0992 13.6511 5.3228 13.801C5.4203 13.8663 5.5117 13.9441 5.6943 14.0998C6.1532 14.4909 6.3827 14.6864 6.6226 14.8011C7.1775 15.0663 7.8225 15.0663 8.3774 14.8011C8.6174 14.6864 8.8468 14.4909 9.3057 14.0998L10.7801 5.8974Z"
                      fill="#2196F3"
                    />
                  </svg>
                </h2>
                <p className="text-gray-500">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
