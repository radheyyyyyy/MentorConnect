import React, {useEffect, useState} from "react";
import ChatWindow from "./ChatWindow/ChatWindow.jsx";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { BiObjectsVerticalCenter } from "react-icons/bi";
import { FiUserCheck } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import {useNavigate} from "react-router-dom";
import {PopupButton, useCalendlyEventListener} from "react-calendly";
import axios from "axios";

export function MentorCard({link,name,exp,skills,receiver}){
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [msg,setName]=useState("");
    const [email,setEmail]=useState("");
    const [isPopupVisible, setPopupVisible] = useState(false);

    const showPopup = () => {
        setPopupVisible(true);
    };

    const Popup = ({ onClose }) => {
        return (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
                <div className="bg-white h-36  rounded-lg shadow-lg w-96 text-center">
                    <h2 className="text-xl font-bold mb-2">Appointment Not Possible</h2>
                    <p className="text-gray-700 mb-4">Appointment is not possible right now. Please try again later.</p>
                    <button
                        onClick={onClose}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    };
    const closePopup = () => {
        setPopupVisible(false);
    };
    useEffect(() => {
        axios.get('http://localhost:3000/getname', {
            headers: { authorization: localStorage.getItem('token') }
        }).then((res) => {
            setName(res.data.msg);
            setEmail(res.data.email);
        })
    }, []);
    const navigate=useNavigate();
    useCalendlyEventListener({
        onEventScheduled:async (e) => {
            await axios.post("http://localhost:3000/appointment",{
                uri:e.data.payload.event
            });
        }
    });

    const handleOpenChat = () => {
        setIsChatOpen(true);
    };

    const handleCloseChat = () => {
        setIsChatOpen(false);
    };

    function isLink(){
        if(link){
            return(
                <>
                    <PopupButton url={link}
                                 prefill={
                                     {
                                         email:email,
                                         name:msg
                                     }
                                 }

                                 pageSettings={{
                                     backgroundColor: '#ffffff',
                                     hideEventTypeDetails: false,
                                     hideLandingPageDetails: true,
                                     primaryColor: '00a2ff',
                                     textColor: '4d5055',
                                     overFlow:"hidden"
                                 }}
                                 rootElement={document.getElementById("root")}
                                 text="Appointment" className='text-white hover:bg-green-700 bg-green-500 px-4 py-2 rounded-md ml-4 flex items-center'>
                    </PopupButton>
                </>
            )
        }
        else {
            return (
                <>
                <button onClick={showPopup} className='text-white hover:bg-green-700 bg-green-500 px-4 py-2 rounded-md ml-4 flex items-center'>
                    Appointment

                </button>
                    {isPopupVisible && <Popup onClose={closePopup} />}
                </>
            )
        }
    }

    return(
        <>
            <div
                className=" flex py-4 px-2 ml-[50px]  h-36 max-w-[900px] overflow-hidden bg-white border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:bg-blue-200 hover:shadow-lg hover:scale-105 relative group">

                <div className=" relative z-10 h-24 w-24">
                    <img src="/avatar.png" alt="profile"/>
                </div>
                <div>
                    <h1 className='text-black font-semibold text-[18px] mt-2 ml-4'>{name} </h1>
                    <div className='flex'>
                        <MdOutlineEmail className='text-[20px] ml-3 text-slate-500'/>
                        <h1 className='text-slate-500 font-medium text-[15px] ml-1 flex'> {receiver}</h1>
                    </div>
                    <div className='flex'>
                        <SlLocationPin className='text-[20px] ml-3 text-slate-500'/>
                        <h1 className='text-slate-500 font-medium text-[15px] ml-1 flex'>India </h1>
                    </div>
                    <div className='flex'>
                        <BiObjectsVerticalCenter className='text-[20px] ml-3 text-slate-500'/>
                        <h1 className='text-slate-500 font-medium text-[15px] ml-1 flex'>{skills}</h1>
                    </div>
                </div>
                <div className='flex justify-between items-end pl-28 pr-12'>
                    {isLink()}

                    <button onClick={()=>{handleOpenChat()}}
                        className='text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded-md ml-4 flex items-center transition-all duration-300'>
                        <FiMessageCircle className='text-[19px] mt-1 mr-1'/> Chat
                    </button>

                    <button onClick={()=>{navigate("/dashboard")}} className='text-white hover:bg-blue-700 bg-blue-500 px-4 py-2 rounded-md ml-4 flex items-center'>
                        <ImProfile className='text-[19px] mt-1 mr-1'/> Profile
                    </button>
                </div>
            </div>
            {isChatOpen && <ChatWindow name={name} receiverId={receiver} onClose={handleCloseChat}/> }
        </>
    )
}

