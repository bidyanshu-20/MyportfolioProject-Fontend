import React from "react";

const Portfolio = () => {
  const technologies = [
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
    {
      name: "c++",
      image: "https://isocpp.org/assets/images/cpp_logo.png",
    },
    {
      name: "SQl",
      image: "https://img.icons8.com/color/96/000000/python.png",
    },
  ];

  return (
    <div className="max-w-screen-2xl min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white container mx-auto px-4 md:px-20 py-20">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Work </span>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-10">
          {technologies.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[300px] h-[360px] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center justify-between transform transition duration-300 hover:scale-105 cursor-pointer mx-auto"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-[90px] h-[90px] rounded-full border-2 border-gray-300 dark:border-gray-600"
              />

              {/* Text */}
              <div className="text-center">
                <h2 className="font-bold text-xl mb-2">{item.name}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  tenetur.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex space-x-4 mt-4">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-3 py-2 text-sm font-medium">
                  Video
                </button> */}
                {/* <button className="bg-green-500 hover:bg-green-700 text-white rounded-md px-3 py-2 text-sm font-medium">
                  Source Code
                </button> */}
                <a
                  href="https://github.com/YourUserName/YourRepo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

         <span className="underline font-semibold">My Various Projects: </span>
         
      </div>
    </div>
  );
};

export default Portfolio;
