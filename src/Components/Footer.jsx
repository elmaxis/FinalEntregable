import React, { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext';

const Footer = () => {
  const { isModeDark } = useContext(DarkModeContext);
  return (
    <footer>
        <div className={ isModeDark? "dark" : "clasequenoexiste"}>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo'  style={{width: "100%"}}/>
        </div>
    </footer>
  )
}

export default Footer
