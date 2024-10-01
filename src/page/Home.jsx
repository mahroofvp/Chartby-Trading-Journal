import React from "react";
import './home.css'
const Home = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">

      <div className="absolute inset-0 opacity-10">

        <svg className="w-full h-full" viewBox="0 0 800 600">
          <path
            d="M 100 450 L 150 350 L 200 400 L 250 300 L 300 350 L 350 300 L 400 350 L 450 200 L 500 250 L 550 150 L 600 200 L 650 100"
            stroke="white"
            strokeWidth="4"
            fill="none"
          />
          <g stroke="#ffffff">
            <line x1="600" y1="100" x2="600" y2="300" />
            <line x1="150" y1="400" x2="150" y2="300" />
            <line x1="250" y1="350" x2="250" y2="500" />
            <line x1="350" y1="200" x2="350" y2="400" />
            <line x1="450" y1="250" x2="450" y2="450" />
          </g>
        </svg>
      </div>
      
      <div className="text-center px-6 animate-fadeInUp z-10">
        <h1 className="text-5xl md:text-7xl font-medium text-white mb-2 font-serif">
          CHARTBY 
        </h1>
        <h3 className="journal-text text-1xl  md:text-4xl lg:text-5xl font-extralight text-white brightness-75 mb-2 ">
          TRADING JOURNAL
        </h3>
        <div className="w-auto md:w-auto h-1 bg-slate-200 mb-4"></div>
        <p className="text-lg md:text-2xl text-gray-300 mb-8">
  Launching soon
  <span className="loading-dot">.</span>
  <span className="loading-dot">.</span>
  <span className="loading-dot">.</span>
</p>
        <a
          href="mailto:hello.chartby@gmail.com"
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 "
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Home;
