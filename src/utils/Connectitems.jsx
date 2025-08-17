
import {Link } from 'react-router-dom'


const Connectitems = ({props}) => {

   const {first_name,last_name,email,photourl,about,_id}=props;

  return (
    
<ul class="md:w-[900px] w-screen">
   <li class="sm:pb-4 my-6">
      <div class="mx-5 flex items-center space-x-4 space-y-4 rtl:space-x-reverse border-b-[0.1px] border-gray-700 ">
         <div class="shrink-0">
            <img class="w-10 h-10 rounded-full" src={photourl} alt="Neil image"/>
         </div>

         <div class="flex-1 min-w-0">
            <p class="text-xs md:text-sm font-medium truncate text-white">
              {first_name.toUpperCase() + " " + last_name.toUpperCase()}
            </p>
            <p class="text-xs md:text-sm text-gray-500 truncate my-0.5 md:my-1.5">
               {email}
            </p>
            <div class="text-xs md:text-sm  text-gray-400 truncate">
            {about}
         </div>
         </div>

   
   <Link to={"/main/chat/" + _id.toString()}>
          <div class="text-sm text-gray-300 truncate hover:text-white">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>
         </div>
      </Link>

         
      </div>
   </li>
</ul>

  )
}

export default Connectitems