import './App.css';
import foto_perfil from './foto_perfil.jpg';

function App() {


  return (
    <div className="App">
      <h1 id='nome'>Germano Roberto Bortolini Tischler</h1>
      <img id="image" src={foto_perfil}/>
      <p id='p'>Crie um programa para ajudar o amigo marombeiro, deve ter uma tela para cadastrar o exercício <br/>
        (nome do exercício, quantidade de series e repetições) e uma opção para marcar qual ele já concluiu.</p>
    </div>
    

  );
}

export default App;
