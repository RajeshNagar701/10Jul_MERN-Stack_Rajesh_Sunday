import { configureStore } from "@reduxjs/toolkit";
import Basic_slice from "../feature/Basic_slice";

export default configureStore({
    reducer:{
        basic:Basic_slice,
    }
})