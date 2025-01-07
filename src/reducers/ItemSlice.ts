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
        }
    }
})

export const { saveItems } = itemSlice.actions;
export default itemSlice.reducer;