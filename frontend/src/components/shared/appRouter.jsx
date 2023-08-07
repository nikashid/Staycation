import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { App } from "../../App";
import SignIn from "../authentication/sign-in";
import Register from '../authentication/register';
import Layout from '../home/home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "login",
                element: <SignIn />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "layout",
                element: <Layout />
            },
            {
                path: "",
                element: <SignIn />
            }
        ],

    },
    {
        path: "*",
        element: <div><span>Route not found</span></div>
    }

]);

export default function AppRouter() {
    return <RouterProvider router={router} />
}