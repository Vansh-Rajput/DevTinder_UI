import { useEffect, useState } from 'react';
import { Baseurl } from './utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/Userslice';
import Cardprofile from './utils/Cardprofile';
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
    <section className="flex px-4 mt-10">
  <div className="flex justify-around items-center w-screen px-4 py-8 lg:py-0">

    <div className="w-full rounded-lg shadow md:max-w-2xl xl:p-0 bg-gray-950">

      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
          Profile
        </h1>

        <form className="space-y-4 md:space-y-6 w-full" action="#">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">
              First Name
            </label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
              className="border border-gray-600 rounded-lg block w-full p-2.5 bg-gray-800 placeholder-gray-400 text-gray-200"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">
              Last Name
            </label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
              className="border border-gray-600 rounded-lg block w-full p-2.5 bg-gray-800 placeholder-gray-400 text-gray-200"
            />
          </div>


          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">
              Age
            </label>
            <input
              min="1"
              max="99"
              type="number"
              value={ageno}
              onChange={(e) => setageno(e.target.value)}
              className="border border-gray-600 rounded-lg block w-full p-2.5 bg-gray-800 placeholder-gray-400 text-gray-200"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">
              Photo
            </label>
            <input
              type="url"
              value={photo}
              onChange={(e) => setphoto(e.target.value)}
              className="border border-gray-600 rounded-lg block w-full p-2.5 bg-gray-800 placeholder-gray-400 text-gray-200"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">
              About
            </label>
            <textarea
              value={About}
              onChange={(e) => setAbout(e.target.value)}
              className="border border-gray-600 rounded-lg block w-full p-2.5 bg-gray-800 placeholder-gray-400 text-gray-200"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">
              Skills
            </label>
            <SelectSkills
              selectedoptions={selectedoptions}
              setselectedoptions={setselectedoptions}
            />
          </div>

          <button
            onClick={(e) => saveprofile(e)}
            className="w-full text-white cursor-pointer hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-800"
          >
            Save Profile
          </button>

            </form>
                  </div>

                 </div>

                 <Cardprofile photo={photo}/>
           </div>

</section>

  )
}

export default Editprofile