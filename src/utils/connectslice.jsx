import { createSlice } from "@reduxjs/toolkit";

const Connectslice=createSlice({
    name:"connect",
    initialState:null,

    reducers:{
        addconnections:(state,action)=>action.payload
    ,removeconnections:()=>null
        
    }
})

export const {addconnections}=Connectslice.actions;
export default Connectslice.reducer;