import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Customer} from "../models/Customer.ts";

const initialState = {
    value: [] as Customer[]
}
const CustomerSlice = createSlice({
    name: 'customer',
    initialState: initialState,
    reducers: {
        save: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload);
        }
    }
})

export const { save } = CustomerSlice.actions;
export default CustomerSlice.reducer;