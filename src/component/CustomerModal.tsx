export function CustomerModal(props, children) {
    return (
        <>
            <input id='name' className="mb-6 p-2" type="text" placeholder="Name"
                   value={props.name}
                   onChange={(e) => props.setName(e.target.value)}/>
            <input id='emial' className="mb-6 p-2" type="text" placeholder="Email"
                   value={props.email}
                   onChange={(e) => props.setEmail(e.target.value)}/>
            <input id='phone' className="mb-6 p-2" type="text" placeholder="Phone Number"
                   value={props.phone}
                   onChange={(e) => props.setPhone(e.target.value)}/>
            <button onClick={props.handleSubmit}>{props.children}</button>
        </>
    );
}