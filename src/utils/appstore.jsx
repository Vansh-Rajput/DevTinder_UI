import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./Feedslice"
import userReducer from "./Userslice"
import connectReducer from "./connectslice"
import requestReducer from "./reqslice"

const Appstore=configureStore({
    reducer:{
       user:userReducer,
       feed:feedReducer,
       connect:connectReducer,
       request:requestReducer,
    },
})

export default Appstore