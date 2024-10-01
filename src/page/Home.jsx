import React, { useState } from "react";
import './home.css'

const Home = () => {
  // State for the background color
  const [bgColor, setBgColor] = useState('bg-black');
  const [textColor, setTextColor] = useState('text-yellow-600'); 
  const [text2Color, setText2Color] = useState('text-white'); 

  const changeTheme = (bg, text, text2) => {
    setBgColor(bg);
    setTextColor(text);
    setText2Color(text2);
  };

  return (
    <div className={`relative flex items-center justify-center min-h-screen ${bgColor} overflow-hidden`}>
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <path
            d="M 100 450 L 150 350 L 200 400 L 250 300 L 300 350 L 350 300 L 400 350 L 450 200 L 500 250 L 550 150 L 600 200 L 650 100"
            stroke={`${textColor == "text-yellow-600"? "yellow": "white"}`}
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
        {/* h1 with dynamic text color */}
        <h1 className={`text-5xl md:text-7xl font-medium ${textColor} mb-2 font-serif`}>
          CHARTBY
        </h1>

        <h3 className={`journal-text text-1xl md:text-4xl lg:text-5xl font-extralight ${text2Color} brightness-75 mb-2 `}>
          TRADING JOURNAL
        </h3>
        <div className="w-auto md:w-auto h-1 bg-slate-200 mb-4"></div>
        <p className={`text-lg md:text-2xl ${text2Color} mb-8`}>
          Launching soon
          <span className="loading-dot">.</span>
          <span className="loading-dot">.</span>
          <span className="loading-dot">.</span>
        </p>
        <a
          href="mailto:hello.chartby@gmail.com"
          className={`${textColor=="text-yellow-600"? "bg-yellow-600": "bg-blue-500" } text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 mb-6`}
        >
          Contact Us
        </a>

        {/* Theme Switcher Circles */}
        <div className="flex justify-center space-x-4 mt-10">
          {/* Black Theme Circle */}
          <div 
            onClick={() => changeTheme('bg-black', 'text-yellow-600', 'text-white')}
            className="w-8 h-8 rounded-full bg-black cursor-pointer border border-gray-400">
          </div>
          {/* Blue Theme Circle */}
          <div 
            onClick={() => changeTheme('bg-[#01030d]', 'text-white', 'text-white')}
            className="w-8 h-8 rounded-full bg-[#01030d] cursor-pointer border border-gray-400">
          </div>
          {/* White Theme Circle */}
          <div 
            onClick={() => changeTheme('bg-black', 'text-white', 'text-white')}
            className="w-8 h-8 rounded-full bg-white cursor-pointer border border-gray-400">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
