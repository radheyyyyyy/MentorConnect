import React from 'react';

const MentorshipFAQ = () => {
    return (
        <div className="bg-black text-white py-10">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold">Mentorship Questions & Answers</h1>
                <p className="text-gray-400 mt-4">
                    Discover the essential questions and answers about MentorGuide
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 border border-gray-700 rounded-lg">
                    <div className="flex items-start">
                        <span className="text-2xl font-bold mr-4">?</span>
                        <div>
                            <h2 className="text-xl font-bold">How to find a mentor?</h2>
                            <p className="text-gray-300 mt-2">
                                Connecting students with experienced professionals is our mission. Just a click and your mentor is assigned.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 border border-gray-700 rounded-lg">
                    <div className="flex items-start">
                        <span className="text-2xl font-bold mr-4">?</span>
                        <div>
                            <h2 className="text-xl font-bold">What support do you provide?</h2>
                            <p className="text-gray-300 mt-2">
                                We offer experts having experience can help you navigate your career and academic choices.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 border border-gray-700 rounded-lg">
                    <div className="flex items-start">
                        <span className="text-2xl font-bold mr-4">?</span>
                        <div>
                            <h2 className="text-xl font-bold">Can I become a mentor?</h2>
                            <p className="text-gray-300 mt-2">
                                If you're an experienced professional, you can apply to become a mentor and help others succeed.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 border border-gray-700 rounded-lg">
                    <div className="flex items-start">
                        <span className="text-2xl font-bold mr-4">?</span>
                        <div>
                            <h2 className="text-xl font-bold">How does your platform work?</h2>
                            <p className="text-gray-300 mt-2">
                                Our platform connects mentees with mentors, providing personalized learning and mentorship experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorshipFAQ;
