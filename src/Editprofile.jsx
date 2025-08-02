import { useEffect, useState } from 'react';
import { Baseurl } from './utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/Userslice';
import SelectSkills from './SelectSkills';

const Editprofile = ({select}) => {

    const dispatch=useDispatch();

       const [firstname,setfirstname]=useState(select.first_name);
   const [lastname,setlastname]=useState(select.last_name);
   const [ageno,setageno]=useState(select.age);
   const [About,setAbout]=useState(select.about);
   const [photo,setphoto]=useState(select.photourl);
   const [mail,setmail]=useState(select.email);

 const [selectedoptions,setselectedoptions]=useState([]);
   const [errmsg,seterrmsg]=useState("");

   console.log(selectedoptions)
     
const saveprofile=async(e)=>{
    try{
        e.preventDefault();
          const edit=await axios.patch(Baseurl+'/profile/edit',{
 first_name: firstname,
  last_name: lastname,
  age: ageno,
  about: About,
  photourl: photo,
  skills:selectedoptions.map((elem)=>elem.value)    //its an object of label and value, so pass as array string
          },{withCredentials:true});
            
          dispatch(addUser(edit?.data));
    }
    catch(err){
       seterrmsg(err?.response?.data);
    }
}


// display current skills from DB
const profile=async()=>{
  const res=await axios.get(Baseurl+"/profile/view",{withCredentials:true});
  setselectedoptions(res?.data?.skills?.map((val)=>{return {value:val,label:val} }));
}

useEffect(()=>{
    profile();
},[])

  return (
      <section className='flex justify-center items-center'>
     <div class="flex flex-col justify-center px-6 py-8 lg:py-0">
     
         <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-950">
         
             <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                 <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                     Profile
                 </h1>
                 <form class="space-y-4 md:space-y-6 w-[390px]" action="#">
                     <div>
                         <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">First Name</label>
                         <input type="text" value={firstname}  onChange={(e)=>setfirstname(e.target.value)} class="bg-gray-50 border border-gray-600 text-gray-900 rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-gray-200" />
                     </div>
                      <div>
                         <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Last Name</label>
                         <input type="text" value={lastname}  onChange={(e)=>setlastname(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                     </div>
                       <div>
                         <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Email</label>
                         <input type="email"   class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={mail}/>
                     </div>
                         <div>
                         <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">ageno</label>
                         <input  min="1" max="99" type="number" value={ageno}  onChange={(e)=>setageno(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                     </div>
                         <div>
                         <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">photo</label>
                         <input type="url" value={photo} onChange={(e)=>setphoto(e.target.value)}   class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                     </div>
                        
                         <div>
                         <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">About</label>
                         <textarea type="text" value={About} onChange={(e)=>setAbout(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                     </div>

        <div>
    <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Skills</label>
    <SelectSkills selectedoptions={selectedoptions} setselectedoptions={setselectedoptions} />
    </div>
                 
                 
                     <button  onClick={(e)=>saveprofile(e)} class="w-full text-white cursor-pointer hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-800">Save Profile</button>
                   
                 </form>

             </div>
         </div>
     </div>

   </section>
  )
}

export default Editprofile