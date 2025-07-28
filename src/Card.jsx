import TinderCard from 'react-tinder-card';
import { useDispatch } from 'react-redux';
import { removefeed } from './utils/Feedslice';
import axios from 'axios';
import { Baseurl } from './utils/constants';
import { useEffect, useState } from 'react';

const Card = ({ feed_data,setover }) => {

  const dispatch = useDispatch();

  const { first_name, last_name, photourl, about, _id , ispremium } = feed_data;

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
      className="absolute cursor-grab"
    >
      <div className="w-[400px] h-min bg-gray-900 border border-gray-700 rounded-lg p-2.5 shadow-xl shadow-gray-800">
        <img className="rounded-lg h-[500px] object-cover pointer-events-none" src={photourl} />
        <div className="p-3 flex flex-col gap-3">
          <h5 className="mb-2 text-2xl font-bold text-white flex items-center justify-between">
            {first_name.toUpperCase()} {last_name.toUpperCase()}
        { ispremium && <img src="/ChatGPT Image Jul 28, 2025, 10_12_54 PM.png" className='w-[50px] h-[50px]'/> }
          </h5>
          <p className="text-gray-400">{about}</p>
        </div>
      </div>
    </TinderCard>
  );
};

export default Card;
