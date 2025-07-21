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
    <nav className="bg-gray-900 w-full mb-10 ">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo and Brand */}
        <div className="flex items-center">

          <img
            src="/myimg.png"
            className="h-10 w-10 object-cover"
          />

          <span className="text-white text-2xl font-semibold ml-2">Dev Tinder</span>
        </div>

        {/* Center: Nav Links */}
        <ul className="flex justify-center items-center gap-7">
          <li><a href="/main" className="text-white hover:text-gray-400 " >Home</a></li>
          <li><a href="/main/connections" className="text-white hover:text-gray-400">Connections</a></li>
          <li><a href="/main/requests" className="text-white hover:text-gray-400">Requests</a></li>

         <button onClick={()=>{navigate('/main/premium')}} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] ">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 text-sm font-medium text-white backdrop-blur-3xl">
    Premium
  </span>
</button>

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
