import React, {useState,useEffect, useContext} from "react";
import Card from "../Components/Card";
import { NewContext } from "../context/Context";






//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Favorites = () => {
  const {state, dispatch} = useContext(NewContext)


  return (
    <>
    <h1 className="titular2">Favoritos</h1>
    <div className="card-grid">

      {
        state.data.map((favorito) => (
              <Card
                key={favorito.id}
                id={favorito.id}
                name={favorito.name}
                username={favorito.username}
              />
            )
          )}
        
    </div>
  </>
    //importar el useContext y la p
  )
}

export default Favorites