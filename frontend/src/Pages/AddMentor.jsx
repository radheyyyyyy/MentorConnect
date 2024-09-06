import React, {useState} from 'react'
import Navbar from './../Component/Navbar.jsx'
import InputField from "../Component/InputField.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function AddMentor() {
    const navigate=useNavigate();
    const [contact,setContact]=useState("");
    const [city,setCity]=useState("");
    const [companyName,setCompany]=useState("");
    const [currentJob,setJob]=useState("");
    const [skills,setSkill]=useState("");
    const [experience,setExperience]=useState("");


    return (
        <div className='w-full h-full bg-gradient-to-r from-blue-600 to-blue-700'>
            <div className='h-6'><Navbar/></div>
            <div className='mt-20 flex justify-center items-center'>
                <div className='px-10 py-2  bg-white w-96  rounded '>
                    <div className="text-black font-bold text-center text-[30px]">Mentor<span
                        className='text-blue-700'> Onboarding</span></div>
                    <div className="text-black font-bold text-center text-[20px]">Thousand of Students<span
                        className='text-blue-700'> are waiting for you</span></div>
                    <div className='mt-1 mb-1'>
                        <InputField labelName={"Contact"} type={"text"} placeholder={"Enter phone number"}
                                    change={(e) => { setContact(e.target.value)
                                    }}></InputField></div>
                    <div className='mt-1 mb-1'>
                        <InputField labelName={"City"} type={"text"} placeholder={"Enter your city"} change={(e) => {
                            setCity(e.target.value)

                        }}></InputField></div>
                    <div className='mt-1 mb-1'>
                        <InputField labelName={"Company name"} type={"text"} placeholder={"Enter your company name"}
                                    change={(e) => {
                                        setCompany(e.target.value)
                                    }}></InputField></div>
                    <div className='mt-1 mb-1'>
                        <InputField labelName={"Current Job"} type={"text"} placeholder={"Enter current job"}
                                    change={(e) => {
                                        setJob(e.target.value)
                                    }}></InputField></div>
                    <div className='mt-1 mb-1'>
                        <InputField labelName={"Skills"} type={"text"} placeholder={"Enter your skills"} change={(e) => {
                            setSkill(e.target.value)
                        }}></InputField></div>
                    <div className='mt-1 mb-1'>
                        <InputField labelName={"Experience"} type={"number"} placeholder={"Enter your experience"}
                                    change={(e) => {
                                        setExperience(e.target.value)
                                    }}></InputField></div>

                    <div className={'flex justify-between pl-4 pr-4 items-center w-full mb-2 mt-4'}>
                        <button type={'button'} onClick={()=>{navigate("/")}}
                            className="bg-blue-500 px-6 rounded text-white p-2 hover:bg-blue-800 focus:bg-blue-400 focus:border-2 focus:border-blue-800">
                            Go back
                        </button>
                        <button type={'button'} onClick={()=>{
                                axios.post("https://backend.mahiradhey0204.workers.dev/addmentor",{
                                    city:city,
                                    contact:contact,
                                    skills:skills,
                                    companyName:companyName,
                                    currentJob:currentJob,
                                    experience:experience
                                },{headers:{authorization:localStorage.getItem("token")}}).then((res)=>{
                                    if(res.data.msg==="success"){navigate("/mentorlist")}
                                    else {
                                        console.log(res.data)
                                        alert("Invalid inputs.Please Try again")
                                    }
                                })
                        }}
                            className="bg-blue-500 px-6 rounded text-white p-2 hover:bg-blue-800 focus:bg-blue-400 focus:border-2 focus:border-blue-800">
                            Submit
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddMentor