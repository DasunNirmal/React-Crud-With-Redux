import {useContext, useState} from "react";
import {Customer} from "../models/Customer.ts";
import {ItemContext} from "../store/ItemProvider.tsx";
import {Item} from "../models/Item.ts";
import {CustomerModal} from "../component/CustomerModal.tsx";
import {ItemModal} from "../component/ItemModal.tsx";
import {CustomerTable} from "../component/CustomerTable.tsx";
import {ItemTable} from "../component/ItemTable.tsx";
import {useDispatch, useSelector} from "react-redux";
import {updateCustomers} from "../reducers/CustomerSlice.ts";

export default function Update() {

    const customers = useSelector(state => state.customer.value)
    const dispatchCustomer = useDispatch();
    const [items, dispatchItem] = useContext(ItemContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [code, setCode] = useState("");
    const [itemName, setItemName] = useState("");
    const [qty, setQty] = useState("");

    function updateCustomer() {
        const customer = new Customer(name, email, phone);
        dispatchCustomer(updateCustomers({ name: customer.name, email: customer.email, phone: customer.phone }));
    }

    function updateItems() {
        const newItem = new Item(code, itemName, Number(qty));
        dispatchItem({type: 'UPDATE_ITEM', payload: newItem});
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

                <CustomerModal handleSubmit={updateCustomer} setName={setName} setEmail={setEmail} setPhone={setPhone} name={name} email={email} phone={phone}>Update Customer</CustomerModal>
                <CustomerTable customers={customers} getTableData={getTableDataCustomers}></CustomerTable>
            </div>

            {/*item section*/}
            <div className="right-card m-3">
                <h2 className="mb-6 p-2 w-fit text-2xl">Update Items</h2>

                <ItemModal handleSubmit={updateItems} setCode={setCode} setItemName={setItemName} setQty={setQty} code={code} itemName={itemName} qty={qty}>Add Item</ItemModal>
                <ItemTable items={items} getTableDataItems={getTableDataItems}></ItemTable>
            </div>
        </div>
    )
}