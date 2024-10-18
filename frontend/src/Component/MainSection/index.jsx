import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MentorshipFAQ from "../MentorFAQ.jsx";
import {useNavigate} from "react-router-dom";
import WhyChoseUs from "../WhyChoseUs.jsx"; // Import AOS styles

function MainSec() {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({
            duration: 2400, // Animation duration
        });
    }, []);

    return (
        <>
            <div className={"hidden sm:md:flex"}>
            <WhyChoseUs/>
            </div>
            <div>
                <div className="container mx-auto py-12 px-4">
                    <h2 className="text-4xl font-bold text-center mb-6">
                        How to Get Started with Mentorship?
                    </h2>
                    <p className="text-center text-lg mb-10">
                        Connecting students with mentors to create pathways for success.
                        Sign up today to begin your journey.
                    </p>
                    <div className="flex flex-col items-center justify-between md:flex-row md:space-x-12">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center mb-8 md:mb-0">
                            <div
                                className="flex items-center justify-center bg-white border border-gray-200 rounded-full w-16 h-16 mb-4">
                                <span className="text-2xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Sign Up for Free</h3>
                            <p className="text-center text-gray-600">
                                Create a free account and set up your profile to get started. It's quick and easy!
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="flex flex-col items-center mb-8 md:mb-0">
                            <div
                                className="flex items-center justify-center bg-white border border-gray-200 rounded-full w-16 h-16 mb-4">
                                <span className="text-2xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Find Your Mentor</h3>
                            <p className="text-center text-gray-600">
                                Browse through our list of experienced mentors and find the best match for your needs.
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className="flex flex-col items-center">
                            <div
                                className="flex items-center justify-center bg-white border border-gray-200 rounded-full w-16 h-16 mb-4">
                                <span className="text-2xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Connect & Grow</h3>
                            <p className="text-center text-gray-600">
                                Engage with your mentor, ask questions and learn from their experience to advance your
                                education.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <MentorshipFAQ/>

            <div>
                <div className="bg-black text-white py-20">
                    <div className="text-center mb-6">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Accelerate Your Career Through Mentorship
                        </h1>
                        <p className="text-gray-400 mt-4">
                            Join MentorGuide and connect with professionals who can guide you on your journey to
                            success.
                        </p>
                    </div>

                    <div className="text-center">
                        <button onClick={()=>{navigate('/register')}}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full">
                            Find a Mentor Today
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainSec;

