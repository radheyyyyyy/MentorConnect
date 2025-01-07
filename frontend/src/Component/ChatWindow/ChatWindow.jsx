import React, { useState, useEffect } from 'react';
import { FaPaperPlane, FaSmile, FaPaperclip } from 'react-icons/fa';
import {jwtDecode} from 'jwt-decode'
import axios from "axios";
// Chat Window Component
function ChatWindow({ receiverId,name, onClose }) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [sender,setSender]=useState("");

    useEffect(() => {
        // Fetch initial messages when the component mounts (optional)
        // You could add API call here to fetch messages between the users
        let t=localStorage.getItem("token").split(" ")[1];
        let decodedToken=jwtDecode(t);

        setSender(decodedToken?.email)
    }, []);

    const sendMessage = async () => {

        let senderId=sender
    if(message!==""){
        const messageData = {
            senderId:senderId,
            receiverId:receiverId,
            content: message,
        };
        console.log(messageData)

        try {
            let response=await axios.post("http://localhost:3000/sendmessage",{
                messageData
            })

            if (response.data.msg==='success') {
                setMessages([...messages, {senderId:senderId,content:message}]); // Update messages with the new message
                setMessage(''); // Clear input after sending
            } else {
                console.error('Failed to send message:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }}
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md shadow-lg transition transform duration-300 ease-in-out">
                <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-t-lg">
                    <div className="flex items-center space-x-3">
                        <img
                            src='/avatar.png' // Placeholder avatar based on receiverId
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">Chat with {name}</h3>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-white text-xl">&times;</button>
                </div>

                {/* Chat Messages Area */}
                <div className="h-64 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.senderId === sender ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`px-4 py-2 rounded-lg shadow ${
                                    msg.senderId === sender ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
                                }`}
                            >
                                {msg.content}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chat Input Area */}
                <div className="flex items-center p-4 border-t">
                    <button className="text-gray-500 hover:text-blue-500">
                        <FaSmile size={24} />
                    </button>
                    <button className="text-gray-500 hover:text-blue-500 mx-2">
                        <FaPaperclip size={24} />
                    </button>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-grow border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Type a message..."
                    />
                    <button
                        onClick={sendMessage}
                        className="text-white bg-blue-500 rounded-full p-3 ml-2 hover:bg-blue-600 transition"
                    >
                        <FaPaperPlane />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatWindow;
