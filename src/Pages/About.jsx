import React from 'react';
import Myprofile from '../assets/AboutProfile.png'; // Update with your correct image path

const About = () => {
  return (
    <div id='About'>
    <section className="flex flex-col md:flex-row items-center justify-center px-8 py-20 bg-white font-[Poppins] z-0">
      {/* Image Section */}
      <div className="relative mb-10 md:mb-0 md:mr-10">
        <img
          src={Myprofile}
          alt="Profile"
          className="rounded-xl "
        />
        <div
          className="absolute top-2 left-2 w-full h-full rounded-xl z-0"
          style={{
            background: 'linear-gradient(135deg, #f97316, #22c55e)',
            filter: 'blur(20px)',
            zIndex: -1,
          }}
        ></div>
      </div>

      {/* Text Section */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About <span className="text-orange-500">Me</span>
        </h2>

        <p className="text-gray-700 text-lg mb-4">
          Hello! I'm <strong>Satendra Kumar</strong>, a passionate Full Stack Developer and BCA student. I love building real-world projects using <span className="text-orange-500">Java</span> and <span className="text-orange-500">C#</span>, while exploring the entire web development stack.
        </p>

        <p className="text-gray-700 text-base mb-6">
          I love transforming ideas into clean and user-friendly experiences. From front-end design to back-end logic, I'm always curious to learn more and build impactful digital solutions.
        </p>

        <div className="flex items-center justify-center md:justify-start gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md shadow-md transition duration-300">
            Know More
          </button>
        </div>
      </div>
    </section>
    </div>
  );
  
};

export default About;
