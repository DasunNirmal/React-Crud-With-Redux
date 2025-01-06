import {Link, useLocation} from "react-router";
import "./Navigation.css";

export function Navigation() {

    const {pathname} = useLocation();
    let subpage = pathname.split("/")?.[1];

    function activePage(type: string | null = null) {
        if (subpage === '') {
            subpage = 'dashboard';
        }
        let className = ' custom-link';
        if (type === subpage) {
            className += " bg-blue-700";
        } else {
            className += " custom-link";
        }
        return className;
    }
    
    return (
        <div className="px-3 py-2 h-20 bg-sky-950 flex items-center">
            <header className="px-4 py-3">
                <nav className="flex space-x-4 justify-center">
                    <ul className="flex space-x-4 text-white">
                        <li><Link className={activePage('dashboard')} to={''}>Dashboard</Link></li>
                        <li><Link className={activePage('add')} to={'/add'}>Save</Link></li>
                        <li><Link className={activePage('update')} to={'/update'}>Update</Link></li>
                        <li><Link className={activePage('delete')} to={'/delete'}>Delete</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
