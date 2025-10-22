import React from "react";

const Experience = () => {
  const techStack = [
    {
      name: "HTML",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "CSS",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.t8LlCJIKEWi5TeqGdfoxHQHaJ3?pid=Api&P=0&h=180",
    },
    {
      name: "JavaScript",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.TTh9mcePw9mLwnwfvP_cOQHaFj?pid=Api&P=0&h=180",
    },
    {
      name: "MySQL",
      image: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
    },
    {
      name: "C++",
      image: "https://isocpp.org/assets/images/cpp_logo.png",
    },
    {
      name: "Java",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.Sv9FC_Vf6S93HXtCOrE_wAHaFj?pid=Api&P=0&h=180",
    },
    {
      name: "MongoDB",
      image: "https://img.icons8.com/color/96/000000/mongodb.png",
    },
    {
      name: "Express Js",
      image: "https://img.icons8.com/ios/96/000000/express-js.png",
    },
    {
      name: "React Js",
      image: "https://img.icons8.com/color/96/000000/react-native.png",
    },
    {
      name: "Node Js",
      image: "https://img.icons8.com/color/96/000000/nodejs.png",
    },
  ];

  return (
    <div className="max-w-screen-2xl min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20">
      {/* Header Section */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Experience
        </h1>
        <p className="font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          I’ve been working with these technologies for the past 6 months.
        </p>
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 my-10 place-items-center">
        {techStack.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center w-[140px] sm:w-[160px] md:w-[180px] h-[160px] sm:h-[180px] md:h-[200px] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-[70px] sm:w-[80px] md:w-[90px] h-[70px] sm:h-[80px] md:h-[90px] object-contain mb-3"
            />
            <div className="font-bold text-sm sm:text-base md:text-md text-center group-hover:text-green-500 transition">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
