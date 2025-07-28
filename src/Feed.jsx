import axios from "axios";
import { Baseurl, errorfeed } from "./utils/constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addfeed } from "./utils/Feedslice";
import Card from "./Card";
import Toast, { UndoToast } from "./utils/Toast";

const Feed = () => {
  const [premium,setpremium]=useState(false);
    const [toast,settoast]=useState(null);

      const [over,setover]=useState(false);

  const selector = useSelector((store) => store?.feed);
  const dispatch = useDispatch();

  const call = async () => {
    const data = await axios.get(Baseurl + "/user/feed", { withCredentials: true });
    dispatch(addfeed(data?.data));
  };

   
  const verify=async()=>{
    const verification=await axios.post(Baseurl+"/payment/verify",{},{withCredentials:true});
   if(verification?.data?.check)
    setpremium(true);
  }

  const undo=async()=>{
    const res=await axios.post(Baseurl+"/request/swipeundo",{},{withCredentials:true})
    call();
  showToast(res?.data?.message);
  }


  useEffect(() => {
    call();
    verify();
  }, []);

  if (!selector || selector.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={errorfeed} className="w-64" />
        <p className="text-center text-4xl mt-4 text-white">No More Feed</p>
      </div>
    );
  }

    
 
  const showToast = (val) => {
  val?settoast("undo"):settoast("fail");  //create common state variable with null initially
  setTimeout(() => {
     settoast(null)
  },3000);
};

  return (

//create a state var inside parent not individual cards (lifting state up), as this react swipe library doesnt
//depends whether we stop our removefeed dispatch in card.jsx, still its swipe would work, could be working
//if we would have used hardcoded buttons for ignore/interest...using i/else logic on <TinderCard wont work..

   !over ?<div className="flex items-center h-screen justify-center">
    
        {selector && selector.map((val) => (
          <Card key={val._id} feed_data={val} over={over} setover={setover}/>
        ))}

            <div className="absolute bottom-10 left-10">       
        { premium && <p onClick={undo} className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-4 cursor-pointer" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15 15-6 6m0 0-6-6m6 6V9a6 6 0 0 1 12 0v3" />
          </svg>
        </p> }
        
      </div>

{toast=="fail" && <Toast/>}
{toast=="undo" && <UndoToast/>}

    </div>:(
    <div className="text-white text-xl text-center font-semibold mt-10">
      Swipes Over for Today
    </div>
  )


  );
};

export default Feed;
