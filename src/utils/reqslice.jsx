
import { createSlice } from "@reduxjs/toolkit";

const Reqslice=createSlice({
    name:"request",
    initialState:null,

    reducers:{
        addreq:(state,action)=>action.payload
    ,removereq:(state,action)=>{
        const filtered=state.filter((val)=>{
         return val._id.toString()!=action.payload;
        })
        return filtered;
    }
        
    }
})

export const {addreq,removereq}=Reqslice.actions;
export default Reqslice.reducer;