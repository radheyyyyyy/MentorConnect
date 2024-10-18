import React, { useState } from 'react';
import './Navbar.css';
import DropdownList from './DropdownList';

function FormNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleProfileHover = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header h-16">
      <a href="/" className="logo">MentorGuide</a>
      <nav className="navbar flex flex-row gap-4">
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/mentorlist">Mentor</a>
        <a href="/">Contact us</a>
        <a href="/" onMouseEnter={handleProfileHover} onMouseLeave={handleProfileHover}>
          <img className="h-10 w-10" src="/avatar.png" alt="profile" />
          {showDropdown && (
            <DropdownList className="absolute top-0 right-0 bg-white shadow-md w-48 max-h-48 overflow-y-auto z-10" />
          )}
        </a>
      </nav>
    </header>
  );
}

export default FormNavbar;