import { useState } from "react";
import { useSelector } from "react-redux"
import Editprofile from "./Editprofile";


const Profile = () => {
  

       const selector=useSelector(store=>store?.user);

      return(
         (selector && <Editprofile select={selector}/>)   //in this way we will first let selector filled with data
      )

      //problem is we have used state var in edit profile, and even if we re render after data came to our 
      //selector, still there would be initial data(no data) in our fields, as once state var are initialized
      // they could be changed only by set(), re rendering again wont set the val again to initial 
}

export default Profile