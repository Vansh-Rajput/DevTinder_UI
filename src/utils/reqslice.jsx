
import { createSlice } from "@reduxjs/toolkit";

const Reqslice=createSlice({
    name:"request",
    initialState:null,

    reducers:{
        addreq:(state,action)=>action.payload
    ,removereq:(state,action)=>null
        
    }
})

export const {addreq,removereq}=Reqslice.actions;
export default Reqslice.reducer;