
import { createSlice } from "@reduxjs/toolkit"

const Userslice = createSlice({
    name:'user',
    initialState:null,

    reducers:{
        addUser:(state,action)=>{

          return action.payload;
        },
        removeUser:(state,action)=>{
            return null;
        }
    }
})

// eslint-disable-next-line react-refresh/only-export-components
export const {addUser,removeUser}=Userslice.actions;
export default Userslice.reducer;