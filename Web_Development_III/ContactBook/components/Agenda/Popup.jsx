import axios from 'axios';
import style from './Popup.module.css';
import { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { shuffleOutline, closeOutline } from 'ionicons/icons';

export function Popup(props) {

   const btn = (event) => {
      event.preventDefault()
   };

   const [person, setPerson] = useState({
      name: {
         first: "???" 
      }
   })

   useEffect(() => { handleGet() }, [])
   
   async function handleGet() {

      const data = await axios.get("https://randomuser.me/api/?nat=tr")

      setPerson(data.data.results[0])
   }

   const name = () => {
      first = person.name.first
      last = person.name.last
      fullName = `${first} ${last}`
      return fullName
   }

   return (props.trigger) ? (
      <form className={style.container}>
         <div className={style.header}>
            <h2 id='h'>Adicionar contato</h2>
            <button id='edit' onClick={handleGet}><IonIcon icon={shuffleOutline} className={style.icons} /></button>
            <button id='edit' ><IonIcon icon={closeOutline} className={style.icons} /></button>
         </div>

         <label htmlFor="name">
            <strong>Nome</strong>
         </label>

         <input type="text" id="name" placeholder="Nome" name="name" autoComplete='off' maxLength={20} />
         
         <label htmlFor="phone">
            <strong>Número</strong>
         </label>

         <input type="tel"  placeholder="Número" name="phone" autoComplete='off' maxLength={20} />

         <button type="submit" onClick={btn}>Adicionar</button>
      </form>
   ) : '';
}