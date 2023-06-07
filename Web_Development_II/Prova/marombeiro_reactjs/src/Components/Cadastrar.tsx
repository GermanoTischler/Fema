import React from 'react';
import '../Styles/Cadastrar.css';

export function Cadastrar() {
    //localStorage.setItem('itens', JSON.stringify(lista));
    
    //function inicializar() {
        //lista = JSON.parse(localStorage.getItem('itens'));
    //}


    return (
        <div className='cadastro'>
            <h1>Cadastrar Treino</h1>

            <form>
                <div>
                    <label>Nome do treino</label>
                    <input type="text" id="treino" placeholder="Insira o nome do treino" />
                </div>
                <div>
                    <label>Exercício</label>
                    <input type="text" id="exercicio" placeholder="Insira a descrição do exercício" />
                </div>
                <div>
                    <label>Repetições</label>  
                    <input type="number" id="repeticao" placeholder="Insira a quantidade de repetições" />
                </div>
                <div>
                    <label>Séries</label>
                    <input type="number" id="serie" placeholder="Insira a quantidade de séries" />
                </div>

                <div>
                    <input type="submit" id="salvar_btn" value="Salvar Treino"/>
                </div>
            </form>
        </div>
    );
}