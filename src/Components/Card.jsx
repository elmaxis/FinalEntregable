import React from "react";
import FavoriteButton from "./Favorite-Button/FavoriteButton";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <p>{id}</p>
      <p>{name}</p>
      <p>{username}</p>
      <img src="./images/doctor.jpg" alt='Doctor' style={{width: "100%"}}/>
      
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
        <FavoriteButton/>
    </div>
  );
};

export default Card;
