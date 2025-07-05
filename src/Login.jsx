import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/Userslice";
import { useNavigate } from "react-router-dom";
import { Baseurl } from "./utils/constants";

const Login = () => {

    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();

const handlelogin=async()=>{

    try{
        const res=await axios.post(Baseurl +"/login",{
            email,
            password,
        },{withCredentials:true})
 
    dispatch(addUser(res.data)); //contains the info of user who signed in, navigate to home after this
   navigate('/feed');
    }

    catch(err){
       console.log(err);
    }
}

  return (
    <div className="min-h-screen flex">
      {/* Left: Login Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-3 ">
        <a href="#" className="flex items-center mb-6 text-3xl font-semibold text-white">
          <img
            className="w-15 h-15"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhjNzMMDYvgbmtD0wEPxAa_61m130TNAezQ&s"
            alt="logo"
          />
          Dev Tinder
        </a>
        <div className="w-full max-w-lg  rounded-lg shadow p-8">
          <h1 className="text-2xl font-bold mb-6 text-gray-200">
            Sign in to your account
          </h1>
          <form className="space-y-6" action="#">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200">
                 Email 
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-300 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                placeholder="Email.."
                required onChange={(e)=>{setemail(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-200">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password..."
                className="bg-gray-300 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                required onChange={(e)=>{setpassword(e.target.value)}}
              />
            </div>
            <div className="flex items-center justify-between">
           
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="button"
              onClick={handlelogin}
              className=" w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Sign in
            </button>
            <p className="text-sm text-gray-600">
              Don’t have an account yet?{' '}
              <a href="#" className="text-blue-600 hover:underline font-medium">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right: Illustration */}
      <div className="hidden md:flex items-center justify-center w-1/2">
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
          alt="Login Illustration"
          className="w-4/5 h-auto"
        />
      </div>
    </div>
  );
};

export default Login;
