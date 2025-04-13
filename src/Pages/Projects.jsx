import React, { useState } from "react";
import ReactProject from "../assets/ReactProject1.png"
import ReactProject2 from "../assets/ReactProject2.png"
import ReactProject3 from "../assets/ReactProject3.png"


const projects = [
  {
    title: "React Based Task Manager Application",
    category: "Web Design",
    image: `${ReactProject}`,
  },
  {
    title: "A Counter Application",
    category: "Web Design",
    image: `${ReactProject2}`,
  },
  {
    title: `A clean eCommerce layout showcasing product sections and CTAs.${<br></br>}(Under-Development)`,
    category: "Web Design",
    image: `${ReactProject3}`,
  },
];

const categories = ["All", "UI/UX", "Web Design", "Windows Form"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div id="Project">
      <section className="py-16 pt-25 px-6 md:px-20 bg-white dark:bg-gray-900 text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4">My Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Showcasing my hands-on experience and creativity through real-world design and development projects.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border dark:border-gray-600 transition ${activeCategory === cat
                  ? "bg-orange-500 text-white"
                  : "bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-orange-50 dark:bg-gray-800 p-4 rounded-xl shadow-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-[300px] object-cover"
              />
              <p className="text-sm text-orange-500 font-medium">{project.category}</p>
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
