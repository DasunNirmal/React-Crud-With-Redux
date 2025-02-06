import {useEffect, useState} from "react";
import './Delete.css'
import {CustomerModal} from "../component/CustomerModal.tsx";
import {ItemModal} from "../component/ItemModal.tsx";
import {CustomerTable} from "../component/CustomerTable.tsx";
import {ItemTable} from "../component/ItemTable.tsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteCustomer, getCustomer} from "../reducers/CustomerSlice.ts";
import {deleteItem, getItem} from "../reducers/ItemSlice.ts";
import {AppDispatch} from "../store/Store.ts";
import {Customer} from "../models/Customer.ts";
import {Item} from "../models/Item.ts";

export default function Delete() {

    const dispatchCustomer = useDispatch<AppDispatch>();
    const customers = useSelector((state: { customer: Customer[] }) => state.customer);

    const dispatchItem = useDispatch<AppDispatch>();
    const items = useSelector((state: { item:  Item[] }) => state.item);

    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    useEffect(() => {
        if (customers.length === 0) {
            dispatchCustomer(getCustomer());
        }
    },[dispatchCustomer, customers.length]);

    useEffect(() => {
        if (items.length === 0) {
            dispatchItem(getItem());
        }
    },[dispatchItem, items.length]);

    const deleteCustomers = async () => {
        try {
            await dispatchCustomer(deleteCustomer(email));
            dispatchCustomer(getCustomer());
        } catch (e) {
            console.error("Failed to delete customer:", e);
        }
    };

    const deleteItems = async () => {
        try {
            await dispatchItem(deleteItem(code));
            dispatchItem(getItem());
        }
        catch (e) {
            console.error("Failed to delete item:", e);
        }
    };

    function getTableDataCustomers(cell: Customer) {
        setEmail(cell.email);
    }

    function getTableDataItems(cell: Item) {
        setCode(cell.code);
    }

    return (
        <div className="grid grid-cols-2 main-section p-6">

            {/*customer section*/}
            <div className="left-card m-3" id="delete-component">
                <h2 className="mb-6 p-2 w-fit text-2xl">Delete Customer</h2>

                <CustomerModal handleSubmit={deleteCustomers} setEmail={setEmail} setName={""} email={email} setPhone={""}>Delete Customer</CustomerModal>
                <CustomerTable customers={customers} getTableData={getTableDataCustomers}></CustomerTable>
            </div>

            {/*item section*/}
            <div className="right-card m-3" id="delete-component">
                <h2 className="mb-6 p-2 w-fit text-2xl">Update Items</h2>

                <ItemModal handleSubmit={deleteItems} setCode={setCode} setItemName={""} setQty={""} code={code}>Delete Item</ItemModal>
                <ItemTable items={items} getTableDataItems={getTableDataItems}></ItemTable>
            </div>
        </div>
    )
}