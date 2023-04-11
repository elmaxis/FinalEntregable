import React, {useContext} from "react";
import { NewContext } from "../context/Context";
import FavoriteButton from "./Favorite-Button/FavoriteButton";
import { useNavigate } from "react-router";





const Card = ({ name, username, id }) => {
  const {state, dispatch} = useContext(NewContext)
  const navigate = useNavigate();

const selectItem = () => {
    navigate(`/users/${id}`);
  };

  return (
    <div className="card">
      <div className="darkCard">
      <div onClick={selectItem} style={{cursor: "pointer"}}>
      <img src="./images/doctor.jpg" alt='Doctor' style={{width: "100%"}}/>           
      <p className="nameCard">{name}</p>
      <p className="userName">{username}</p>
        </div>
        <FavoriteButton item={{name, username, id}} />
        </div>
    </div>
  );
};

export default Card;
