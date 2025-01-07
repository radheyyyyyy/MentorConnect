import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function MentorForm() {
    const[b,setB]=useState("");
    const [ex, setE] = useState("");
    const [num, setN] = useState("");
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [companyName,setCompany]=useState("");
    const [currentJob,setJob]=useState("");
    const [skills,setSkill]=useState("");
    const [experience,setExperience]=useState(0);
    const [contact,setContact]=useState(0);
    const[bio,setBio]=useState("");
    const [input,setInput]=useState("");

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-300 to-blue-600 flex items-center justify-center p-6">
            <motion.div
                className="w-full max-w-3xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <StyledWrapper className="bg-white p-10 shadow-2xl rounded-lg">
                    <h2 className="form-heading text-4xl font-extrabold text-gray-800 mb-6 text-center">
                        Become a Mentor
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                        Share your experience and guide the next generation. Fill out the form below to join our community of mentors.
                    </p>
                    <FormWrapper>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {/* Name and Contact */}
                            <div className="field-container">
                                <input
                                    required
                                    placeholder="Full Name"
                                    className="input-field w-full"
                                    type="text"
                                    onChange={(e)=>{setName(e.target.value)}}
                                />
                            </div>
                            <div className="field-container">
                                <input
                                    required
                                    placeholder="Contact Number"
                                    className="input-field w-full remove-arrow"
                                    type="number"
                                    min={"0"}
                                    onChange={(e) => {
                                        if (e.target.value.length > 10) {
                                            setN("Number must be 10 digits.");
                                        } else {setN(""); setContact(parseInt(e.target.value))}
                                    }}
                                />
                                <p className="text-red-500 text-sm mt-1">{num}</p>
                            </div>
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="field-container"
                        >
                            <input
                                required
                                placeholder="Email Address"
                                className="input-field w-full"
                                type="email"
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                        </motion.div>

                        {/* Expertise and Experience */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="field-container">
                                <input
                                    required
                                    placeholder="Expertise (e.g., Web Development, Data Science)"
                                    className="input-field w-full"
                                    type="text"
                                    onChange={(e)=>{setSkill(e.target.value)}}
                                />
                            </div>
                            <div className="field-container">
                                <input
                                    onChange={(e) => {
                                        if (e.target.value.length > 2) {
                                            setE("Enter real Experience");
                                        } else {setE(""); setExperience(parseInt(e.target.value))}
                                    }}
                                    required
                                    placeholder="Years of Experience"
                                    className="input-field w-full remove-arrow"
                                    type="number"
                                    min="0"
                                />
                                <p className="text-red-500 text-sm mt-1">{ex}</p>
                            </div>
                        </motion.div>

                        {/* Position and Company */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div className="field-container">
                                <input
                                    required
                                    placeholder="Current Position (e.g., Senior Developer)"
                                    className="input-field w-full"
                                    type="text"
                                    onChange={(e)=>{setJob(e.target.value)}}
                                />
                            </div>
                            <div className="field-container">
                                <input
                                    required
                                    placeholder="Company Name"
                                    className="input-field w-full"
                                    type="text"
                                    onChange={(e)=>{setCompany(e.target.value)}}
                                />
                            </div>
                        </motion.div>

                        {/* Bio */}
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, delay: 0.6}}
                            className="field-container"
                        >
              <textarea
                  required
                  placeholder="Short Bio (Tell us about yourself)"
                  cols={30}
                  rows={4}
                  className="input-field resize-none w-full"
                  onChange={(e) => {
                      if (e.target.value.length > 250) {
                          setB("Bio must be less than 250 words.")
                      } else {
                          setB("");
                          setBio(e.target.value)
                      }
                  }}
              />
                            <p className="text-red-500 text-sm mt-1">{b}</p>
                            <p className="text-red-500 text-sm mt-1">{input}</p>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <button  type={'button'} onClick={async ()=>{
                                const res=await axios.post("http://localhost:3000/addmentor",{
                                    name:name,
                                    email:email,
                                    experience:experience,
                                    skills:skills,
                                    contact:contact,
                                    currentJob:currentJob,
                                    companyName:companyName,
                                    Bio:bio
                                },{
                                    headers:{
                                    authorization:localStorage.getItem("token")
                                    }})
                                if(res.data.msg==='success'){ alert("Form submitted successfully"); navigate("/dashboard") }
                                else if(res.data.msg==='failed'){alert("Try after sometime.")}
                                else if(res.data.msg==='invalid_inputs'){setInput("Please check your inputs.")}
                                else {alert("Server is under maintenance.")}
                            }} className="sendMessage-btn w-full">Join as Mentor</button>
                        </motion.div>
                    </FormWrapper>
                </StyledWrapper>
            </motion.div>
        </div>
    );
}

const StyledWrapper = styled.div`
  .remove-arrow::-webkit-inner-spin-button,
  .remove-arrow::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .remove-arrow {
    -moz-appearance: textfield;
  }

  .form-heading {
    color: #333;
    font-size: 30px;
    margin-bottom: 1rem;
    text-align: center;
  }

  .input-field {
    padding: 0.6rem 0.9rem; /* Reduced padding for compactness */
    border: 1.5px solid #ddd;
    border-radius: 8px;
    outline: none;
    font-size: 15px;
    color: #333;
    background-color: #f9fafb;
    transition: border-color 0.3s, box-shadow 0.3s;
    margin-bottom: 0.1rem; /* Reduced minimum spacing below each input field */
  }

  .input-field:focus {
    border-color: #2563eb;
    box-shadow: 0 0 5px rgba(37, 99, 235, 0.3);
  }

  .field-container {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 60px; /* Reduced minimum height */
  }

  .sendMessage-btn {
    padding: 0.8rem 1.8rem; /* Reduced padding for button */
    background-color: #2563eb;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
    text-align: center;
  }

  .sendMessage-btn:hover {
    background-color: #1e40af;
    box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Reduced gap for elegance */
`;
