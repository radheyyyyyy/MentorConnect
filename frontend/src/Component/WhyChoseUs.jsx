import React, { useEffect } from "react";
import AOS from "aos"; // Ensure you've installed AOS: npm install aos
import "aos/dist/aos.css"; // Import AOS CSS

export default function WhyChooseUs() {
    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            {/* Title */}
            <div className="pt-10 text-blue-600 font-bold text-center text-4xl">
                Why Choose Us
            </div>

            {/* Our Mentor, Your Future Section */}
            <div className="flex flex-col md:flex-row items-center my-6" data-aos="fade-up">
                <div className="flex-1 flex justify-center">
                    <img src="/assets/mentoring.jpg" alt="Mentorship" className="h-auto w-[400px]" />
                </div>
                <div className="flex-1 px-4 md:px-16 flex flex-col gap-5 text-center">
                    <p className="text-[#007bff] text-3xl font-bold">Our Mentor, Your Future</p>
                    <p className="text-black font-medium text-base">
                        Our platform connects you with experts who can offer personalized advice, support, and mentorship to help
                        you achieve your career goals. Our platform offers a personalized approach to mentorship, connecting you
                        with experienced professionals who can guide you towards success.
                    </p>
                </div>
            </div>

            {/* Secure Messaging Section */}
            <div className="flex flex-col md:flex-row-reverse items-center my-6" data-aos="fade-right">
                <div className="flex-1 flex justify-center">
                    <img src="/assets/secure.jpg" alt="Secure Messaging" className="h-auto w-[400px]" />
                </div>
                <div className="flex-1 px-4 md:px-16 flex flex-col gap-5 text-center">
                    <p className="text-[#007bff] text-3xl font-bold">Secure Messaging</p>
                    <p className="text-black font-medium text-base">
                        Our secure messaging feature ensures that your communications with your mentor remain private and confidential.
                        We employ advanced encryption techniques to protect your data and prevent unauthorized access.
                    </p>
                </div>
            </div>

            {/* Hassle-Free Appointments Section */}
            <div className="flex flex-col md:flex-row items-center my-6" data-aos="fade-up">
                <div className="flex-1 flex justify-center">
                    <img src="/assets/calendly.webp" alt="Calendly Appointments" className="h-auto w-[400px]" />
                </div>
                <div className="flex-1 px-4 md:px-16 flex flex-col gap-5 text-center">
                    <p className="text-[#007bff] text-3xl font-bold">Hassle-Free, Instant Appointments</p>
                    <p className="text-black font-medium text-base">
                        With Calendly, securing a 1-on-1 session with your mentor is easier than ever. Choose a time that suits you,
                        and the rest is handled by us. You will receive a confirmation message and a link to join the online session via email.
                    </p>
                </div>
            </div>

            {/* 1-on-1 Mentoring Sessions Section */}
            <div className="flex flex-col md:flex-row-reverse items-center my-6 pb-10" data-aos="fade-right">
                <div className="flex-1 flex justify-center">
                    <img src="/assets/1on1.jpg" alt="1-on-1 Mentoring" className="h-auto w-[400px]" />
                </div>
                <div className="flex-1 px-4 md:px-16 flex flex-col gap-5 text-center">
                    <p className="text-[#007bff] text-3xl font-bold">1-on-1 & 1-to-many Mentoring Sessions</p>
                    <p className="text-black font-medium text-base">
                        Our 1-on-1 and 1-to-many session feature provides a dedicated space for you and your mentor to connect and discuss your
                        goals, challenges, and progress. Through regular meetings, you can receive personalized guidance, ask
                        questions, and gain valuable insights from your mentor's expertise.
                    </p>
                </div>
            </div>
        </div>
    );
}
