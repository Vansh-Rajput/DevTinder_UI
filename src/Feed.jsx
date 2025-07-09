import axios from "axios"
import { Baseurl, errorfeed } from "./utils/constants"
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

if(selector?.length<=0)   // also handle when feed is empty
  return (
<div>
<img src={errorfeed}/>
<p className="text-center text-4xl">No More Feed</p>
</div>
)

  return (
    <div className="">
   { selector&&
   
selector.map((val)=><Card feed_data={val}/>)
   
   }
    </div>
  )
}

export default Feed
