import {configureStore} from "@reduxjs/toolkit";
import CustomerSlice from "../reducers/CustomerSlice.ts";

export const store = configureStore({
    reducer: {
        customer: CustomerSlice
    }
});