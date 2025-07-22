import axios from 'axios'
import React, { useState } from 'react'
import { Baseurl } from './utils/constants'

const Premium = () => {

const [subscrip,setsubscrip]=useState(false);

  const verifyuser=async()=>{
    const userpremium=await axios.post(Baseurl+"/payment/verify",{},{withCredentials:true});
    
    if(userpremium?.data?.check)
    setsubscrip(true);
  }


const handleclick=async()=>{
  const call=await axios.post(Baseurl+"/payment/create",{
    
  },{withCredentials:true})

console.log(call);

const {orderId,userId,status,amount,currency,receipt,notes}=call.data.saved;

   const options = {
        key: call?.data?.key_id, // Replace with your Razorpay key_id
        amount:amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: currency,
        name: 'Dev Tinder',
        description: 'Connect to other Users',
        order_id:orderId , // This is the order_id created in the backend
        prefill: {
          ID:userId,
          name: call?.notes?.saved?.firstname + " " + call?.notes?.saved?.lastname,
          email: call?.notes?.saved?.emailId,
        },
        theme: {
          color: '#8B0000'
        },
        handler:{
          verifyuser    //called once payment is done on razorpay dialog box
        }
      };
   
  const rzp = new window.Razorpay(options);   //this will create an object of razorpay and dialog box of RP will pop up
  rzp.open();
}

  return !(subscrip)?(
    <div>
       <div class="relative isolate bg-gray-900 px-6 lg:px-8">
  <div aria-hidden="true" class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
    <div class="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#4333f2] to-[#4b3ff6] opacity-30"></div>
  </div>
  <div class="mx-auto max-w-4xl text-center">
    <h2 class="text-xl font-semibold text-indigo-500">Pricing</h2>
    <p class="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">Choose the right plan for you</p>
  </div>
  <p class="mx-auto mt-3 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
  <div class="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-10 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
    <div class="rounded-3xl rounded-t-3xl bg-gray-100 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-7 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl">
      <h3 id="tier-hobby" class="text-base/7 font-semibold text-indigo-600">Default</h3>
      <p class="mt-4 flex items-baseline gap-x-2">
        <span class="text-5xl font-semibold tracking-tight text-gray-900">Free</span>
      </p>
      <p class="mt-3 text-base/7 text-gray-600">The perfect plan if you&#039;re just getting started with our product.</p>
      <ul role="list" class="mt-4 space-y-3 text-sm/6 text-gray-600 sm:mt-5">
        <li class="flex gap-x-3">
          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="h-6 w-5 flex-none text-indigo-600">
            <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
          </svg>
          20 Requests/day
        </li>
        <li class="flex gap-x-3">
          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="h-6 w-5 flex-none text-indigo-600">
            <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
          </svg>
       Chat with 5 Users/day
        </li>
        <li class="flex gap-x-3">
          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="h-6 w-5 flex-none text-indigo-600">
            <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
          </svg>
          No profile view
        </li>

      </ul>

    </div>
    <div class="relative rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-900/10 ">
      <h3 id="tier-enterprise" class="text-base/7 font-semibold text-indigo-400">Premium</h3>
      <p class="mt-2 flex items-baseline gap-x-2">
        <span class="text-5xl font-semibold tracking-tight text-white">$99</span>
        <span class="text-base text-gray-400">/month</span>
      </p>
      <p class="mt-6 text-base/7 text-gray-300">Dedicated support and infrastructure for your company.</p>
      <ul role="list" class="mt-5 space-y-3 text-sm/6 text-gray-300 ">
        <li class="flex gap-x-3">
          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="h-6 w-5 flex-none text-indigo-400">
            <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
          </svg>
          Unlimited Requests/day
        </li>
        <li class="flex gap-x-3">
          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="h-6 w-5 flex-none text-indigo-400">
            <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
          </svg>
          Unlimited Chatting with Users
        </li>
        <li class="flex gap-x-3">
          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="h-6 w-5 flex-none text-indigo-400">
            <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
          </svg>
          Advanced analytics
        </li>
        <li class="flex gap-x-3">
          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="h-6 w-5 flex-none text-indigo-400">
            <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
          </svg>
          Dedicated support representative
        </li>
        <li class="flex gap-x-3">
          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="h-6 w-5 flex-none text-indigo-400">
            <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
          </svg>
          Marketing automations
        </li>
        <li class="flex gap-x-3">
          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="h-6 w-5 flex-none text-indigo-400">
            <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
          </svg>
          Custom integrations
        </li>
      </ul>
      <button onClick={handleclick} aria-describedby="tier-enterprise" class="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10">Get started today</button>
    </div>
  </div>
</div>

    </div>
  ):"You are already a member"
}

export default Premium