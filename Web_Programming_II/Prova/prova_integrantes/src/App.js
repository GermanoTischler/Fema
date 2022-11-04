import './App.css';
import foto_perfil from './foto_perfil.jpg';

function App() {


  return (
    <div className="App">

      
      
      <div class="tooltip">
        <img id="img" alt="" title="Germano" src={foto_perfil}/>
      </div>

      <div>

        <header>
          <h1 id='nome'>Germano Roberto Bortolini Tischler</h1>
        </header>

        <footer>
          <p id='p'>Crie um programa para ajudar o amigo marombeiro, deve ter uma tela para cadastrar o exercício <br/>
          (nome do exercício, quantidade de series e repetições) e uma opção para marcar qual ele já concluiu.</p>
        </footer>

      </div>

    </div>
  );
}

export default App;
