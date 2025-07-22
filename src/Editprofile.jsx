import React from 'react'
import { useState } from 'react';
import Card from './Card';
import { Baseurl } from './utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/Userslice';

const Editprofile = ({select}) => {

    const dispatch=useDispatch();

       const [firstname,setfirstname]=useState(select.first_name);
   const [lastname,setlastname]=useState(select.last_name);
   const [ageno,setageno]=useState(select.age);
   const [About,setAbout]=useState(select.about);
   const [photo,setphoto]=useState(select.photourl);
   const [mail,setmail]=useState(select.email);
   const [errmsg,seterrmsg]=useState("");
     
const saveprofile=async(e)=>{
    try{
        e.preventDefault();
          const edit=await axios.patch(Baseurl+'/profile/edit',{
 first_name: firstname,
  last_name: lastname,
  age: ageno,
  about: About,
  photourl: photo,
          },{withCredentials:true});
            
          dispatch(addUser(edit?.data));
    }
    catch(err){
       seterrmsg(err?.response?.data);
    }
}

  return (
      <section className='flex justify-center items-center'>
     <div class="flex flex-col justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
         <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
             <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                 <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                     Profile
                 </h1>
                 <form class="space-y-4 md:space-y-6 w-[370px]" action="#">
                     <div>
                         <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                         <input type="text" value={firstname}  onChange={(e)=>setfirstname(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                     </div>
                      <div>
                         <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                         <input type="text" value={lastname}  onChange={(e)=>setlastname(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                     </div>
                       <div>
                         <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                         <input type="email"   class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={mail}/>
                     </div>
                         <div>
                         <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ageno</label>
                         <input  min="1" max="99" type="number" value={ageno}  onChange={(e)=>setageno(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                     </div>
                         <div>
                         <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">photo</label>
                         <input type="url" value={photo} onChange={(e)=>setphoto(e.target.value)}   class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                     </div>
                        
                         <div>
                         <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About</label>
                         <input type="text" value={About} onChange={(e)=>setAbout(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                     </div>
                 
                     <button  onClick={(e)=>saveprofile(e)} class="w-full text-white cursor-pointer hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-800">Save Profile</button>
                   
                 </form>

             </div>
         </div>
     </div>
      
    <Card feed_data={select}/>
   </section>
  )
}

export default Editprofile