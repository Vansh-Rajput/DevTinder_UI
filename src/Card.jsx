import TinderCard from 'react-tinder-card';
import { useDispatch } from 'react-redux';
import { removefeed } from './utils/Feedslice';
import axios from 'axios';
import { Baseurl } from './utils/constants';


const Card = ({ feed_data,setover }) => {

  const dispatch = useDispatch();

  const { first_name, last_name, photourl, about, _id , ispremium, skills, score } = feed_data;

  const handleSwipe = async (direction) => {
    if (direction === 'left') {
     const res = await axios.post(`${Baseurl}/request/send/ignored/${_id}`, {}, { withCredentials: true });
      (!(res?.data?.message))?setover(true):dispatch(removefeed(_id));
    } 
    else if (direction === 'right') {
     const res2= await axios.post(`${Baseurl}/request/send/interested/${_id}`, {}, { withCredentials: true });
      (!(res2?.data?.message))?setover(true):dispatch(removefeed(_id));
    }
  };


  return (
   <TinderCard
         //work evenif swipe was slow
      onSwipe={(direction)=>handleSwipe(direction,_id)} //inbuilt
      preventSwipe={['up', 'down']}
      className="absolute select-none touch-pan-y cursor-grab active:cursor-grabbing"
    >
      <div className="w-[calc(100vw-2rem)] max-w-[25rem] overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 p-2 shadow-2xl shadow-black/35 sm:w-[22rem] md:w-[25rem]">
        <img alt='cards' fetchPriority='high' className="h-[min(58vh,22rem)] w-full rounded-xl object-cover object-center pointer-events-none sm:h-[min(60vh,25rem)] md:h-[27rem]" src={photourl} />
        <div className="flex flex-col p-4 sm:p-5">
          <h5 className="mb-4 flex items-center justify-between gap-3 break-words text-xl font-bold tracking-tight text-white sm:text-2xl">
            {first_name.toUpperCase()} {last_name.toUpperCase()}
          
     { ispremium && <img alt='premium' src="/ChatGPT Image Jul 28, 2025, 10_12_54 PM.webp" className='h-10 w-10 shrink-0 rounded-lg object-cover sm:h-12 sm:w-12'/> }
          </h5>

          <div className="h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-slate-700">
  <div
    className="h-full rounded-full bg-blue-500"
        style={{ width: `${score}%` }}
  />
</div>
<p className="mt-1.5 text-xs font-medium text-slate-300">{Math.ceil(score)}% skill match</p>

          <p className="mt-3 mb-4 text-sm leading-6 text-slate-300 sm:text-[15px]">{about}</p>


    <div className="flex flex-wrap gap-2">
  {skills.map((skill, idx) => (
    <span
      key={idx}
      className="rounded-full border border-blue-400/35 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-200"
    >
      {skill}
    </span>

  ))}
</div>

        </div>
      </div>
    </TinderCard>
  );
};

export default Card;

