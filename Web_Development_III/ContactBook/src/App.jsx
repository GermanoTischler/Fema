import style from "./App.module.css";
import { Card } from "../components/Avatar/Card.jsx";
import { Main } from "../components/Agenda/Main";
import { Popup } from "../components/Agenda/Popup";

export function App() {

   const listStack = ['JavaScript', 'HTML', 'CSS', 'C#']

   return (
      <div className={style.container}>
         
         <Card
            cover='../assets/cover.png'
            avatar='../assets/avatar.jpeg'
            name='Germano Tischler'
            office='Web Developer'
            stacks={listStack}
         />
        
         <Main />
         
      </div>
  );
}
