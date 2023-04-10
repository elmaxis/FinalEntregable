import React, { useState, useContext } from 'react'
import { Box, Button, TextField } from '@mui/material';
import { NewContext } from '../context/Context';
import { useNavigate } from "react-router-dom";
import "../Style/Style.css"

const Login = () => {
    const [values, setValues] = useState({email: "", password: ""});    
    const {dispatch} = useContext(NewContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.email){
            dispatch({type: "LOGGIN", payload: values.email});
            navigate("/home");        
        }
    }

    return (
        
        <Box 
            className="Plogin"
            component="form" 
            // sx={{display: "flex", flexDirection: "column", gap: "20px", width: "20vw"}}
            onSubmit={handleSubmit}
        >   
        <Box className="d">
            <h2>Inicio de Sesión</h2>
            <TextField
                className='celda'
                name='email'
                size='small'
                type="text"
                label="E-mail"
                placeholder='Ingrese su e-mail'
                value={values.email}
                onChange={(e) => setValues({...values, email: e.target.value})}
            />
            <TextField 
                className='celda'
                name='password'
                size='small'
                type="password"
                label="Password"
                placeholder='Ingrese su contraseña'
                value={values.password}
                onChange={(e) => setValues({...values, password: e.target.value})}
            />
            <Button  className='campologin' type="submit" size="small" variant="contained">
                Ingresar
            </Button>
            </Box>

        </Box>
    )
}

export default Login







// material ui : https://mui.com/material-ui/getting-started/installation/
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/material @mui/styled-engine-sc styled-components
// npm install @mui/icons-material

