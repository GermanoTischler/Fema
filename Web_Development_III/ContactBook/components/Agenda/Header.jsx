import React from 'react';
import style from './Header.module.css';
import { IonIcon } from '@ionic/react';
import { add, pencil, trash, search } from 'ionicons/icons';
import { Popup } from './Popup';

export function Header() {

   const Search = (event) => {
      console.log('Search');
      event.preventDefault()
   };

   const Edit = () => {
      console.log('Edit');
   };

   const Delete = () => {
      console.log('Delete');
   };
   
   const Add = () => {
      console.log('Add');
   };

   return (
      <div className={style.container}>
         <div className={style.nav}>
            <div>
               <p className={style.title}>Meus contatos</p>
            </div>
            <div>
               <Popup trigger={true} />
               <button id='add' onClick={Add} className={style.add}><IonIcon icon={add} className={style.icons} /></button>
               <button id='edit' onClick={Edit}><IonIcon icon={pencil} className={style.icons} /></button>
               <button id='delete' onClick={Delete}><IonIcon icon={trash} className={style.icons} /></button>
            </div>
         </div>

         <form type='submit' className={style.search_bar}>
            <button onClick={Search} className={style.btn_lupa}><IonIcon icon={search} className={style.lupa} /></button>
            <input id='input' type='search' autoComplete='off' placeholder='Busque por nome ou por dados de contato...' />
         </form>
      </div>
   )
};