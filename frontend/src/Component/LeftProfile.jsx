import React, {useEffect, useState} from 'react'
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiTask } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { MdPlayCircle } from "react-icons/md"; // Start Session Icon
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {StarIcon} from "@heroicons/react/16/solid/index.js";
import './leftprofile.css'
function LeftProfile() {
    const [nameLoading, setNameLoading] = useState(true);
    const [name, set] = useState("");
    const navigate=useNavigate();
    const [role,setRole]=useState("");

    useEffect(() => {
        axios.get('http://localhost:3000/getname', {
            headers: { authorization: localStorage.getItem('token') }
        }).then((res) => {
            set(res.data.msg);
            if(res.data.isMentor){
                setRole("mentor")
            }
            else {
                setRole("mentee")
            }
            setNameLoading(false);
        })
    }, []);

    function namee() {
        if (nameLoading) {
            return <>
                <div role="status" className="flex justify-center max-w-sm animate-pulse">
                    <div className=" h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
                </div>
                <div role="status" className="flex justify-center max-w-sm animate-pulse">
                    <div className=" h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                </div>
            </>
        } else {
            return (
                <>
                    <div className='col-span-1'><h1
                        className='text-center text-[18px] font-bold text-black'>{name}</h1></div>
                    <div className="flex justify-center items-center w-full">
                            <span className="inline-flex items-center text-sm font-semibold">
      <StarIcon
          className={`h-5 w-5 mr-1 ${
              role === 'mentor' ? 'text-yellow-400' : 'text-purple-500'
          }`}
      />
      <span
          className={`${
              role === 'mentor'
                  ? 'text-shadow-gold  text-yellow-400'
                  : (role === 'mentee') ? 'text-shadow-purple text-purple-500' : ''
          }`}
      >
        {role === 'mentor' ? `You're Mentor` : (role === 'mentee') ? `You're Mentee` : ''}
      </span>
    </span>

                    </div>
                </>
            );
    }}

    return (
        <div className='h-screen bg-white border-r-4 border-slate-500'>
            <div className=" flex pl-16 bg-white">
                <img
                    src="/avatar.png"
                    alt=""
                    className="w-14 h-14 mt-24 rounded-full dark:bg-gray-500 border-2 border-slate-700"
                />
            </div>
            <div className='grid grid-cols-1 mt-7'>
                {namee()}
            </div>

            <div className='py-10 space-y-6'>
                <div className='flex gap-2'>
                    <FaHome className='ml-3 text-[25px] text-blue-500'/> <h1
                    className='text-black font-semibold text-[18px]'>Home</h1>
                </div>
                <div className='flex gap-2'>
                    <CgProfile className='ml-3 text-[25px] text-yellow-500'/> <h1
                    className='text-black font-semibold text-[18px]'>Dashboard</h1>
                </div>
                <div className='flex gap-2'>
                    <BiTask className='ml-3 text-[25px] text-red-500' /> <h1 className='text-black font-semibold text-[18px]'>Booking</h1>
                </div>
                <div className=' flex gap-2'>
                    <FaRegEye className='ml-3 text-[25px] text-green-500' /> <h1 className='text-black font-semibold text-[18px]'>Reviews</h1>
                </div>
            </div>

            {/* Start Session Button */}
            <div className='flex justify-center'>
                <button onClick={()=>{navigate("/meeting")}} className="flex items-center px-3 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                    <MdPlayCircle className="text-[20px] mr-2" /> {/* Icon for Start Session */}
                    <span className='font-semibold text-[14px]'>Start New Session</span>
                </button>
            </div>
        </div>
    )
}

export default LeftProfile;
