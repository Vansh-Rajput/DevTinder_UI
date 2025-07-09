import Navbar from './utils/Navbar';
import Footer from './utils/Footer';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Baseurl } from './utils/constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addUser } from './utils/Userslice';
import Feed from './Feed';


const Body = () => {
   
  const navigate=useNavigate();
  const dispatch=useDispatch();

//use try catch inside async func, since try catch works synchronously,
//  it would be over the time api is being fetched
  const data=async()=>{

    try{        
   const res=await axios.get(Baseurl +"/profile/view",{withCredentials:true});

             dispatch(addUser(res.data));
  
    }
      catch(err){     //if error occurs, use it to go back to login, this could be due to going to any
                      //Auth secured page without login, as our Body.jsx contains all outlets
  navigate("/");      
}
}

 
  
  useEffect(()=>{
    data();
  },[]);


  return (
        <div className='flex flex-col items-center  h-screen'>
        <Navbar/>
        <Outlet/>
        </div>
    )
  }


export default Body