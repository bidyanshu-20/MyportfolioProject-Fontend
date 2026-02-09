import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Typography, Chip } from "@mui/material";


const slideLeft = {
  hidden: { opacity: 0, x: -120 },
  show: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 120 },
  show: { opacity: 1, x: 0 },
};

const AnimatedSection = ({ index, title, children }) => {
  const isOdd = index % 2 === 0; 

  return (
    <motion.div
      variants={isOdd ? slideLeft : slideRight}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center mb-10"
    >
      <Card
        className="w-full md:w-[80%] shadow-xl dark:bg-gray-800 
                   hover:shadow-2xl transition duration-300"
      >
        <CardContent>
          <Typography
            variant="h6"
            className="font-semibold mb-3 text-green-600"
          >
            {title}
          </Typography>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function About() {
  const skills = [
    "C++",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "MySQL",
    "Git & GitHub",
    "DSA",
    "Competitive Programming",
  ];

  return (
    <div
      name="About"
      className="max-w-screen-2xl min-h-screen 
                 bg-gray-100 dark:bg-gray-900 
                 text-black dark:text-white 
                 container mx-auto px-4 md:px-20 py-20 fontC"
    >
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-14 text-center"
      >
        About Me
      </motion.h1>

      {/* 1️⃣ Introduction (LEFT) */}
      <AnimatedSection index={0} title="Introduction">
        <Typography>
          Hello, I'm <strong>Bidyanshu</strong>, a passionate Web Developer with a
          strong interest in the <strong>MERN stack</strong>. I love creating
          clean, interactive UIs and solving challenging programming problems.
        </Typography>
      </AnimatedSection>

      {/* 2️⃣ Education (RIGHT) */}
      <AnimatedSection index={1} title="Education & Training">
        <Typography>
          🎓 <strong>BE – Information Technology</strong>
          <br />
          UIET, Panjab University
          <br />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            2023 – 2027
          </span>
        </Typography>
      </AnimatedSection>

      {/* 3️⃣ Skills (LEFT) */}
      <AnimatedSection index={2} title="Skills & Expertise">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Chip
                label={skill}
                color="success"
                variant="outlined"
                className="dark:bg-gray-700 dark:text-white"
              />
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* 4️⃣ Achievements (RIGHT) */}
      <AnimatedSection index={3} title="Achievements & Awards">
        <ul className="list-disc pl-5 space-y-1">
          <li>Qualified NDA SSB Interview</li>
          <li>300+ problems solved on Codeforces</li>
          <li>200+ problems solved on CodeChef</li>
          <li>Codeforces Rating: 1000+</li>
          <li>⭐ 2-Star Coder on CodeChef</li>
        </ul>
      </AnimatedSection>

      {/* 5️⃣ Mission (LEFT) */}
      <AnimatedSection index={4} title="Mission Statement">
        <Typography>
          My mission is to grow as a software engineer by mastering core CS
          concepts, building impactful products, and continuously challenging
          myself in the tech ecosystem.
        </Typography>
      </AnimatedSection>
    </div>
  );
}
