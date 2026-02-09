import React from "react";
import { FaYoutube, FaFacebook, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import Footer from "./Footer";
import "../App.css";



export default function Home() {

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Myresume.pdf";
    link.download = "Myresume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white max-w-screen min-h-screen container mx-auto px-4 md:px-20 py-20 fontA">
      <div className="flex flex-col md:flex-row items-center justify-between">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-12 space-y-6 order-2 md:order-1"
        >
          <span className="text-lg text-gray-600 dark:text-gray-300">👋 Welcome to My Workspace</span>

          <div className="flex flex-wrap items-center gap-2 text-2xl md:text-4xl font-semibold ">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              strings={["Programmer", "Developer", "Problem Solver"]}
              typeSpeed={60}
              backSpeed={50}
              loop={true}
            />
          </div>

          <p className="text-sm md:text-md text-justify leading-relaxed">
            I am <span className="font-bold text-blue-600 dark:text-blue-400">Bidyanshu Kumar</span>, skilled in
            <span className="font-medium"> HTML, CSS, JavaScript, React.js</span>, and backend technologies.
            I love crafting <span className="text-purple-500 font-semibold">dynamic UIs</span>,
            solving competitive programming challenges, and bringing <span className="text-pink-500 font-semibold">ideas to life</span>.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex space-x-4 mt-4">
            {/* <a href="#contact">
              <button className="bg-blue-600 hover:bg-blue-800 text-white px-5 py-2 rounded-lg shadow-lg transition duration-300">
                Hire Me
              </button>
            </a> */}
            {/* <a href="/resume.pdf" target="_blank" rel="noreferrer"> */}
            <button onClick={downloadResume} className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-5 py-2 rounded-lg transition duration-300">
              Download Resume
            </button>
            {/* </a> */}
          </div>

          {/* Social media + Tech stack */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8 space-y-6 md:space-y-0">

            {/* Social Media */}
            <div>
              <h1 className="font-bold mb-2">🌐 Available on</h1>
              <ul className="flex space-x-4">
                <li><a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube className="text-2xl md:text-3xl hover:text-red-600 transition" /></a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook className="text-2xl md:text-3xl hover:text-blue-600 transition" /></a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin className="text-2xl md:text-3xl hover:text-blue-500 transition" /></a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub className="text-2xl md:text-3xl hover:text-gray-800 dark:hover:text-gray-200 transition" /></a></li>
              </ul>
            </div>

            {/* Tech stack */}
            <div>
              <h1 className="font-bold mb-2">💻 Currently working on</h1>
              <div className="flex space-x-4">
                <SiMongodb className="text-2xl md:text-3xl hover:text-green-600 transition" />
                <SiExpress className="text-2xl md:text-3xl hover:text-gray-500 transition" />
                <FaReact className="text-2xl md:text-3xl hover:text-blue-500 transition" />
                <FaNodeJs className="text-2xl md:text-3xl hover:text-green-700 transition" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side (Profile Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:w-1/2 mb-5 md:mt-20 order-1"
        >
          <img
            src="/Mypic.jpg"
            className="rounded-full w-[260px] h-[260px] md:w-[420px] md:h-[420px] object-cover shadow-2xl hover:scale-105 hover:shadow-pink-400/50 transition duration-500"
            alt="Profile"
          />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
