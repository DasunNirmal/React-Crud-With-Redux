import {Item} from "../models/Item.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

const initialState: Item[] = [];

const api = axios.create({
    baseURL: 'http://localhost:3000/item'
});

export const saveItem = createAsyncThunk(
    'item/saveItem',
    async (item: Item) => {
        try {
            const response = await api.post('/add', item);
            return response.data;
        } catch (error) {
            return console.log('error', error);
        }
    }
);

export const updateItem = createAsyncThunk(
    'item/updateItem',
    async (item: Item) => {
        try {
            const response = await api.put(`/update/${item.code}`, item);
            return response.data;
        } catch (error) {
            return console.log('error', error);
        }
    }
);

export const deleteItem = createAsyncThunk(
    'item/deleteItem',
    async (code: string) => {
        try {
            const response = await api.delete(`/delete/${code}`);
            return response.data;
        } catch (error) {
            return console.log('error', error);
        }
    }
);

export const getItem = createAsyncThunk(
    'item/getItem',
    async () => {
        try {
            const response = await api.get(`/view`);
            return response.data;
        } catch (error) {
            return console.log('error', error);
        }
    }
);

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        saveItems: (state, action: PayloadAction<Item>) => {
            state.push(action.payload);
        },
        updateItems: (state, action: PayloadAction<Item>) => {
            const index = state.findIndex((item) => item.code === action.payload.code);
            if(index > -1) {
                state[index] = action.payload;
            }
        },
        deleteItems: (state, action: PayloadAction<string>) => {
            state = state.filter((item: Item) => item.code !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveItem.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveItem.rejected, (state, action) => {
                console.log('Failed to save Item : ', action.payload);
            })
            .addCase(saveItem.pending, (state, action) => {
                console.log('Pending saving Item : ', action.payload);
            });
        builder
            .addCase(updateItem.fulfilled, (state, action) => {
                state.map((item) => {
                    if (item.code === action.payload.code) {
                        item.code = action.payload.code;
                        item.itemName = action.payload.itemName;
                        item.qty = action.payload.qty;
                    }
                });
            })
            .addCase(updateItem.rejected, (state, action) => {
                console.log('Failed to update Item : ', action.payload);
            })
            .addCase(updateItem.pending, (state, action) => {
                console.log('Pending updating Item : ', action.payload);
            });
        builder
            .addCase(deleteItem.fulfilled, (state, action) => {
                return state.filter((item) => item.code !== action.payload.code);
            })
            .addCase(deleteItem.rejected, (state, a, updateItemsction) => {
                console.log('Failed to delete Item : ', action.payload);
            })
            .addCase(deleteItem.pending, (state, action) => {
                console.log('Pending deleting Item : ', action.payload);
            });
        builder
            .addCase(getItem.fulfilled, (state, action) => {
                action.payload.map((item: Item) => state.push(item));
            })
            .addCase(getItem.rejected, (state, action) => {
                console.log('Failed to get Item : ', action.payload);
            })
            .addCase(getItem.pending, (state, action) => {
                console.log('Pending getting Item : ', action.payload);
            });
    }
})

export const { saveItems,updateItems,deleteItems } = itemSlice.actions;
export default itemSlice.reducer;