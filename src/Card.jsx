
import axios from 'axios';
import React from 'react'
import { Baseurl } from './utils/constants';
import { useDispatch } from 'react-redux';
import { removefeed } from './utils/Feedslice';

const Card = ({feed_data}) => {

    const dispatch=useDispatch();

const {first_name,last_name,photourl,about,_id}=feed_data;


const handlereq=async(reqstatus,userid)=>{
    const res=await axios.post(Baseurl+"/request/send/"+reqstatus+"/"+userid,{},{withCredentials:true}); 
  dispatch(removefeed(userid));
}

  return (

<div className="w-[400px] h-min  bg-gray-900  border border-gray-700 rounded-lg  p-2.5 shadow-xl shadow-gray-800 ">
    <a href="#">
        <img className="rounded-lg h-[500px] object-cover" src={photourl}  />
    </a>
    <div className="p-3 flex flex-col gap-3">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{first_name.toUpperCase()} {last_name.toUpperCase()}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{about}</p>

         <div className='flex justify-center gap-5'>
        <a href="#" onClick={()=>handlereq("ignored",_id.toString())}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-600 ">
             <svg className="w-3.5 h-3.5 mx-2 transform -scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            Ignore
        </a>
         <a href="#" onClick={()=>handlereq("interested",_id.toString())} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-600">
            Interested
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        </div>

    </div>
</div>


  )
}

export default Card