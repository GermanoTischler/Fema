import React from "react";
import style from './Card.module.css';
import { Stack } from "./Stack.jsx";
 
export function Card({cover, avatar, name, office, stacks}) {
   return(
      <div className={style.card}>
        <img
          src={cover}
          alt="Cover"
        />
        <img
          className={style.avatar}
          src={avatar}
          alt="Avatar"
        />
        <p className={style.p1}>{name}</p>
        <p className={style.p2}>{office}</p>
        <div className={style.stack}>

         {stacks.map((stack) => {
            return <Stack key={stack} name={stack} color=''/>
         })}
          
        </div>
      </div>
   )
}
