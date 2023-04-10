import React, {createContext, useReducer} from "react";
import {removeFromStorage, addInStorage} from "./helpers";

export const NewContext = createContext({});


const handleDispatch = (state, {type, payload}) => {  //action es como una especie de objeto que tiene una prop que se llama type, la que se cambia a media que cambia el estado
    switch(type) {
        case "LOGGIN":    //el type por convensión va en mayúsucla
            sessionStorage.setItem("token", JSON.stringify("FASDARDSA644"));     //acá es donde va la lógica
            return {
                ...state, //copia del estado es lo primero que debe aparecer
                isLogged: true,
                user: payload
            }
        case "LOGOUT":
                localStorage.clear(); 
                sessionStorage.clear();
                return {
                    ...state,
                    isLogged: false,
                    user: null
                }
        case "FAVS":
               //logica para evitar repetir en favoritos. Verificar si el elemento ya se encuentra en favorito. //para meterlo en favoritos y se conserve, junto a línea 46
                const doesExist = state.data.some(person => person.id === payload.id);
                doesExist ? removeFromStorage(state, payload) : addInStorage(state, payload);
                return doesExist ? {
                    ...state,
                    data: removeFromStorage(state, payload)
                } : {
                    ...state,
                    data: addInStorage(state, payload)
                }
        default:
            return state;
    }
};

const NewContextProvider = ({children}) => {
    const initialState = {
        isLogged: !!sessionStorage.getItem("token"),  // con !! hago el ternario. Si es true, me pasa a false
        user: null,
        data: localStorage.getItem("favoritos") ? JSON.parse(localStorage.getItem("favoritos")) : []  //si no hay nada que me dé el arreglo vacio //hago que al meterlos en favoritos me los siga conservando
    };

//reducer
    const [state, dispatch] = useReducer(handleDispatch, initialState); //devuelve un arreglo
    const propiedades = {      
        state,                  //consumo storage
        dispatch               //funciones
    };

    return(
        <NewContext.Provider value={propiedades}>
            {children}
        </NewContext.Provider>
    )
}


export default NewContextProvider;