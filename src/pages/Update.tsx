import {useState} from "react";
import {Customer} from "../models/Customer.ts";
import {Item} from "../models/Item.ts";
import {CustomerModal} from "../component/CustomerModal.tsx";
import {ItemModal} from "../component/ItemModal.tsx";
import {CustomerTable} from "../component/CustomerTable.tsx";
import {ItemTable} from "../component/ItemTable.tsx";
import {useDispatch, useSelector} from "react-redux";
import {updateCustomer} from "../reducers/CustomerSlice.ts";
import {updateItem} from "../reducers/ItemSlice.ts";
import {AppDispatch} from "../store/Store.ts";

export default function Update() {

    const dispatchCustomer = useDispatch<AppDispatch>();
    const customers = useSelector((state: { customer: Customer[] }) => state.customer);

    const dispatchItem = useDispatch<AppDispatch>();
    const items = useSelector((state: { item:  Item[] }) => state.item);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [code, setCode] = useState("");
    const [itemName, setItemName] = useState("");
    const [qty, setQty] = useState("");

    function updateCustomers() {
        const customer = new Customer(name, email, phone);
        dispatchCustomer(updateCustomer(customer));
    }

    function updateItems() {
        const item = new Item(code, itemName, Number(qty));
        dispatchItem(updateItem(item));
    }

    function getTableDataCustomers(cell) {
        setName(cell.name);
        setEmail(cell.email);
        setPhone(cell.phone);
    }

    function getTableDataItems(cell) {
        setCode(cell.code);
        setItemName(cell.itemName);
        setQty(cell.qty);
    }

    return (
        <div className="grid grid-cols-2 main-section p-6">
            {/*customer section*/}
            <div className="left-card m-3">
                <h2 className="mb-6 p-2 w-fit text-2xl">Update Customer</h2>

                <CustomerModal handleSubmit={updateCustomers} setName={setName} setEmail={setEmail} setPhone={setPhone} name={name} email={email} phone={phone}>Update Customer</CustomerModal>
                <CustomerTable customers={customers} getTableData={getTableDataCustomers}></CustomerTable>
            </div>

            {/*item section*/}
            <div className="right-card m-3">
                <h2 className="mb-6 p-2 w-fit text-2xl">Update Items</h2>

                <ItemModal handleSubmit={updateItems} setCode={setCode} setItemName={setItemName} setQty={setQty} code={code} itemName={itemName} qty={qty}>Update Item</ItemModal>
                <ItemTable items={items} getTableDataItems={getTableDataItems}></ItemTable>
            </div>
        </div>
    )
}