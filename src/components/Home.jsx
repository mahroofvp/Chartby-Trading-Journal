import React from "react";
const Home = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#0a192f] overflow-hidden">
      {/* Background Chart (SVG or Image) */}
      <div className="absolute inset-0 opacity-10">
        {/* You can replace this with a background image or SVG */}
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <path
            d="M 0 200 L 50 150 L 100 250 L 150 200 L 200 300 L 250 250 L 300 350 L 350 300 L 400 400 L 450 350 L 500 450 L 550 400 L 600 500"
            stroke="#4fd1c5"
            strokeWidth="4"
            fill="none"
          />
          <g stroke="#4fd1c5">
            <line x1="50" y1="200" x2="50" y2="400" />
            <line x1="150" y1="100" x2="150" y2="300" />
            <line x1="250" y1="300" x2="250" y2="500" />
            <line x1="350" y1="200" x2="350" y2="400" />
            <line x1="450" y1="250" x2="450" y2="450" />
          </g>
        </svg>
      </div>

      {/* Logo in the top-left corner */}
      <div className="absolute top-0 left-0 m-6 animate-fadeInLeft">
        <h2 className="text-2xl font-bold text-white font-serif">CHARTBY</h2>
      </div>
      <div className="text-center px-6 animate-fadeInUp z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 font-serif">
          CHARTBY 
        </h1>
        <h3 className="text-4xl  md:text-7xl font-thin font text-white  mb-5">
            Trading Journal
            </h3>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 ">
          Our service will be launching soon. Stay tuned!
        </p>
        <a
          href="mailto:hello.chartby@gmail.com"
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300 animate-pulse"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Home;
