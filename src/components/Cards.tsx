import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const projects = [
  {
    image: image1,
    title: "Modern Office Building Construction",
    category: "Commercial",
  },
  {
    image: image2,
    title: "Luxury Residential Villa Project",
    category: "Residential",
  },
  {
    image: image3,
    title: "Industrial Warehouse Renovation",
    category: "Industrial",
  },
];

const Cards = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <section className="pt-32 pb-16 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          Our Latest Projects
        </h1>
        <p className="text-md md:text-lg text-gray-600 text-center mt-4 max-w-2xl mx-auto">
          Take a look at some of the construction projects we have successfully completed for our clients.
        </p>

        <div className="flex flex-wrap justify-center gap-10 mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="max-w-sm w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <img
                className="rounded-t-2xl w-full h-64 object-cover"
                src={project.image}
                alt={project.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-orange-600 font-medium mt-2">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Cards;
