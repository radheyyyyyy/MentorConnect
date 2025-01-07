import React, { useState, useEffect, useRef } from 'react';
import { BsChatDotsFill, BsX } from 'react-icons/bs';
import axios from "axios";
import { marked } from "marked";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState(""); // Renamed for better clarity
    const [messages, setMessages] = useState([
        { text: "Hello! How can we assist you today?", sender: "bot" }
    ]); // Default message from the bot
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false); // New state to track loading status
    const [displayedText, setDisplayedText] = useState(""); // For gradual display of the bot's message

    // Create a reference to the chat body
    const chatBodyRef = useRef(null);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async () => {
        if (inputValue.trim().length > 0) { // Check input value instead of message state
            try {
                // Add the user's message first
                setMessages(prevMessages => [...prevMessages, { text: inputValue, sender: "user" }]);
                setInputValue(""); // Clear input field

                // Set loading state to true and add loading indicator to messages
                setLoading(true);
                setMessages(prevMessages => [...prevMessages, { text: "Loading...", sender: "bot", loading: true }]);

                // Send the message to the backend
                let res = await axios.post("http://localhost:3000/chatbot", {
                    message: inputValue // Send the inputValue
                });

                // Simulate the bot typing slowly by revealing the text gradually
                const fullText = res.data.reply;
                setMessages(prevMessages => prevMessages.map(msg => msg.loading ? { text: fullText, sender: "bot", typing: true } : msg));

                setDisplayedText(""); // Start with an empty string for the gradual reveal
                setLoading(false); // Stop loading

                // Simulate typing effect by revealing the text one character at a time
                let i = 0;
                const interval = setInterval(() => {
                    if (i < fullText.length) {
                        setDisplayedText((prev) => prev + fullText[i]);
                        i++;
                    } else {
                        clearInterval(interval);
                        setMessages(prevMessages => prevMessages.map(msg =>
                            msg.typing ? { text: fullText, sender: "bot", typing: false } : msg
                        ));
                    }
                }, 50); // Adjust typing speed by changing the interval duration (50ms here)
            } catch (e) {
                console.log("error", e);
                setLoading(false); // Ensure loading state is false in case of error
            }
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Update input value
        setMessage(e.target.value); // Update message state simultaneously
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage().then(() => {
                console.log("Message sent");
            });
        }
    };

    // Scroll to the bottom whenever a new message is added
    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]); // Watch the messages array

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
            {/* Floating Action Button (FAB) */}
            {!isOpen && (
                <button
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
                    onClick={toggleChatbot}
                    aria-label="Toggle Chatbot"
                >
                    <BsChatDotsFill size={24} className="animate-bounce" />
                </button>
            )}

            {/* Chat window */}
            {isOpen && (
                <div
                    className="w-96 h-[450px] bg-white shadow-2xl rounded-3xl p-4 flex flex-col transition-all
                     duration-300 ease-in-out transform scale-100 border-t-4 border-indigo-500"
                >
                    {/* Chat Header */}
                    <div className="flex justify-between items-center border-b pb-3 mb-3">
                        <h2 className="text-lg font-semibold text-gray-800">Chat with Us</h2>
                        <button
                            className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                            onClick={toggleChatbot}
                            aria-label="Close Chatbot"
                        >
                            <BsX size={24} className="hover:rotate-90 transition-transform duration-300" />
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div
                        ref={chatBodyRef} // Attach ref to chat body
                        className="flex-1 overflow-y-auto p-2 space-y-3 scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-transparent"
                    >
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`p-3 rounded-xl shadow-sm ${
                                    message.sender === "bot"
                                        ? " max-w-[80%] bg-gray-100 text-gray-700 self-start"  // Bot messages on the left
                                        : " max-w-[60%] bg-gradient-to-r from-blue-500 to-indigo-500 text-white self-end ml-auto"  // User messages on the right
                                }`}
                            >
                                {message.typing ? (
                                    <span>{displayedText}</span>
                                ) : (
                                    <span dangerouslySetInnerHTML={{ __html: marked(message.text) }} />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Chat Input Area */}
                    <div className="mt-2 flex items-center space-x-2 border-t pt-2">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-200 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
                            placeholder="Type a message..."
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                        />
                        <button
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                            onClick={handleSendMessage}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
