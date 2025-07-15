
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Baseurl, createsocketconnection } from './utils/constants';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Chat = () => {
    const {toId}=useParams();
  const loggedin=useSelector((store)=>store?.user);
const userid= loggedin?._id;
const [msg,setmsg]=useState("");
const [chats,setchats]=useState([]);
console.log(toId.toString())


const prevchat=async()=>{
const data=await axios.get(Baseurl+"/main/chat/"+toId.toString(),{withCredentials:true});
console.log(data);

const allprevchats=data?.data?.messages?.map((val)=>({
 firstname:val?.senderid?.first_name,
  senderid:val?.senderid?._id ,
  text:val?.text,
  photourl:val?.senderid?.photourl
}))

 setchats(allprevchats);   //allprevchats is already an array, so set it directly

}


useEffect(()=>{
  prevchat();
},[])

const sendmsg=()=>{
  if(msg.trim()){                  //EDGE CASE-> what if user sends empty spaces or no msg?
 const socket=createsocketconnection();
 socket.emit("sendmsg",{firstname:loggedin?.first_name,targetid:toId,userid:userid,text:msg});
  }
 setmsg("");
} 

// connecting to backend express server as page loads, .emits lets us send custom messages from front to back
// server through websocket connection instead of .get(),.post() in http

useEffect(()=>{
    
  const socket=createsocketconnection();
  socket.emit("joinchat",{toId,userid});   //this way connecting to backend socket.io "joinchat" 

socket.on("msg received",({firstname,userid,text,photourl})=>{   //getting the msg using handler at backend, both sender,rec will receive 
console.log(firstname + " : " + text)
setchats(prev=>[...prev,{firstname:firstname,senderid:userid,text:text,photourl:photourl}]);
});

return ()=>{
    socket.disconnect();      //VERY IMP TO DISCONNECT TOO
}
},[userid,toId]);   


  return (
 
        <div class="h-[680px] w-[80%] flex flex-col b">

    <div class="bg-gray-900 flex-1 overflow-y-scroll ">


{
  
    chats.map((val)=>
     <div class="px-4 py-2 my-3">

     {
         val?.senderid!=userid  && <div> 
                <div class="flex items-center mb-4">
                <img class="w-8 h-8 rounded-full mr-2" src={val?.photourl} alt="User Avatar"/>
                <div class="font-medium">{val?.firstname}</div>
            </div>
            <div class="bg-gray-700  inline rounded-b-xl rounded-r-xl px-4 py-2 shadow mb-2 ">
                {val?.text}
            </div>
            </div>
     }

        {val?.senderid==userid  &&  <div class="flex justify-end  cursor-pointer">
                 <div class="flex max-w-96 rounded-b-xl rounded-l-xl bg-gray-700 text-white px-4 py-2  gap-3">
                   <p>{val?.text}</p>
                 </div>
                 <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                   <img src={loggedin?.photourl} alt="My Avatar" class="w-8 h-8 rounded-full"/>
                 </div>
               </div>
}
            
</div>
)   
}

    </div>


    <div class="bg-gray-900 px-4 py-2">
        <div class="flex items-center ">
            <input value={msg} onChange={(e)=>{setmsg(e.target.value)}} class=" w-full  border-2 rounded-full py-2 px-4 mr-2 border-white" type="text" placeholder="Type your message..."/>
            <button onClick={sendmsg} class="bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full w-26">
        Send ➤
      </button>
        </div>
    </div>



    </div>
    
  )
}

export default Chat
