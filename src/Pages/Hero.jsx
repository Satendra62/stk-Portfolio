import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaXTwitter, FaSquareInstagram, FaSquareGithub } from "react-icons/fa6";
import Myprofile from '../assets/MyProfile1.png';


const Hero = () => {
  const texts = ["Satendra", "Programmer"];
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    const interval = setInterval(() => {
      setDisplayText(currentText.substring(0, charIndex));

      if (isForward) {
        if (charIndex < currentText.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsForward(false), 1000);
          clearInterval(interval);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsForward(true);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, isForward, textIndex]);

  const smoothScroll = () => {
    const element = document.getElementById('Contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

  }
  return (
    <div id='hero'>
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-30 bg-white dark:bg-gray-900 overflow-hidden overflow-y-auto">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Hi I'm</p>
          <h2 className="text-4xl font-bold text-orange-500">{displayText}&nbsp;</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black dark:text-white leading-tight">
            A Full Stack <br />Web Developer
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base max-w-xl mx-auto md:mx-0">

            I'm a passionate web developer and BCA student focused on mastering full stack development with Java and C#. I love creating impactful, user-friendly digital solutions.


          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition " onClick={() => smoothScroll()}>
            Hire Me
          </button>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 pt-6 text-3xl">
            <a href="https://www.linkedin.com/in/satendra-kumar-36a427220/" className="text-black dark:text-white hover:text-blue-800 hover:bg-white">
              <FaLinkedin />
            </a>
            <a href="https://x.com/SatendraKu72361?" className="text-black dark:text-white hover:text-black hover:bg-white">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/satendra0.1?igsh=MTVoemNoc3ptMHc2" className="text-black dark:text-white hover:text-red-700 hover:bg-black">
              <FaSquareInstagram />
            </a>
            <a href="https://github.com/Satendra62" className="text-black dark:text-white hover:text-black hover:bg-white">
              <FaSquareGithub />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-12 md:mt-0 flex justify-center items-center relative">
          <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden relative">
            <img
              src={Myprofile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
