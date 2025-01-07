import {configureStore} from "@reduxjs/toolkit";
import CustomerSlice from "../reducers/CustomerSlice.ts";
import itemSlice from "../reducers/ItemSlice.ts";

export const store = configureStore({
    reducer: {
        customer: CustomerSlice,
        item: itemSlice
    }
});