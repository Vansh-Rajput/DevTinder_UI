import axios from "axios"
import { Baseurl } from "./utils/constants"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addconnections } from "./utils/connectslice";
import Connectitems from "./utils/Connectitems";


const Connections = () => {
    const dispatch=useDispatch();
    const friends=useSelector((store)=>store?.connect);

    const call=async()=>{
        try{
const connections=await axios.get(Baseurl+"/user/connections",{withCredentials:true});
dispatch(addconnections(connections?.data));
        }
        catch(err){
       console.log(err);
        }
    }

    useEffect(()=>{
       call();
    },[]);



    if(friends===null)
        return (<div className="text-center mt-16">
               <p className="md:text-4xl font-semibold">No Connections Currently</p>
                     </div>)

  return (
    <div>
   <h1 class="mb-10 text-center md:mt-8 mt-8 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-sky-400">Connections</span></h1>
    {
      friends.map((val)=>{
     return <Connectitems props={val}/>
      })
    }
    </div>
  )
}

export default Connections