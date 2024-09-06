
import React, {useEffect, useState} from 'react';
import {MentorCard} from "../Component/MentorCard.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function MentorList() {
    const navigate=useNavigate();
    const [l,setlist]=useState([]);
    const [name,set]=useState("");
    const [loading,setLoading]=useState(true);
    const [nameLoading,setNameLoading]=useState(true);
    useEffect(() => {
        axios.get("https://backend.mahiradhey0204.workers.dev/mentorlist",{headers:{authorization:localStorage.getItem("token")}}).then(
            (res)=>{
                console.log(res.data)
                if(res.data.msg==='invalid_token' || res.data.msg==='no_token'){navigate("/login")}
                else {
                    setLoading(false);
                    setlist(res.data.list);
                    console.log(res.data.list);
                }
            }
        )
    }, []);
    useEffect(()=>{
        axios.get("https://backend.mahiradhey0204.workers.dev/name",{
            headers:{token:localStorage.getItem("token")}
        }).then((res)=>{set(res.data.name);setNameLoading(false)})
    },[])

    function namee(){
        if(nameLoading){
            return <>
                <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div></div>
            </>
        }
        else
        return name;
    }

    function show() {
        if (loading){
            return <>
                <div role="status" className="max-w-sm animate-pulse">
                    <div
                        className="border w-[900px] h-[150px] ml p-4 rounded-md shadow-md grid-rows-1 flex items-center justify-between">
                        <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <br/>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        </div>
                        <div className="mt-24 flex flex-row justify-end gap-2">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        </div>
                    </div>
                    <div
                        className="border w-[900px] h-[150px] ml p-4 rounded-md shadow-md grid-rows-1 flex items-center justify-between">
                        <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <br/>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        </div>
                        <div className="mt-24 flex flex-row justify-end gap-2">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        </div>
                    </div>
                    <div
                        className="border w-[900px] h-[150px] ml p-4 rounded-md shadow-md grid-rows-1 flex items-center justify-between">
                        <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <br/>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        </div>
                        <div className="mt-24 flex flex-row justify-end gap-2">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        </div>
                    </div>
                    <div
                        className="border w-[900px] h-[150px] ml p-4 rounded-md shadow-md grid-rows-1 flex items-center justify-between">
                        <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <br/>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        </div>
                        <div className="mt-24 flex flex-row justify-end gap-2">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        </div>
                    </div>
                </div>
            </>
        } else
            return (
                l?.map((ind) => {
                    return <>
                        <MentorCard name={ind.name} exp={ind.experience} skills={ind.skills}/>
                    </>
                })
            )
    }

    return (
        <>
            <body>
            <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <header
                className="header fixed top-0 left-0 w-full p-[15px] bg-blue-400 flex justify-between items-center z-[100]">
                <a href="/" className="logo text-2xl text-white font-bold">CodeTitans</a>
                <form className="search-bar w-[400px] mx-auto flex" action="">

                    <input
                        className="bg-white h-10 items-center rounded-md w-full px-4 mr-3"
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search for Mentor"
                    />
                    <button type='submit'
                            className='text-white hover:bg-blue-700 font-bold bg-blue-500 rounded-md w-20 p-2'>Search</button>
                </form>
                <div className="relative">
                    <nav className="navbar">
                        <a href="/">Home</a>
                        <a href="/">About Us</a>
                        <a href="/">Mentor</a>
                        <a href="/">Mentee</a>
                        <a href="/">Contact us</a>
                    </nav>
                </div>
            </header>
            <section className="flex">
                <div className="left ml- w-60 p-10 flex flex-col border-r-4 bg-blue-300 border-blue-300 ">
                    <div className="flex flex-col items-center ">
                        <img src="./Gemini_Generated_Image_4f70je4f70je4f70.jpeg" alt="Profile Picture" className="w-30 h-20 rounded-full mr-4" />
                        <br />
                        <h2 className="text-[25px] font-bold">{namee()}</h2>
                        <br />
                        <a href="/" className='py-2 rounded-md text-white px-10 text-[20px] font-semibold'>Home</a>
                        <br />
                        <a href="/" className='py-2 rounded-md text-white  px-19 text-[20px] font-semibold'>Messages</a>
                        <br />
                        <a href="/" className='py-2 rounded-md text-white  px-19 text-[20px] font-semibold'>Appointment</a>
                        <br />
                        <a href="/" className='py-2 rounded-md text-white  px-19 text-[20px] font-semibold'>Calender</a>
                        <br />
                        <a href="/" className='py-2 rounded-md text-white  px-19 text-[20px] font-semibold'>Achivements</a>
                        <br /> <br /><br />
                        <button className="bg-blue-400 hover:bg-blue-700 font-bold text-white px-4 py-2 rounded-md">Logout</button>
                    </div>
                </div>
                <div className="right w-90 p-4">
                    <div className="mentor-list">
                        <div className="right w-24 m-10 grid grid-rows-1 gap-4">
                            {show()}

                        </div>
                    </div>
                </div>
            </section>
            </body>
        </>
    );
}

export default MentorList;