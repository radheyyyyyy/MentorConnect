
import {useNavigate} from "react-router-dom";
import Navbar from "../Component/mentorformNavbar/Navbar.jsx";
import LeftProfile from "../Component/LeftProfile.jsx";
import Mentorlist from "../Component/Mentorlist.jsx";

function MentorList() {
    const navigate=useNavigate();



    return (
        <div className='w-fit h-screen'>
            <Navbar/>
            <div className='w-fit h-screen'>
                <div className="absolute w-full bg-slate-100">
                    <div className="text-black mt-14 flex px-4">
                        <a href="">
                            <h2 className="text-slate-500">Home</h2>
                        </a>
                        <h2>/</h2>
                        <a href="">
                            <h2>Appointments</h2>
                        </a>
                    </div>
                    <div className='text-black text-[20px] font-bold pl-4 mt-1'>
                        <h1 >Appointments</h1>
                    </div>
                </div>
                <div className="divider p-1"></div>
                <div className='parent flex bg-white'>
                    <div className='left w-48'>
                        <LeftProfile/>
                    </div>
                    <div className='right'>
                        <Mentorlist/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MentorList;