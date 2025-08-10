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
      className="absolute "
    >
      <div className="w-[400px] h-min bg-gray-900 border border-gray-700 rounded-lg p-2.5 shadow-xl shadow-gray-800">
        <img className="rounded-lg h-[460px] w-[400px] object-cover pointer-events-none" src={photourl} />
        <div className="p-3 flex flex-col">
          <h5 className="mb-3 text-2xl font-bold text-white flex items-center justify-between">
            {first_name.toUpperCase()} {last_name.toUpperCase()}
          
     { ispremium && <img src="/ChatGPT Image Jul 28, 2025, 10_12_54 PM.png" className='w-[50px] h-[50px]'/> }
          </h5>

          <div className="w-[50%] bg-gray-700 h-1 rounded-full">
  <div
    className="bg-blue-500 h-1 rounded-full"
        style={{ width: `${score}%` }}
  />
</div>
<p className="text-xs text-gray-300">{Math.ceil(score)}% skill match</p>

          <p className="text-gray-400 mt-3 mb-1">{about}</p>


    <div className="flex flex-wrap gap-2">
  {skills.map((skill, idx) => (
    <span
      key={idx}
      className="bg-gray-800 text-blue-400 text-xs font-medium px-2 py-1 rounded-full border border-blue-700"
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
