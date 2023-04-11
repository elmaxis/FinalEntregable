import React, { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext';


const Footer = () => {
  const { isModeDark } = useContext(DarkModeContext);
  const scrollToTop = () => {
    window.scrollTo(0, 0)  }

    return (
      <footer className={isModeDark? "dark" : null}>
        <div className='footer'>
        <button className="top" onClick={scrollToTop}>Volver Arriba</button>
        <div>
          <p>Powered by</p>
          <img className="DhLogo" src="./images/DH.png" alt='DH-logo' />
        </div>
        <div className='icons'>
          <img src="/images/ico-facebook.png" alt="ícone do facebook" className="icon" />
          <img src="/images/ico-instagram.png" alt="ícone do instagram" className="icon"/>
          <img src="/images/ico-whatsapp.png" alt="ícone do whatsapp" className="icon" />
          <img src="/images/ico-tiktok.png" alt="ícone do tiktok" className="icon" />
        </div>
        </div>
      </footer>
    )
 }

export default Footer
