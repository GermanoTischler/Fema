import style from "./App.module.css";
import { CardPerson } from "../components/CardPerson.jsx";

export function App() {

  const listStack = ['JavaScript', 'HTML', 'CSS', 'Csharp']

  return (
    <div className={style.container}>
      <CardPerson
        cover='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=50'
        avatar='https://github.com/germanotischler.png'
        name='Germano Tischler'
        office='Web Developer'
        stacks={listStack}
        />
    </div>
  );
}
