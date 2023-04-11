import React, { useContext } from 'react'
import { Link } from 'react-router-dom'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  

  return (

    
    <div className={ isModeDark? "dark" : "clasequenoexiste"}>

    
    <nav>


      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favoritos">Favs</Link>

      
    </nav>
    </div>
  )
}

export default Navbar