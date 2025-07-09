import axios from 'axios';
import { removeUser } from './Userslice';
import { useDispatch, useSelector } from 'react-redux';
import { Baseurl } from './constants';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {

  const user=useSelector((store)=>store.user);   //comp re renders once we get the data in user, redux take care of it
  const dispatch=useDispatch();
  const navigate=useNavigate();

const logout=async()=>{
   await axios.post(Baseurl+"/logout",{},{withCredentials:true});
   dispatch(removeUser());
   navigate("/");
}

  return (
    <nav className="bg-gray-950 w-full mb-10 ">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo and Brand */}
        <div className="flex items-center">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhjNzMMDYvgbmtD0wEPxAa_61m130TNAezQ&s"
            className="h-10 w-10 object-cover"
          />

          <span className="text-white text-2xl font-semibold ml-2">Dev Tinder</span>
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="/main" className="text-white hover:text-gray-400" >Home</a></li>
          <li><a href="/main/connections" className="text-white hover:text-gray-400">Connections</a></li>
          <li><a href="/main/requests" className="text-white hover:text-gray-400">Requests</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">Pricing</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">Contact</a></li>
        </ul>

        {/* Right: Profile Photo */}
        <div className='flex justify-center items-center gap-6'>
        <p>Welcome,  { user?.first_name}</p>
         <Link to={'/main/profile'} >{
          user && <img
            src={user?.photourl}
            alt="user"
            className="w-10 h-10 rounded-full object-cover pointer-cursor"
          />
          }
          </Link>
  
          <button type="button" onClick={logout} className="text-white bg-blue-700 hover:bg-blue-800 cursor-pointer p-2.5 rounded-4xl text-xs">Log Out</button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
