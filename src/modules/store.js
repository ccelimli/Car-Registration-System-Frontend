import {configureStore} from "@reduxjs/toolkit"
import userSlice from "../redux/userSlice.js";
import carSlice from "../redux/carSlice.js";

export default configureStore({
    reducer: {
        userReducer: userSlice,
        carReducer: carSlice
    }
})