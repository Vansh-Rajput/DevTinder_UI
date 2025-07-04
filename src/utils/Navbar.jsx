import React from 'react';
import { useSelector } from 'react-redux';


const Navbar = () => {

  const user=useSelector((store)=>store.user);   //comp re renders once we get the data in user, redux take care of it

  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo and Brand */}
        <div className="flex items-center">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhjNzMMDYvgbmtD0wEPxAa_61m130TNAezQ&s"
            alt="logo"
            className="h-10 w-10 object-cover"
          />

          <span className="text-white text-2xl font-semibold ml-2">Dev Tinder</span>
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#" className="text-white hover:text-gray-400">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">About</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">Services</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">Pricing</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">Contact</a></li>
        </ul>

        {/* Right: Profile Photo */}
        <div>
          {
          user && <img
            src={user?.photourl}
            alt="user"
            className="w-10 h-10 rounded-full object-cover"
          />
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
