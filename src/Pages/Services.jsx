import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { BsWindowSidebar } from "react-icons/bs";

const services = [
  {
    icon: <FaLaptopCode className="text-5xl text-orange-500" />,
    title: "Web Design",
    desc: "Building responsive, modern websites with powerful .NET backends. I design and develop full-stack web applications using technologies like HTML, CSS, JavaScript, and .NET. Whether it's a dynamic website or a database-driven web app, I deliver secure and scalable solutions.",
  },
  {
    icon: <BsWindowSidebar className="text-5xl text-orange-500" />,
    title: "Windows Form",
    desc: "Desktop application development using Windows Forms and .NET. I create functional and visually consistent Windows apps with attention to detail and UI responsiveness.",
  },
  {
    icon: <MdDesignServices className="text-5xl text-orange-500" />,
    title: "UI/UX",
    desc: "Designing intuitive and engaging interfaces that enhance user experience. I craft wireframes and prototypes that align with user behavior and business goals, ensuring a seamless user journey.",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-4">Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I specialize in creating clean, efficient, and user-friendly applications with a focus on design, usability, and performance. Below are the key areas I can help you with:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center space-y-4 border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-500"
          >
            {service.icon}
            <h3 className="text-xl font-bold text-black">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
