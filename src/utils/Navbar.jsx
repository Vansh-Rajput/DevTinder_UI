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
   <nav className="bg-gray-900 w-full mt-3 mb-3 select-none">
  <div className="max-w-screen-xl mx-auto px-3 py-2 flex flex-wrap items-center justify-center md:justify-between gap-3">
    
    {/* Left: Logo + Brand */}
    <div className='flex gap-32 mb-2'>
    <div className="flex items-center">
      <img src="/myimg.png" className="h-8 w-8 md:h-10 md:w-10 object-cover" />
      <span className="text-white text-lg md:text-2xl font-semibold ml-1">
        Dev Tinder
      </span>
    </div>

{/* on mobile signout*/}
       <div className="flex  items-center gap-3 md:gap-6 text-xs md:text-base md:hidden">
      <Link to={"/main/profile"}>
        {user && (
          <img
            src={user?.photourl}
            alt="user"
            className="w-6 h-6 md:w-10 md:h-10 rounded-full object-cover"
          />
        )}
      </Link>
      <button
        type="button"
        onClick={logout}
        className="text-white bg-blue-700 hover:bg-blue-800 cursor-pointer px-2 py-1 md:px-3 md:py-2 rounded-full text-[9px] md:text-sm"
      >
        Log Out
      </button>
    </div>

</div>

    {/* Center: Nav Links */}
    <ul className="flex flex-wrap  items-center gap-3 md:gap-7 text-xs md:text-base">
      <li><a href="/main" className="border-[1px] p-2 border-gray-700 rounded-full md:p-3  text-white hover:text-gray-400">Home</a></li>
      <li><a href="/main/connections" className="border-[1px] p-2 border-gray-700 rounded-full md:p-3 text-white hover:text-gray-400">Connections</a></li>
      <li><a href="/main/requests" className="border-[1px] p-2 border-gray-700 rounded-full md:p-3 text-white hover:text-gray-400">Requests</a></li>

      <button
        onClick={() => navigate('/main/premium')}
        className="relative inline-flex h-8 md:h-10 overflow-hidden rounded-full p-[1px]"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
          bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 md:px-4 text-xs md:text-sm font-medium text-white backdrop-blur-3xl">
          Premium
        </span>
      </button>
    </ul>

    {/* Right: Profile + Logout */}
    <div className="md:flex items-center gap-3 md:gap-6 text-xs md:text-base hidden">
      <p className="text-white">Hi, {user?.first_name}</p>
      <Link to={"/main/profile"}>
        {user && (
          <img
            src={user?.photourl}
            alt="user"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
          />
        )}
      </Link>
      <button
        type="button"
        onClick={logout}
        className="text-white bg-blue-700 hover:bg-blue-800 cursor-pointer px-2 py-1 md:px-3 md:py-2 rounded-full text-xs md:text-sm"
      >
        Log Out
      </button>
    </div>

  </div>
</nav>


  );
};

export default Navbar;
