import React, {useContext} from "react";
import { NewContext } from "../context/Context";
import FavoriteButton from "./Favorite-Button/FavoriteButton";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";





const Card = ({ name, username, id }) => {
  const {state, dispatch} = useContext(NewContext)
  const navigate = useNavigate();

const selectItem = () => {
    navigate(`/users/${id}`);
  };

  return (
    <div className="card">
      <div onClick={selectItem} style={{cursor: "pointer"}}>
      <p>{id}</p>
      <p className="nameCard">{name}</p>
      <p className="userName">{username}</p>
      <img src="./images/doctor.jpg" alt='Doctor' style={{width: "100%"}}/>           
        </div>
        <FavoriteButton item={{name, username, id}} />
        
    </div>
  );
};

export default Card;
