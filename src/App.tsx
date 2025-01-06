import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Dashboard from "./pages/Dashboard.tsx";
import Save from "./pages/Save.tsx";
import Update from "./pages/Update.tsx";
import Delete from "./pages/Delete.tsx";
import {RootLayout} from "./component/RootLayout.tsx";
import {ItemProvider} from "./store/ItemProvider.tsx";
import {Provider} from "react-redux";
import {store} from "./store/Store.ts";

function App() {
    /*Route is a destination*/

    const routers =  createBrowserRouter([
        {path : '',
            element : <RootLayout/>,
            children:[
                {path : '',element : <Dashboard/>},
                {path : '/add',element:<Save/>},
                {path : '/update',element:<Update/>},
                {path : '/delete',element:<Delete/>}
            ]},
    ])

    {/*Nested Providers >> By nesting the providers (CustomerProvider inside ItemProvider),
    both contexts (CustomerContext and ItemContext) are part of the same React component tree.*/}

    return (
        <>
            <Provider store={store}>
                <ItemProvider>
                    <RouterProvider router={routers} />
                </ItemProvider>
            </Provider>
        </>
    )
}
export default App
