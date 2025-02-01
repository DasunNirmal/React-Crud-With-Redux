import {Customer} from "../models/Customer.ts";

export function CustomerTable(props) {
    return (
        <>
            <table className="table-auto border border-gray-300 w-full mt-6">
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                </thead>
                <tbody>
                {props.customers.map((customer: Customer,index: number) => (
                    <tr key={index} onClick={() => {
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