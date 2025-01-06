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
        },
        update: (state, action: PayloadAction<Customer>) => {
            const index = state.value.findIndex((customer) => customer.email === action.payload.email);
            if (index > -1) {
                state.value[index] = action.payload;
            }
        }
    }
})

export const { save,update } = CustomerSlice.actions;
export default CustomerSlice.reducer;
