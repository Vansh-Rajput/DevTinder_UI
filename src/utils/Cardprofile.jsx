import { useState } from "react";
import { useSelector } from "react-redux"

const Cardprofile = ({photo}) => {

    const select=useSelector(store=>store?.user);
    

 return (
  <div className="hidden md:block">
    <div className="w-[300px] md:w-[400px] h-min bg-gray-900 border border-gray-700 rounded-lg p-2.5 shadow-xl shadow-gray-800">
      
      {/* Image */}
      <img
        className="rounded-lg h-[320px] w-[300px] md:h-[460px] md:w-[400px] object-cover pointer-events-none"
        src={photo}
        alt="Profile"
      />
      
      <div className="p-3 flex flex-col">
        
        {/* Name + premium badge */}
        <h5 className="mb-3 text-xl md:text-2xl font-bold text-white flex items-center justify-between">
          {select?.first_name?.toUpperCase()} {select?.last_name?.toUpperCase()}
          {select?.ispremium && (
            <img
              src="/ChatGPT Image Jul 28, 2025, 10_12_54 PM.png"
              className="w-[50px] h-[50px]"
              alt="Premium"
            />
          )}
        </h5>


        {/* About */}
        <p className="text-sm text-gray-400 mt-2 mb-1">{select?.about}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {select?.skills?.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-800 text-blue-400 text-[8px] md:text-xs font-medium px-2 py-1 rounded-full border border-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
        
      </div>
    </div>
  </div>
);


}

export default Cardprofile;