import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/Userslice";
import { useNavigate } from "react-router-dom";
import { Baseurl } from "./utils/constants";

const Login = () => {

const [errmsg,seterrmsg]=useState("");
const [issignup,setissignup]=useState(false);


    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    const [first_name,setfirstname]=useState("");
    const [last_name,setlastname]=useState("");
     const [age,setage]=useState("");
    const [gender,setgender]=useState("");
     const [about,setabout]=useState("");


    const dispatch=useDispatch();
    const navigate=useNavigate();

const handlelogin=async()=>{

    try{
        const res=await axios.post(Baseurl +"/login",{
            email,
            password,
        },{withCredentials:true})
 
    dispatch(addUser(res.data)); //contains the info of user who signed in, navigate to home after this
   navigate('/main');
    }

    catch(err){
      seterrmsg(err?.response?.data || "Something went Wrong");
    }
}



const handlesignup=async()=>{
    try{
        const res=await axios.post(Baseurl +"/signup",{
            first_name:first_name,last_name:last_name,age:age,email:email,password:password,gender:gender,
              about:about,

        },{withCredentials:true})
 
    dispatch(addUser(res.data)); 
   navigate('/main/profile');
    }

    catch(err){
      seterrmsg(err?.response?.data || "Something went Wrong");
    }
}

  return (
    <div className="min-h-screen flex flex-col ">
    <div className="flex flex-1">
      {/* Left: Login Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-3 ">
        <a href="#" className="flex items-center mb-3 text-3xl font-semibold text-white" >
          <img
            className="w-15 h-15"
            src="/myimg.png"
            alt="logo"
          />
          Dev Tinder
        </a>

        <div className="w-full max-w-lg  rounded-lg shadow p-8">
          <h1 className="text-2xl font-bold mb-6 text-gray-200">
            {!issignup?"Sign In":"Sign up"}
          </h1>
          <form className="space-y-3" action="#">
         
         {issignup && <div className="space-y-3">
                 <div>
              <label className="block mb-2 text-sm font-medium text-gray-200">
                First name
              </label>
              <input
                type="text"
                placeholder="first name..."
                className="bg-gray-300 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                required onChange={(e)=>{setfirstname(e.target.value)}}
              />
            </div>

             <div>
              <label className="block mb-2 text-sm font-medium text-gray-200">
                Last name
              </label>
              <input
                type="text"
                placeholder="last name..."
                className="bg-gray-300 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                required onChange={(e)=>{setlastname(e.target.value)}}
              />
            </div>
             <div>
              <label className="block mb-2 text-sm font-medium text-gray-200">
                Age
              </label>
              <input
                type="number"
                placeholder="Age..." 
                className="bg-gray-300 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                onChange={(e)=>{setage(e.target.value)}}
                required
              />
            </div>
              <div>
              <label className="block mb-2 text-sm font-medium text-gray-200">
               Gender
              </label>
              <input
                type="text"
                placeholder="male, female...."
                className="bg-gray-300 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                 onChange={(e)=>{setgender(e.target.value)}}
              />
            </div>
              <div>
              <label className="block mb-2 text-sm font-medium text-gray-200">
                About
              </label>
              <input
                type="text"
                placeholder="About..."
                className="bg-gray-300 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                onChange={(e)=>{setabout(e.target.value)}}
              />
            </div>
</div>  }

            <div>
              <label  className="block mb-2 text-sm font-medium text-gray-200">
                 Email 
              </label>
              <input
                type="email"
                className="bg-gray-300 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                placeholder="Email.."
                required onChange={(e)=>{setemail(e.target.value)}}
              />
            </div>
            <div>
              <label  className="block mb-2 text-sm font-medium text-gray-200">
                Password
              </label>
              <input 
                type="password"
                placeholder="password..."
                className="bg-gray-300 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                required onChange={(e)=>{setpassword(e.target.value)}} 
              />
            </div>
            <div className="flex items-center justify-between text-sm text-red-600">{errmsg}</div>

            <button
              type="button"
            onClick={issignup?handlesignup:handlelogin} 
              className=" w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5"
            >
             {!issignup?"Sign in":"Sign up"}
            </button>
            <p className="text-sm text-gray-600">
              { issignup==false?"Don’t have an account yet ? ":"Already have an account ? " }

              <a className="cursor-pointer text-blue-600 hover:underline font-medium" onClick={()=>{setissignup(!issignup)}} >
               {issignup==false?"Sign up":"Sign in"}
              </a>
            </p>
            
          </form>
        </div>
      </div>

      {/* Right: Illustration */}
      <div  className="hidden md:flex items-center justify-center w-1/2">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/analytics-building-illustration-download-in-svg-png-gif-file-formats--logo-digital-agency-build-growth-business-concept-pack-illustrations-3560996.png"
          alt="Login Illustration"
          className="w-4/5 h-auto"
        />
      </div>
</div>



<footer class="rounded-lg shadow-sm m-4 bg-gray-900">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" class="hover:underline">DevTinder™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/Cancellation" class="hover:underline me-4 md:me-6">Cancellation & Refunds</a>
        </li>
         <li>
            <a href="/Terms" class="hover:underline me-4 md:me-6">Terms and Conditions </a>
        </li>
        <li>
            <a href="/Privacy" class="hover:underline me-4 md:me-6">Privacy</a>
        </li>
        <li>
            <a href="/Shipping" class="hover:underline me-4 md:me-6">Shipping</a>
        </li>
        <li>
            <a href="/Contact" class="hover:underline">Contact Us</a>
        </li>
    </ul>
    </div>
</footer>

    </div>
  );
};

export default Login;
