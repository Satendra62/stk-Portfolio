import React from 'react';

const skills = [
  "HTML","CSS", "Tailwind", "JavaScript","React","Java","C#",  
   "Database",
  "Communication", "Git", "Github", "canva",
];

const Skills = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-8 font-[Poppins]">
      <h2 className="text-center text-5xl font-bold mb-16">
        My<span className="text-orange-500">Skills</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4 ">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md  text-sm md:text-base transition-transform duration-500 hover:-rotate-30 cursor-pointer"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
