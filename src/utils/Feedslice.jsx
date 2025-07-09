import { createSlice } from "@reduxjs/toolkit";


const Feedslice=createSlice({
    name:"feed",
    initialState:null,

    reducers:{
        addfeed:(state,action)=>action.payload,
        removefeed:(state,action)=>{
          return state.filter((val)=>val?._id.toString()!=action.payload);
        },   
    }
})

export const {addfeed,removefeed}=Feedslice.actions;
export default Feedslice.reducer;