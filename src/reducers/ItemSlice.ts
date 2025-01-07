import {Item} from "../models/Item.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    value: [] as Item[],
}
const itemSlice = createSlice({
    name: 'item',
    initialState: initialState,
    reducers: {
        saveItems: (state, action: PayloadAction<Item>) => {
            state.value.push(action.payload);
        },
        updateItems: (state, action: PayloadAction<Item>) => {
            const index = state.value.findIndex((item) => item.code === action.payload.code);
            if(index > -1) {
                state.value[index] = action.payload;
            }
        },
        deleteItems: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter((item: Item) => item.code !== action.payload);
        }
    }
})

export const { saveItems,updateItems,deleteItems } = itemSlice.actions;
export default itemSlice.reducer;