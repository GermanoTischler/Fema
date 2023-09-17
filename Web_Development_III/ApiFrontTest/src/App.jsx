import axios from 'axios';
import './App.css'
import { useState, useEffect } from 'react';

export default function App() {

   const [person, setPerson] = useState({
      name: {
         first: "???" 
      }
   })

   useEffect(() => { handleGet() }, [])
   
   async function handleGet() {

      const data = await axios.get("https://randomuser.me/api/?nat=tr")

      console.log(data);

      setPerson(data.data.results[0])
   }

  return (
      <div style={{display:'grid',justifyContent:'center', marginTop: '100px'}}>
         <br/>
         <br/>
         <button onClick={handleGet}>Request</button>
         <br/>
         <br/>
         <br/>
         <img src={person.picture.large} alt={person.name.first}></img>
         <p>Nome: {person.name.first} {person.name.last}</p>
         <p>Telefone: {person.phone}</p>
         <p>Residência: {person.location.city}, {person.location.state}</p>
      </div>
  )
}
