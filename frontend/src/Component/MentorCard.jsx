import React from "react";

export function MentorCard({name,exp,skills}){
    return(
        <>

            <div
                className="border w-[900px] h-[150px] ml p-4 rounded-md shadow-md grid-rows-1 flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-medium">Meeting with <span className='text-blue-400 font-bold'> {name}</span>
                    </h3>
                    <br/>
                    <p className='text-lg'>{skills}</p>
                    <p className='text-lg'>Experience: {exp} years</p>
                </div>
                <div className="mt-24 flex flex-row justify-end gap-2">
                    <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-bold">Make
                        Appointment
                    </button>
                    <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-bold">Go to
                        Profile
                    </button>
                    <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-bold">Start
                        Chat
                    </button>
                </div>
            </div>
        </>
    )
}

