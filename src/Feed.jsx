import axios from "axios"
import { Baseurl } from "./utils/constants"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addfeed } from "./utils/Feedslice";
import Card from "./Card";


const Feed = () => {

  const selector=useSelector(store=>store?.feed);
  const dispatch=useDispatch();

    const call=async()=>{
if(selector)return;
const data= await axios.get(Baseurl+"/user/feed",{withCredentials:true});
   dispatch(addfeed(data?.data));
   console.log(data?.data)
    }

useEffect(()=>{
  call();
},[]);

  return (
    <div className="">
   { selector&&<Card feed_data={selector[0]}/>}
    </div>
  )
}

export default Feed
