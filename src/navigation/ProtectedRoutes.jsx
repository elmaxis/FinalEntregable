import React, { useContext} from "react";
import { Navigate, Outlet } from 'react-router';
import { NewContext } from "../context/ContextNuevo";


export const ProtectedRoutes = () => {

    const { state } = useContext(NewContext);
    return state.isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes