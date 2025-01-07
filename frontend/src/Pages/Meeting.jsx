import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const JoinRoom = () => {
    const [roomId, setRoomId] = useState('');
    const [error, setError] = useState(false);
    const [isCreatingRoom, setIsCreatingRoom] = useState(false);
    const [showHostPopup, setShowHostPopup] = useState(false);
    const navigate = useNavigate();
    const [msg,setM]=useState("");
    const handleCancel = () => {
        setRoomId('');
        setError(false);
        setIsCreatingRoom(false);
        setShowHostPopup(false);
        navigate("/mentorlist")
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-blue-500">
            {/* Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/meeting.mp4"
                autoPlay
                loop
                muted
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

            <div className="relative bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
                    Join a Session
                </h1>

                <div className="flex flex-col items-center">
                    <input
                        type="text"
                        className={`w-full p-3 mb-4 border-2 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
                            error ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="Enter Session ID"
                        value={roomId}
                        onChange={(e) => {
                            setRoomId(e.target.value);
                            setError(false);
                        }}
                    />
                    {error && <p className="text-red-500 text-sm mb-4">{msg}</p>}

                    <button onClick={async ()=>{
                        if(roomId===""){
                            setError(true)
                            setM("Session Expired or invalid session");
                        }
                        let res=await axios.post("http://localhost:3000/checkroomid",{
                            id:roomId
                        },{headers:{authorization:localStorage.getItem("token")}})
                        if(res.data.msg==="success"){
                            window.location.href=("http://localhost:8000/"+roomId);
                        }
                        else {
                            setError(true)
                            setM("Session Expired or invalid session");
                        }
                    }}
                        className="text-center w-full p-3 mb-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    >
                        Join Session
                    </button>

                    <button
                        className="w-full p-3 mb-4 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-transform transform hover:scale-105"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>

                    <p className="text-sm text-gray-500 mb-4">or</p>

                    <button
                        className="w-full p-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-transform transform hover:scale-105"
                        onClick={() => setShowHostPopup(true)}
                    >
                       Create a New Session
                    </button>
                </div>
            </div>

            {/* Popup for Hosting Confirmation */}
            {showHostPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-96 animate-fadeIn">
                        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                            Do you want to host a session?
                        </h2>
                        <div className="flex justify-around">
                            <button
                                className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition-transform transform hover:scale-105"
                                onClick={async () => {
                                    setShowHostPopup(false);
                                    setIsCreatingRoom(true);
                                    let res=await axios.get("http://localhost:3000/getroomid",{
                                        headers:{token:localStorage.getItem("token"),authorization:localStorage.getItem("token")}
                                    });
                                    window.location.href=("http://localhost:8000/"+res.data.id)

                                }}
                            >
                                Yes
                            </button>
                            <button
                                className="bg-red-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 transition-transform transform hover:scale-105"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JoinRoom;
