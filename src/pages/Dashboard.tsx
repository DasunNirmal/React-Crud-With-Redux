import {Customer} from "../models/Customer.ts";
import {Item} from "../models/Item.ts";
import {useSelector} from "react-redux";

export default function Dashboard() {
    const customers = useSelector(state => state.customer.value)
    const items = useSelector(state => state.item.value);

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
                            <td>{items.itemName}</td>
                            <td>{items.qty}</td>
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