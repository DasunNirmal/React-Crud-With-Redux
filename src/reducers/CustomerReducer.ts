import {Customer} from "../models/Customer.ts";

export const initialState: Customer[] = [];
export function CustomerReducer(state:Customer[], action:{type:string, payload:Customer}) {
    switch(action.type){
        case 'ADD_CUSTOMER':
            return [...state, action.payload];
        case 'UPDATE_CUSTOMER':
            return state.map((customers:Customer) => customers.email === action.payload.email ?
                {...customers, name:action.payload.name,email:action.payload.email,phone:action.payload.phone} : customers);
        case 'DELETE_CUSTOMER':
            return state.filter((customer: Customer) => customer.email !== action.payload.email);
        default:
            return state;
    }
}