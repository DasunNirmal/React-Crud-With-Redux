import {Item} from "../models/Item.ts";

export const initialState: Item[] = [];
export function ItemReducer(state:Item[], action:{type:string, payload:Item}) {
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'UPDATE_ITEM':
            return state.map((items:Item) => items.code ===  action.payload.code ?
                {...items, code: action.payload.code,itemName: action.payload.itemName,qty: action.payload.qty} : items);
        case 'DELETE_ITEM':
            return state.filter((item:Item) => item.code !==  action.payload.code);
        default:
            return state;
    }
}