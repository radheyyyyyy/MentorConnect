import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiTwotoneSchedule } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import Bio from "./Bio";
import Rating from "./Rating";
import HomeNavBar from "./HomeNavBar.jsx";

function MentorDashboard() {
    return (
        <>
            <HomeNavBar />
            <div className="bg-gray-100 min-h-screen">
                {/* Mentor dashboard header */}
                <div className="bg-gray-900 py-12 text-center">
                    <h1 className="text-3xl font-bold text-white">
                        Mentor Dashboard
                    </h1>
                </div>

                {/* Profile section */}
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-10 px-4 py-8">
                    <div className="relative">
                        <img
                            src="/avatar.png"
                            alt="Mentor Avatar"
                            className="w-36 h-36 rounded-full border-4 border-slate-700"
                        />
                    </div>
                    <div className="text-center md:text-left md:w-2/3">
                        <h1 className="text-3xl font-bold mt-4">Jay</h1>
                        <h2 className="text-xl font-semibold text-slate-500">
                            Senior Developer at JP Morgan's
                        </h2>
                        <div className="flex justify-center md:justify-start gap-2 mt-2">
                            <HiOutlineLocationMarker className="text-slate-500 text-2xl" />
                            <h2 className="text-xl font-semibold text-slate-500">
                                India
                            </h2>
                        </div>
                        <div className="flex justify-center md:justify-start gap-2 mt-2">
                            <MdOutlineWatchLater className="text-slate-500 text-2xl" />
                            <h2 className="text-xl font-semibold text-slate-500">
                                Available: 8am - 12pm
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-around py-4 border-b-2 border-gray-300">
                    <h1 className="text-lg font-semibold text-black hover:underline">
                        Overview
                    </h1>
                    <h1 className="text-lg font-semibold text-black hover:underline">
                        Rating
                    </h1>
                </div>

                {/* Bio and Rating */}
                <div className="flex flex-col md:flex-row justify-center gap-10 py-8">
                    <Bio />
                    <Rating />
                </div>

                <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-16 gap-10 py-8">
                    {/* Left Section: Skills & Experience */}
                    <div className="w-full lg:w-1/2">
                        {/* Background */}
                        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                            <h2 className="text-2xl font-bold text-black mb-4">Background</h2>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-600 mb-2">Skills</h2>
                                    <ul className="space-y-2">
                                        <li className="bg-blue-500 text-white px-3 py-1 rounded-md font-semibold">Frontend Developer</li>
                                        <li className="bg-orange-500 text-white px-3 py-1 rounded-md font-semibold">Backend Developer</li>
                                        <li className="bg-green-500 text-white px-3 py-1 rounded-md font-semibold">Android Developer</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-600 mb-2">Fluent in</h2>
                                    <ul className="space-y-2">
                                        <li className="bg-gray-200 px-3 py-1 rounded-md font-medium">English</li>
                                        <li className="bg-gray-200 px-3 py-1 rounded-md font-medium">Hindi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-2xl font-bold text-black mb-4">Experience</h2>
                            <table className="w-full text-left">
                                <thead>
                                <tr>
                                    <th className="text-xl font-bold text-slate-600">Role</th>
                                    <th className="text-xl font-bold text-slate-600">Experience</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="text-slate-500">
                                    <td>Frontend Developer</td>
                                    <td>2 years</td>
                                </tr>
                                <tr className="text-slate-500">
                                    <td>Full-Stack Developer</td>
                                    <td>3 years</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Right Section: Community Activities */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-2xl font-bold text-black mb-4">Community Activities</h2>
                            <div className="flex gap-10">
                                <div className="flex items-center space-x-3">
                                    <AiTwotoneSchedule className="text-blue-500 text-4xl" />
                                    <div>
                                        <h2 className="text-xl font-semibold text-black">3</h2>
                                        <p className="text-sm text-slate-400">Completed Sessions</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <IoMdTime className="text-pink-500 text-4xl" />
                                    <div>
                                        <h2 className="text-xl font-semibold text-black">1h 35 min</h2>
                                        <p className="text-sm text-slate-400">Total Mentoring</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sessions */}
                            <div className="mt-6 space-y-4">
                                <div className="p-4 bg-gray-50 rounded-md shadow-sm">
                                    <h3 className="text-lg font-semibold">Career Development Plan</h3>
                                    <p className="text-sm text-slate-500 flex items-center gap-2">
                                        <IoMdTime className="text-base" /> 30 min
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-md shadow-sm">
                                    <h3 className="text-lg font-semibold">Increasing Problem-Solving Skills</h3>
                                    <p className="text-sm text-slate-500 flex items-center gap-2">
                                        <IoMdTime className="text-base" /> 20 min
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-md shadow-sm">
                                    <h3 className="text-lg font-semibold">Increasing Communication Skills</h3>
                                    <p className="text-sm text-slate-500 flex items-center gap-2">
                                        <IoMdTime className="text-base" /> 45 min
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MentorDashboard;

