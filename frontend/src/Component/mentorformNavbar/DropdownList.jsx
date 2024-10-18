import React from 'react';
import {useNavigate} from "react-router-dom";

function DropdownList() {
    const navigate=useNavigate();
  return (
    <div className="absolute top-100% right-0 bg-white shadow-md border-black border-[3px] rounded-md p-2 w-[150px] max-h-48 overflow-y-auto z-10">
      <ul className="list-none p-0">
        <li onClick={()=>{localStorage.clear()}} className="p-1 cursor-pointer text-[14px]">
          <span className="text-red-500 font-bold flex flex-col">Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default DropdownList;