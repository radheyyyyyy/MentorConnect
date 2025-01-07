import MentorDashboard from "../Component/MentorDashboard.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import HomeNavBar from "../Component/HomeNavBar.jsx";

export default function Dashboard(){
    let navigate=useNavigate();
    let [loading,setLoading]=useState(true);
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/register")
        }
        else {
            setLoading(false);
        }
    },[]);

    if(loading){
        return (
            <div>
            <HomeNavBar/>
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
            </div>
            </div>
        )}
    else {
        return (
            <MentorDashboard/>
        )
        }

}