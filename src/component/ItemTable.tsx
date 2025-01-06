import {Item} from "../models/Item.ts";

export function ItemTable(props, children) {
    return (
        <>
            <table className="table-auto border border-gray-300 w-full mt-6">
                <thead>
                <tr>
                    <td>Item Code</td>
                    <td>Item Name</td>
                    <td>Quantity</td>
                </tr>
                </thead>
                <tbody>
                {props.items.map((items: Item) => (
                    <tr key={items.code} onClick={() => {
                        props.getTableDataItems(items)
                    }}>
                        <td>{items.code}</td>
                        <td>{items.itemName}</td>
                        <td>{items.qty}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}