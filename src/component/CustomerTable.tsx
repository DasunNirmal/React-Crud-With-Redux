import {Customer} from "../models/Customer.ts";

export function CustomerTable(props,children) {
    return (
        <>
            <table className="table-auto border border-gray-300 w-full mt-6">
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>phone</td>
                </tr>
                </thead>
                <tbody>
                {props.customers.map((customer: Customer) => (
                    <tr key={customer.email} onClick={() => {
                        props.getTableData(customer)
                    }}>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}