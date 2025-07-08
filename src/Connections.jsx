import axios from "axios"
import { Baseurl } from "./utils/constants"
import { useEffect } from "react";


const Connections = () => {

    const call=async()=>{
        try{
const connections=await axios.get(Baseurl+"/user/connections",{withCredentials:true});
console.log(connections);
        }
        catch(err){
       console.log(err);
        }
    }

    useEffect(()=>{
       call();
    },[]);

  return (
    <div>
hello
    </div>
  )
}

export default Connections