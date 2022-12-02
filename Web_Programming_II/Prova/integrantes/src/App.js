import React from 'react';
import './App.css';
import foto_perfil from './foto_perfil.jpg';
import dumbbells from './dumbbells.png';

function App() {


  return (
    <div className="App">

      <div className="tooltip">
        <img id="img" alt="" title="Germano" src={foto_perfil}/>
      </div>

      <div className="text">

        <header>
          <h1 id='nome'>Germano Roberto<br/>Bortolini Tischler</h1>
        </header>

        <img id="dumbell" alt="" title="Dumbell" src={dumbbells}/>

        <footer>
          <p id='p'>Crie um programa para ajudar o amigo marombeiro, deve ter uma tela para cadastrar o exercício <br/>
          (nome do exercício, quantidade de series e repetições) e uma opção para marcar qual ele já concluiu.</p>
        </footer>

      </div>

    </div>
  );
}

export default App;
