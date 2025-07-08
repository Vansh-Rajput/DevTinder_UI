import { createSlice } from "@reduxjs/toolkit";


const Feedslice=createSlice({
    name:"feed",
    initialState:null,

    reducers:{
        addfeed:(state,action)=>action.payload,
        removefeed:()=>null,   
    }
})

export const {addfeed}=Feedslice.actions;
export default Feedslice.reducer;