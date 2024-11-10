import React from "react";
import cryptoApp from "../assets/portfolio/cryptoApp.jpg";
import javaNotesApp from "../assets/portfolio/javaNotesApp.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: javaNotesApp,
      title: "Java Notes App",
      description: "A simple notes app built with Java.",
      githubLink: "https://github.com/Jitesh2703/Notes_App",
    },
    {
      id: 2,
      src: cryptoApp,
      title: "Crypto Tracker",
      description: "A Kotlin-based app showing live crypto prices of 400+ currencies.",
      githubLink: "https://github.com/Jitesh2703/Crypto",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-lg">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, description, githubLink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden relative group"
            >
              <div className="w-full h-56 overflow-hidden relative group">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover object-center duration-200"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex justify-center items-center h-full">
                    <img
                      src={src}
                      alt={title}
                      className="w-full h-48 object-contain transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm mt-2">{description}</p>
                <div className="flex items-center justify-center mt-4">
                  {/* Link to GitHub */}
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-2 m-2 text-sm duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-center"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
