import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Customer} from "../models/Customer.ts";
import axios from "axios";

const initialState : Customer[] = [];

const api = axios.create({
    baseURL: 'http://localhost:3000/customer'
});

export const saveCustomer = createAsyncThunk(
    'customer/saveCustomer',
    async (customer: Customer) => {
        try {
            const response = await api.post('/add', customer);
            return response.data;
        } catch (error) {
            return console.log('error', error);
        }
    }
);

export const updateCustomer = createAsyncThunk(
    'customer/updateCustomer',
    async (customer: Customer) => {
        try {
            const response = await api.put(`/update/${customer.email}`, customer);
            return response.data;
        } catch (error) {
            return console.log('error', error);
        }
    }
);

export const deleteCustomer = createAsyncThunk(
    'customer/deleteCustomer',
    async (email: string) => {
        try {
            const response = await api.delete(`/delete/${email}`);
            return response.data;
        } catch (error) {
            return console.log('error', error);
        }
    }
);

export const getCustomer = createAsyncThunk(
    'customer/getCustomer',
    async () => {
        try {
            const response = await api.get(`/view`);
            return response.data;
        } catch (error) {
            return console.log('error', error);
        }
    }
);

const CustomerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        saveCustomers: (state, action: PayloadAction<Customer>) => {
            state.push(action.payload);
        },
        updateCustomers: (state, action: PayloadAction<Customer>) => {
            const index = state.findIndex((customer) => customer.email === action.payload.email);
            if (index > -1) {
                state[index] = action.payload;
            }
        },
        deleteCustomers: (state, action: PayloadAction<string>) => {
            state = state.filter((customer: Customer) => customer.email !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveCustomer.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveCustomer.rejected, (state, action) => {
                console.log('Failed to save Customer : ', action.payload);
            })
            .addCase(saveCustomer.pending, (state, action) => {
                console.log('Pending saving Customer : ', action.payload);
            });
        builder
            .addCase(updateCustomer.fulfilled, (state, action) => {
                state.map((customer) => {
                    if (customer.email === action.payload.email) {
                        customer.name = action.payload.name;
                        customer.email = action.payload.email;
                        customer.phone = action.payload.phone;
                    }
                });
            })
            .addCase(updateCustomer.rejected, (state, action) => {
                console.log('Failed to update Customer : ', action.payload);
            })
            .addCase(updateCustomer.pending, (state, action) => {
                console.log('Pending updating Customer : ', action.payload);
            });
        builder
            .addCase(deleteCustomer.fulfilled, (state, action) => {
                return state.filter(customer => customer.email !== action.payload);
            })
            .addCase(deleteCustomer.rejected, (state, action) => {
                console.log('Failed to delete Customer : ', action.payload);
            })
            .addCase(deleteCustomer.pending, (state, action) => {
                console.log('Pending deleting Customer : ', action.payload);
            });
        builder
            .addCase(getCustomer.fulfilled, (state, action) => {
                action.payload.map((customer: Customer) => state.push(customer));
            })
            .addCase(getCustomer.rejected, (state, action) => {
                console.log('Failed to get Customer : ', action.payload);
            })
            .addCase(getCustomer.pending, (state, action) => {
                console.log('Pending getting Customer : ', action.payload);
            });
    }
})

export const { saveCustomers,updateCustomers,deleteCustomers } = CustomerSlice.actions;
export default CustomerSlice.reducer;
