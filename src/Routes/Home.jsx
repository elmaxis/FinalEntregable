import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
export const endpoint = "https://jsonplaceholder.typicode.com/users";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [details, setDetails] = useState([]);

  const getDetail = async () => {
    const res = await fetch(endpoint);
    const data = await res.json();
    console.log(data);
    setDetails(data);
    };

  useEffect(() => {
    getDetail();
  }, []);

return (
  <main className="">
    <h1 className='titular2'>Home</h1>
    <div className="card-grid">
      {details.length
        ? details.map((detail) =>
          <Card 
                key={detail.id} 
                name={detail.name} 
                username={detail.username} 
                id={detail.id}          
                />
                
                )
                : null
                
              }
              
    </div>
  </main>
  )
}

export default Home


