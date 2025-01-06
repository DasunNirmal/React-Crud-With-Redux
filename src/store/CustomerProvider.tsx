// import {createContext, useReducer} from "react";
// import {CustomerReducer, initialState} from "../reducers/CustomerReducer.ts";
//
// export const CustomerContext = createContext();
//
// export function CustomerProvider({children}) {
//     const [customer, dispatch] = useReducer(CustomerReducer, initialState);
//
//     return (
//         <CustomerContext.Provider value={[customer, dispatch]}>
//             {children}
//         </CustomerContext.Provider>
//     )
// }