import React, {useState, useEffect} from 'react'
import { Box, Button } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import { endpoint } from './Home';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { id } = useParams();
  const [details, setDetails] = useState([]);

  const getDetail = async () => {
    const res = await fetch(`${endpoint}/${id}`);
    const data = await res.json();
    setDetails(data);
  };

  useEffect(() => {
    getDetail();
  }, []);


  return (
    <Box>
      <h1>Detail Dentist id </h1>
      <div className="container">
        <h3 class="codigo">Id</h3>
        <h3 class="Name">Name</h3>
        <h3 class="username">Username</h3>
        <h3 class="email">Email</h3>
        <h3 class="phone">Phone</h3>
        <h3 class="web">Website</h3>

        <p class="pcodigo" >{details.id}</p>
        <p class="pname">{details.name}</p>
        <p class="pusername">{details.username}</p>
        <p class="pemail">{details.email}</p>
        <p class="pphone">{details.phone}</p>
        <p class="pweb">{details.website}</p>      
      </div>
      
      <Button>
        <Link to='/home'>Volver al inicio</Link>
      </Button>

    </Box>  
  )
}

export default Detail





//Sería la Screen UserSelected
//id, name, user, email, phone, website