import React from 'react'

function Bio() {
  return (
    <div className='pr-20'>
        <div className="w-full mt-4 max-w-[600px] p-3 overflow-hidden bg-white border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md"></div>
      <div className="p-6 relative z-10 w-full">
        <p className="text-gray-600 ">
          As a Frontend Developer at JP Morgans, my responsibilities included
          understanding the target audience and issue
        </p>
      </div>
    </div>
    </div>
  )
}

export default Bio