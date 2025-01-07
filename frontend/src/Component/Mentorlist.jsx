import { div } from 'framer-motion/client';
import React, {useEffect, useState} from 'react';
import {MentorCard} from "./MentorCard.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Mentorlist() {

  const [l,setlist]=useState([]);
  const [loading,setLoading]=useState(true);
  const navigate=useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/register")
    }
    axios.get("http://localhost:3000/mentorlist",{headers:{authorization:localStorage.getItem("token")}}).then(
        (res)=>{
          if(res.data.msg==='invalid_token' || res.data.msg==='no_token'){navigate("/login")}
          else {
            setLoading(false);
            setlist(res.data.list);
          }
        }
    )
  }, []);





  function show() {
    if (loading){
      return <>
        <div role="status" className="max-w-sm pl-12 animate-pulse">
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
              <MentorCard link={ind.url} receiver={ind.emailId} key={ind.id} name={ind.name} exp={ind.experience} skills={ind.skills}/>
            </>
          })
      )
  }
  return (
    <>
    <div className='h-screen mt-28 space-y-5 min-w-96 bg-white'>
      {show()}
    </div>
    </>
  );
}

export default Mentorlist;