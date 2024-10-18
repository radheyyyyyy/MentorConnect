import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";

export default function Register() {
    const navigate = useNavigate();
    const [firstName, setF] = useState("");
    const [lastName, setL] = useState("");
    const [email, setE] = useState("");
    const [pass, setP] = useState("");
    const [confirm, setC] = useState("");
    const [msg, setM] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorFields, setErrorFields] = useState([]);

    const handleRegister = async () => {
        let error = false;
        let missingFields = [];

        if (firstName === "") missingFields.push("firstName");
        if (lastName === "") missingFields.push("lastName");
        if (email === "") missingFields.push("email");
        if (pass === "") missingFields.push("password");
        if (confirm === "") missingFields.push("confirmPassword");

        if (missingFields.length > 0) {
            setM("Please enter all details");
            error = true;
        } else if (pass !== confirm) {
            setM("Passwords do not match.");
            error = true;
            missingFields.push("password", "confirmPassword");
        }

        setErrorFields(missingFields);

        if (!error) {
            try {
                setLoading(true);
                const res = await axios.post('http://localhost:3000/register/verify', {
                    email, pass, firstName, lastName
                });
                setLoading(false);
                if (res.data.msg === 'please_login') {
                    setM("Please login to your account");
                    setTimeout(()=>navigate('/login'),2000);
                } else if (res.data.msg === 'check_mail') {
                    setM('Please check your mail before trying again.');
                } else if (res.data.msg === 'verify_email') {
                    setM('Verification link has been sent.');
                } else {
                    setM('Try again later.');
                }
            } catch (e) {
                setM("Please try again.");
                setLoading(false);
            }
        }
    };

    const getShakeClass = (field) => {
        return errorFields.includes(field) ? "animate-shake border-red-500" : "";
    };

    return (
        <div className="relative w-full h-screen flex justify-center items-center bg-gray-100">
            {/* Background Animation */}
            <div className="absolute w-full h-full top-0 left-0 z-0">
                <style>{`
                    .animated-bg {
                        background: linear-gradient(135deg, #1E3A8A,#22055c, #000);
                        background-size: 400% 400%;
                        animation: gradient-animation 7s ease infinite;
                    }

                    @keyframes gradient-animation {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `}</style>
                <div className="animated-bg absolute top-0 left-0 w-full h-full" />
            </div>

            {/* Card Content */}
            <div className="relative w-[80%] h-full sm:w-[75%] lg:w-[65%] flex shadow-2xl rounded-xl overflow-hidden bg-white">
                {/* Left Section */}
                <div className="w-1/2 hidden md:flex flex-col justify-center bg-black p-16 text-white">
                    <h2 className="text-4xl font-extrabold mb-6">Welcome to MentorGuide!</h2>
                    <p className="text-lg">"Unlock your potential with expert guidance and mentorship. Together, we turn dreams into reality and growth into success."</p>
                </div>

                {/* Right Section - Registration Form */}
                <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-white">
                    <h2 className="text-3xl font-bold text-center text-black mb-2">Register now</h2>
                    <p className='text-center text-sm text-gray-400 mb-3'>Join us today and start unlocking your true potential!</p>
                    <div>
                            <CustomInputField
                                type="text"
                                labelName="First Name"
                                placeholder="Rahul"
                                change={(e) => setF(e.target.value)}
                                className={`${getShakeClass("firstName")}`}
                                icon={<AiOutlineUser />}
                            />
                            <CustomInputField
                                type="text"
                                labelName="Last Name"
                                placeholder="Shah"
                                change={(e) => setL(e.target.value)}
                                className={`${getShakeClass("lastName")}`}
                                icon={<AiOutlineUser />}
                            />
                        <CustomInputField
                            type="email"
                            labelName="Email"
                            placeholder="Enter your email"
                            change={(e) => setE(e.target.value)}
                            className={`${getShakeClass("email")}`}
                            icon={<AiOutlineMail />}
                        />
                        <CustomInputField
                            type="password"
                            labelName="Password"
                            placeholder="Enter your password"
                            change={(e) => setP(e.target.value)}
                            className={`${getShakeClass("password")}`}
                            icon={<AiOutlineLock />}
                        />
                        <CustomInputField
                            type="password"
                            labelName="Confirm Password"
                            placeholder="Re-enter your password"
                            change={(e) => setC(e.target.value)}
                            className={`${getShakeClass("confirmPassword")}`}
                            icon={<AiOutlineLock />}
                        />
                    </div>
                    <div className="text-red-500 text-sm mt-2">{msg}</div>

                    <button
                        onClick={handleRegister}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-900 transition duration-300 ease-in-out text-md"
                    >
                        {loading ? (
                            <svg
                                className="animate-spin h-6 w-6 mx-auto text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4.354l1.706-1.706A1 1 0 0012 1.646a1 1 0 00-1.706 1.002L12 4.354zM12 4.354V3h0M12 4.354V3h0M12 4.354V3h0"
                                />
                            </svg>
                        ) : (
                            "Sign Up for free"
                        )}
                    </button>

                    <div className="text-center text-sm mt-1 text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 underline hover:text-purple-700">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CustomInputField({ type, labelName, placeholder, change, className, icon }) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasText, setHasText] = useState(false);

    const handleBlur = (e) => {
        setIsFocused(false);
        setHasText(e.target.value !== "");
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    return (
        <div className="relative mb-4 w-full">
            {/* Input Field */}
            <input
                type={type}
                placeholder={isFocused ? "" : placeholder}
                className={`w-full p-3 pl-12 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:border-blue-500 ${className} ${
                    isFocused ? "border-blue-500" : "border-gray-300"
                }`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={change}
            />

            {/* Label */}
            <label
                className={`absolute left-12 top-[-0.2rem] text-xs bg-white px-1 transition-all duration-200 pointer-events-none ${
                    isFocused || hasText ? "text-blue-500" : "text-gray-500"
                }`}
                style={{
                    transform: isFocused || hasText ? "translateY(-0.5rem) translateX(-2.5rem)" : "translateX(-2rem) translateY(-0.2rem)",
                    fontSize: isFocused || hasText ? "0.85rem" : "0.9rem",
                    color: isFocused ? "blue" : "gray",
                }}
            >
                {labelName}
            </label>

            {/* Icon */}
            <div className="absolute left-3 top-[1rem] text-gray-400">
                {icon}
            </div>
        </div>
    );
}


