import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Customer} from "../models/Customer.ts";

const initialState = {
    value: [] as Customer[],
}
const CustomerSlice = createSlice({
    name: 'customer',
    initialState: initialState,
    reducers: {
        saveCustomers: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload);
        },
        updateCustomers: (state, action: PayloadAction<Customer>) => {
            const index = state.value.findIndex((customer) => customer.email === action.payload.email);
            if (index > -1) {
                state.value[index] = action.payload;
            }
        },
        deleteCustomers: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter((customer: Customer) => customer.email !== action.payload);
        }
    }
})

export const { saveCustomers,updateCustomers,deleteCustomers } = CustomerSlice.actions;
export default CustomerSlice.reducer;
