import React, {useState} from "react";


const Form = () => {
  const [values, setValues] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  //Aqui deberan implementar el form completo con sus validaciones

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim().length < 5) {
      setValues("Por favor verifique su información personal nuevamente");
    } else if (!email.includes("@")){
      setValues("Por favor verifique el E-mail esté correcto");
    } 
    else {
      setValues(
        `Gracias ${nombre}, te contactaremos cuanto antes vía mail`
          
      )    
    }
    }

  return (
    <div>
      <form id='formulario' onSubmit={handleSubmit}>
            <input 
                id='ingresa'
                type={"text"} 
                placeholder={`Ingresa tu Nombre Completo: `} 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)}>
            </input>

            <input 
                id='ingresa'
                type={"text"} 
                placeholder={`Ingresa tu E-mail: `} 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}>
            </input>

            <div>
            <button form='formulario' btn="submit">Enviar</button>
            </div>

            <div>
              {values}
            </div>
        
    
      </form>
    </div>
  );
};

export default Form;

