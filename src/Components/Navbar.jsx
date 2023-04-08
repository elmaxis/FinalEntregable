import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../context/DarkModeContext';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { isModeDark, setIsModeDark } = useContext(DarkModeContext);

  const handleThemeBottom = () => {
    if(isModeDark){
      setIsModeDark(false);
    } else {
      setIsModeDark(true);
    }
    
  }

  return (

    
    <div className={ isModeDark? "dark" : "clasequenoexiste"}>
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favoritos">Favs</Link>

      <button onClick={handleThemeBottom}>Change theme</button>
    </nav>
    </div>
  )
}

export default Navbar