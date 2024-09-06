import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

function DropdownList() {
    const navigate=useNavigate();
    let [option,setOption]=useState("");
    useEffect(()=>{
        let t=localStorage.getItem("token")
        if(t){
            setOption("logout")
        }
        else {
            setOption("login")
        }
    },[])
    return (
        <div className="absolute top-100% right-2  bg-white shadow-md border-black border-[3px] rounded-md p-2 w-[150px] max-h-48 overflow-y-auto z-10">
            <ul className="list-none p-0">
                <li className="p-1 pt-2 cursor-pointer text-[14px]">
                    <button type={'button'} className="text-red-500 font-bold flex flex-col" onClick={()=>{if(option==="login"){
                        navigate("/login");
                    }
                    else {
                        localStorage.clear();
                        navigate("/login")
                    }
                    }}>{option}</button>
                </li>
            </ul>
        </div>
    );
}


export default DropdownList;

