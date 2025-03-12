import React, { useState } from "react";

const Header = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-[#FFF189] text-white">
        <div className="flex items-center space-x-4 bg-[#FFF189] p-4 rounded-md">
          <div className="flex items-center">
            <img src="your-icon-path.png" alt="icon" className="w-10 h-10" />
          </div>
        </div>

        {/* Right Section: Join, Login, and Language Dropdown */}
        <div className="flex items-center space-x-4 ml-auto">
          <button className="px-8 py-2 bg-[#FFFAC2] rounded-md hover:bg-black text-black">Join</button>
          <button className="px-6 py-2 bg-[#FFFAC2] rounded-md hover:bg-black">Login</button>

          {/* Language Dropdown */}
          <select
            className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="kr">Korean</option>
          </select>
        </div>
      </header>

      {/* Content Section */}
      <div className="py-10 text-center bg-[#FFDE34]">
        {/* Footer Links */}
        <div className="flex justify-center space-x-8">
          <a href="#" className="text-blue-600 hover:text-blue-800">Introduction</a>
          <a href="#" className="text-blue-600 hover:text-blue-800">About Us</a>
          <a href="#" className="text-blue-600 hover:text-blue-800">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
