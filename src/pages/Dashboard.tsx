import {Customer} from "../models/Customer.ts";
import {Item} from "../models/Item.ts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCustomer} from "../reducers/CustomerSlice.ts";
import {AppDispatch} from "../store/Store.ts";
import {getItem} from "../reducers/ItemSlice.ts";

export default function Dashboard() {
    const customers = useSelector((state: { customer: Customer[] }) => state.customer);
    const dispatchCustomer = useDispatch<AppDispatch>();
    const items = useSelector((state: { item:  Item[] }) => state.item);
    const dispatchItem = useDispatch<AppDispatch>();

    useEffect(() => {
        if (customers.length === 0) {
            dispatchCustomer(getCustomer());
        }
    }, [dispatchCustomer, customers.length]);

    useEffect(() => {
        if (items.length === 0) {
            dispatchItem(getItem());
        }
    },[dispatchItem, items.length]);

    return (
        <div className="grid grid-cols-2 main-section p-6">

            {/*customer section*/}
            <div className="left-card m-3">
                <h2 className="mb-6 p-2 w-fit text-2xl">Customers</h2>
                <table className="table-auto border border-gray-300 w-full mt-6">
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>phone</td>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer: Customer) => (
                        <tr key={customer.email}>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/*item section*/}
            <div className="right-card m-3">
                <h2 className="mb-6 p-2 w-fit text-2xl">Items</h2>

                <table className="table-auto border border-gray-300 w-full mt-6">
                    <thead>
                    <tr>
                        <td>Item Code</td>
                        <td>Item Name</td>
                        <td>Quantity</td>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((items: Item) => (
                        <tr key={items.code}>
                            <td>{items.code}</td>
                            <td>{items.name}</td>
                            <td>{items.quantity}</td>
                        </tr>
                    ))}
                    <tr>

                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}