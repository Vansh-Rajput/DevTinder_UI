
const Connectitems = ({props}) => {

   const {first_name,last_name,email,photourl,about}=props;

  return (
    
<ul class="w-[700px]">
   <li class="pb-3 sm:pb-4 my-6">
      <div class="flex items-center space-x-4 space-y-4 rtl:space-x-reverse border-b-[0.1px] border-gray-700 ">
         <div class="shrink-0">
            <img class="w-10 h-10 rounded-full" src={photourl} alt="Neil image"/>
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium truncate text-white">
              {first_name.toUpperCase() + " " + last_name.toUpperCase()}
            </p>
            <p class="text-sm text-gray-500 truncate my-1.5">
               {email}
            </p>
            <div class="text-sm text-gray-400 truncate">
            {about}
         </div>
         </div>

          <div class="text-sm text-gray-400 truncate">
       
         </div>
         
      </div>
   </li>
</ul>

  )
}

export default Connectitems