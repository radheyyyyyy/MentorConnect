import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function MainSec() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration
        });
    }, []);

    return (
        <>
            <div className='pt-20 text-blue-600 font-bold text-center text-[30px]'>Why choose us</div>

            <div className="parent" data-aos="fade-up">
                <div className="leftchild">
                    <img src='/assets/mentoring.jpg' className='h-5/6 w-[700px]'></img>
                </div>
                <div className="rightchild px-24 flex flex-col gap-7">
                    <p className='text-[#007bff] text-[40px] font-bold text-center '>Our Mentor, Your Future</p>
                    <p className='text-black font-medium text-center text-[20px]'>
                        Our platform connects you with experts who can offer personalized advice, support, and
                        mentorship to help you achieve your career goals.Our platform offers a personalized approach to
                        mentorship, connecting you with experienced professionals who can guide you towards success.
                    </p>
                </div>
            </div>

            <div className="parent" data-aos="fade-right">
                <div className="rightchild px-20 flex flex-col gap-7">
                    <p className='text-[#007bff] text-[40px] font-bold text-center '>Secure Messaging</p>
                    <p className='text-black font-medium text-center text-[20px] '>
                        Our secure messaging feature ensures that your communications with your mentor remain private
                        and confidential. We employ advanced encryption techniques to protect your data and prevent
                        unauthorized access.
                    </p>
                </div>
                <div className="leftchild">
                    <img src='/assets/secure.jpg' className='h-5/6 w-[700px]'></img>
                </div>
            </div>

            <div className="parent" data-aos="fade-up">
                <div className="leftchild">
                    <img src='/assets/calendly.webp' className='h-5/6 w-[700px]'></img>
                </div>
                <div className="rightchild px-24 flex flex-col gap-7">
                    <p className='text-[#007bff] text-[40px] font-bold text-center '>Hassle free, instant Appointments</p>
                    <p className='text-black font-medium text-center text-[20px]'>
                        With Calendly, securing a 1-on-1 session with your mentor is more easier than chewing. Choose a time that suits you, and the rest is us.
                        You will get confirmation message and link to join online session via email from our side.
                    </p>
                </div>
            </div>

            <div className="parent pb-20" data-aos="fade-right">

                <div className="rightchild px-24 flex flex-col gap-7">
                    <p className='text-[#007bff] text-[40px] font-bold text-center '>1-on-1 Mentoring Sessions</p>
                    <p className='text-black font-medium text-center text-[20px] '>
                        Our 1-on-1 session feature provides a dedicated space for you and your mentor to connect and
                        discuss your goals, challenges, and progress. Through regular meetings, you can receive
                        personalized guidance, ask questions, and gain valuable insights from your mentor's expertise.
                    </p>
                </div>
                <div className="leftchild">
                    <img src='/assets/1on1.jpg' className='h-5/6 w-[700px]'></img>
                </div>
            </div>
        </>
    );
}

export default MainSec;

