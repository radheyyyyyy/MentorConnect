
import React, {useEffect, useRef, useState} from 'react';
import './Hero.css'
import {useNavigate} from "react-router-dom";
function Hero() {
  let navigate=useNavigate();
  let [token,set]=useState("");
  useEffect(() => {
    set(localStorage.getItem("token"))
    console.log(token)
  }, []);
  return (
    <>
    <div className="parent">
      <div className="childleft">
        <h1 style={{color:'#000', lineHeight:'70px',fontSize:"45px"}}>
        Accelerate your career with <span style={{color:"#0368ff"}}>Mentorship</span>
          </h1>
          <p style={{fontSize:'16px', color:'#000',marginTop:'10px'}}>GuideME connects students with professionals in their field of interest. Our website provides invaluable guidance and support to help students and employees succeed in their academic and career pursuits.</p>
          <h3 className="text-gray-600">Your Journey starts here</h3>
          <div className='hero-btn-parent'>
          <button onClick={()=>{if(token===null) navigate("/register");else navigate("/mentorlist")}} className='hero-btn p-2 mentor-btn' >Find a mentor</button>
          <button onClick={()=>{if(token===null) navigate("/register");else navigate("/addmentor")}} className='hero-btn p-2 mentor-btn'>Become a mentor</button>
          </div>
        
      </div>
      <div className="rightchild">
        <img src="/Hero_Background.png"  className='logo' />
      </div>

    </div>
    </>
  )
}

export default Hero