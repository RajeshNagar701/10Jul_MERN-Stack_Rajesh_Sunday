import { configureStore } from "@reduxjs/toolkit";
import DataSlice  from "../feature/DataSlice";

export const store=configureStore({
    reducer:{
        data:DataSlice,
    }
})