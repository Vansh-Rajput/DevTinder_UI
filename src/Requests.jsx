import axios from "axios"
import { Baseurl, errorreq } from "./utils/constants"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addreq } from "./utils/reqslice";
import Reqitems from "./Reqitems";



const Requests = () => {

     const dispatch=useDispatch();
    const requests=useSelector((store)=>store?.request);

    const call=async()=>{
        try{
const req=await axios.get(Baseurl+"/user/requests",{withCredentials:true});
dispatch(addreq(req?.data));
console.log(req?.data)
        }
        catch(err){
       console.log(err);
        }
    }

      const fulfill=async()=>{
        try{
const result=await axios.post(Baseurl+"/request/review/" +  + "/" ,{withCredentials:true});
        }
        catch(err){
       console.log(err);
        }
    }
    

    useEffect(()=>{
       call();
    },[]);

    if(requests?.length===0  || requests=="you have no connections pending currently")
      return (<div className="text-center">
      <img src={errorreq}/>
       <p className="text-4xl font-semibold">No  Requests  Currently</p>
             </div>
      )


  return (
    <div>
      <h1 class="mb-15 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-sky-400">Requests</span></h1>

        
  {
    requests?.map((val)=>{
     return <Reqitems props={val}/>
      }
      )
      
    }
    </div>
  )
}

export default Requests

