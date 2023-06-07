import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [id, setId] = useState();
  const [descricao, setDescricao] = useState('');
  const [listaTarefa, setListaTarefa] = useState([]);

  useEffect(() => {
    buscar();
  }, []);

  function buscar() {
    axios.get('http://localhost:3100/tarefa').then(resultado => {
      console.log(resultado.data);
      setListaTarefa(resultado.data);
    })
  }

  function salvar(event) {
    event.preventDefault();

    let tarefa = {
      id: id,
      descricao: descricao
    };

    axios.put('http://localhost:3100/tarefa', tarefa).then(() => {
      buscar();

      setId();
      setDescricao('');
    });
  }

  function excluir (tarefa) {
    axios.delete(`http://localhost:3100/tarefa/${tarefa.id}`).then((result) => {
      buscar();
    })
  }

  function editar (tarefa) {
    axios.get(`http://localhost:3100/tarefa/${tarefa.id}`).then((result) => {
      setId(result.data.id);
      setDescricao(result.data.descricao);
    })
  }

  return (
    <div className='container'>

      <form onSubmit={(event) => salvar(event)}>
        <div className="mb-3">
          <label className="form-label">Descrição</label>
          <input type="text" className="form-control" value={descricao} onChange={(event) => setDescricao(event.target.value)}/>
        </div>

        <button type='submit' className='btn btn-primary'>Salvar</button>

      </form>

      <h3>Lista de Tarefa</h3>

      <table className='table'>
        <thead>
          <tr>
            <td>Tarefa</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {
            listaTarefa.map((tarefa, index) => (
              <tr key={index}>
                <td>{tarefa.descricao}</td>
                <td>
                  <button type='button' className='edit' onClick={(event) => editar(tarefa)}> Editar </button>
                  <button type='button' className='del' onClick={(event) => excluir(tarefa)}> Excluir </button>
                </td>
              </tr>
            ))
          }
        
        </tbody>
      </table>
    </div>
  );
}

export default App;
