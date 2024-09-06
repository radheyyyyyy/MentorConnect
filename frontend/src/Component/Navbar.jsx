import React, {useState} from 'react'
import './Navbar.css'
import DropdownList from "./Avatar.jsx";

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleProfileHover = () => {
        setShowDropdown(!showDropdown);
    };
  return (
      <header className="header bg-opacity-55 bg-black">
          <a href="/" className="logo">MentorGuide</a>
          <nav className="navbar flex flex-row gap-4">
              <a href="/">Find Mentor</a>
              <a href="/mentorlist">Become Mentor</a>
              <a href="/">Contact Us</a>
              <span onMouseEnter={handleProfileHover} onMouseLeave={handleProfileHover}>
                  <div className="relative w-10 h-10 overflow-hidden bg-white rounded-full">
                      <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"></path>
                      </svg>
                  </div>
                  {showDropdown && (
                      <DropdownList
                          className="bg-white shadow-md w-48 max-h-48 overflow-y-auto z-10"/>
                  )}
              </span>
          </nav>
      </header>
  )
}

export default Navbar