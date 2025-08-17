import { useState } from "react";
import { Baseurl } from "./utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removereq } from "./utils/reqslice";

const Reqitems = ({props}) => {

   const {first_name,last_name,email,photourl,about}=props.fromuserId;
   const dispatch=useDispatch(); 

console.log(props);

     
   const call=async(reqstatus,reqid)=>{
    await axios.post(Baseurl+"/request/review"+"/"+reqstatus+"/"+reqid,{},{withCredentials:true});
     dispatch(removereq(reqid));        //after acc/rej remove it from UI
   }

  return (
    
<ul class="md:w-[900px] w-screen">
   <li class="pb-3 sm:pb-4 my-6">
      <div class="flex mx-3 items-center space-x-4 space-y-4 rtl:space-x-reverse border-b-[0.1px] border-gray-700 ">
         <div class="shrink-0">
            <img class="w-10 h-10 rounded-full" src={photourl} alt="Neil image"/>
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-xs md:text-sm font-medium truncate text-white">
              {first_name.toUpperCase() + " " + last_name.toUpperCase()}
            </p>
            <p class="text-xs md:text-sm text-gray-500 truncate md:my-1.5">
               {email}
            </p>
            <div class="text-xs md:text-sm text-gray-400 truncate">
            {about}
         </div>
         </div>

          <div class="text-sm text-gray-400 truncate">
        <button onClick={()=>{call("rejected",props?._id.toString())}} type="button" class="cursor-pointer text-white bg-red-700 hover:bg-red-600  font-medium rounded-full text-[8px] md:text-sm p-1.5 md:px-5 md:py-2.5 text-center me-2 mb-2 ">Reject</button>
        <button onClick={()=>{call("accepted",props?._id.toString())}} type="button" class="cursor-pointer text-white bg-blue-700 hover:bg-blue-500  font-medium rounded-full text-[8px] md:text-sm p-1.5 md:px-5 md:py-2.5 text-center me-2 mb-2">Accept</button>
         </div>
         
      </div>

   </li>
</ul>
    

  )
}

export default Reqitems