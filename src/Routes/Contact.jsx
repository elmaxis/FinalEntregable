import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='titular'>
      <h2>¿Necesitas saber más?</h2>
      <p>Envíanos tus datos y nos pondremos en contacto con vos. </p>
      <Form/>
    </div>
  )
}

export default Contact