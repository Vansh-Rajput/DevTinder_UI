import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./Feedslice"
import userReducer from "./Userslice"

const Appstore=configureStore({
    reducer:{
       user:userReducer,
       feed:feedReducer,
    },
})

export default Appstore