import {useContext, useState} from "react";
import {ItemContext} from "../store/ItemProvider.tsx";
import './Delete.css'
import {CustomerModal} from "../component/CustomerModal.tsx";
import {ItemModal} from "../component/ItemModal.tsx";
import {CustomerTable} from "../component/CustomerTable.tsx";
import {ItemTable} from "../component/ItemTable.tsx";
import {useDispatch, useSelector} from "react-redux";

export default function Delete() {

    const customers = useSelector(state => state.customer.value)
    const dispatchCustomer = useDispatch();
    const [items, dispatchItem] = useContext(ItemContext);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    function deleteCustomer() {
        dispatchCustomer({type: 'DELETE_CUSTOMER', payload: {email }}); /*object shorthand notation when we use this it is
         equal to {email: email}*/
    }

    function deleteItem() {
        dispatchItem({type: 'DELETE_ITEM', payload: {code }});
    }

    function getTableDataCustomers(cell) {
        setEmail(cell.email);
    }

    function getTableDataItems(cell) {
        setCode(cell.code);
    }

    return (
        <div className="grid grid-cols-2 main-section p-6">

            {/*customer section*/}
            <div className="left-card m-3" id="delete-component">
                <h2 className="mb-6 p-2 w-fit text-2xl">Delete Customer</h2>

                <CustomerModal handleSubmit={deleteCustomer} setName={() => {}} setEmail={setEmail} setPhone={() => {}} name={() => {}} email={email} phone={() => {}}>Delete Customer</CustomerModal>
                <CustomerTable customers={customers} getTableData={getTableDataCustomers}></CustomerTable>
            </div>

            {/*item section*/}
            <div className="right-card m-3" id="delete-component">
                <h2 className="mb-6 p-2 w-fit text-2xl">Update Items</h2>

                <ItemModal handleSubmit={deleteItem} setCode={setCode} setItemName={() => {}} setQty={() => {}} code={code} itemName={() => {}} qty={() => {}}>Delete Item</ItemModal>
                <ItemTable items={items} getTableDataItems={getTableDataItems}></ItemTable>
            </div>
        </div>
    )
}