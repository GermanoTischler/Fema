import React from "react";
import '../Styles/Form.css'

export default function Form() {
    return(
        <form>
            <div>
                <label>Nome do treino</label>
                <input type="text" placeholder="Insira o nome do treino" />
            </div>
            <div>
                <label>Exercício</label>
                <input type="text" placeholder="Insira a descrição do exercício" />
            </div>
            <div>
                <label>Repetições</label>  
                <input type="number" placeholder="Insira a quantidade de repetições" />
            </div>
            <div>
                <label>Séries</label>
                <input type="number" placeholder="Insira a quantidade de séries" />
            </div>

            <div>
                <input type="submit" id="salvar_btn" value="Salvar Treino"/>
            </div>
        </form>
    );
}