

import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./footer/index.jsx";
import MainSec from "./MainSection/index.jsx";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate=useNavigate();
    return (
        <div>
            <Navbar/>
        <div className="relative h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src='/homepage.mp4'
                autoPlay
                muted
                loop
            ></video>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
            <div
                className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-center p-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Increase your potential with Expert Mentorship </h1>
                <p className="text-lg md:text-2xl mb-8">
                    Connect with mentors that can help in your field to make you ready for future industries.
                </p>
                <button type={"button"} onClick={()=>{if(localStorage.getItem("token")){
                    navigate('/mentorlist')
                }else navigate('/register')}}
                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300">
                    Find Mentor Now
                </button>
            </div>
        </div>
            <MainSec/>
            <Footer/>
        </div>
    );
};

export default HomePage;
