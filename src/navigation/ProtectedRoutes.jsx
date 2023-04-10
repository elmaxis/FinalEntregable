import React, { useContext} from "react";
import { Navigate, Outlet } from 'react-router';
import { NewContext } from "../context/Context";


export const ProtectedRoutes = () => {

    const { state } = useContext(NewContext);
    return state.isLogged ? <Outlet /> : <Navigate to="/login" />;
};

