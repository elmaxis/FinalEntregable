
import Login from "../Routes/Login";
import Home from "../Routes/Home";
import Favorites from "../Routes/Favorites";
import Contact from "../Routes/Contact";
import Detail from "../Routes/Detail"
import Layout from "../Components/Layout/Layout";



export const rutas = [
    {
        id: 1,
        path: "/home",
        Component: Home,
    },
    {
        id: 2,
        path: "/favoritos",
        Component: Favorites
    },
    {
        id: 3,
        path: "/contact",
        Component: Contact
    },
    {
        id: 4,
        path: "/users/:id",
        Component: Detail
    }

];

export {Login, Layout};