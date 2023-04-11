import React, { Fragment, useContext } from 'react'
import { NewContext } from '../../context/Context';
import {Box, IconButton, Tooltip, Typography, Button} from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { DarkModeContext } from '../../context/DarkModeContext';
import Footer from "../Footer";
import DarkModeIcon from '@mui/icons-material/DarkMode';





const Layout = () => {
    const {state, dispatch} = useContext(NewContext);
    const navigate = useNavigate();

    const { isModeDark, setIsModeDark } = useContext(DarkModeContext);

  const handleThemeBottom = () => {
    if(isModeDark){
      setIsModeDark(false);
    } else {
      setIsModeDark(true);
    }
    
  }

    return (    
        <Fragment>
            <Box className="Nav" component="header" >
                <img src="/images/logo.png" alt="logo" className="logo" />
                <ul className="UlLayout" >
                    <li onClick={() => navigate("/home")} style= {{cursor: "pointer"}}>Home</li>
                    <li onClick={() => navigate("/contact")} style= {{cursor: "pointer"}}>Contact</li>
                    <li onClick={() => navigate("/favoritos")} style= {{cursor: "pointer"}}>Favoritos</li>
                </ul>
                <Typography variant="body1">{state.user}</Typography>
                <Box>                    
                    <Button onClick={handleThemeBottom}>
                        <DarkModeIcon className="imgperfil" alt="boton modo Dark" sx={{color: "white"}} />
                    </Button>
                </Box>
                <Box>
                    <Tooltip title="Cerrar Sesión">
                        <IconButton onClick={() => dispatch({type: "LOGOUT"})}>
                            <ExitToAppRoundedIcon size={30} sx={{color: "white"}}/>
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
            <Outlet/>
            <Footer/>
        </Fragment>
    )
};

export default Layout

