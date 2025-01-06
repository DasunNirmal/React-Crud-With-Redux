import {createContext, useReducer, useState} from "react";
import {initialState, ItemReducer} from "../reducers/ItemReducer.ts";

export const ItemContext = createContext();

export function ItemProvider({children}) {
    const [item, dispatch] = useReducer(ItemReducer, initialState);

    return (
        <ItemContext.Provider value={[item, dispatch]}>
            {children}
        </ItemContext.Provider>
    );
}