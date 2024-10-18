import React, { useState, useEffect } from 'react';
import './HomeNavbar.css';
import DropdownList from './Avatar.jsx';

function HomeNavBar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleProfileHover = () => {
        setShowDropdown(!showDropdown);
    };


    return (
        <header className="h-20 header bg-[#666665] flex items-center justify-between px-4">
            <a href="/" className="text-white font-bold text-lg">MentorGuide</a>
            <nav className="flex gap-4 items-center">
                <a href="/mentorlist" className="text-white">Find Mentor</a>
                <a href="/addmentor" className="text-white">Become Mentor</a>
                <a href="/" className="text-white">Contact Us</a>

                {/* Google Translate Dropdown */}
                <div id="google_element">

                </div>


                {/* Avatar with Dropdown */}
                <span onMouseEnter={handleProfileHover} onMouseLeave={handleProfileHover} className="ml-4">
                    <div className="relative w-10 h-10 overflow-hidden bg-white rounded-full">
                        <svg
                            className="absolute w-12 h-12 text-gray-400 -left-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    {showDropdown && (
                        <DropdownList className="bg-white shadow-md w-48 max-h-48 overflow-y-auto z-10" />
                    )}
                </span>
            </nav>
        </header>
    );
}

export default HomeNavBar;
