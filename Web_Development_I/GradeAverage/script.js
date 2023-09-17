// Comentário //

var table = document.querySelector('table');
var nome = document.querySelector('#nome');
var nota1 = document.querySelector('#nota1');
var nota2 = document.querySelector('#nota2');
var botao = document.querySelector('#btn');

botao.addEventListener('click', function(){
    let n1 = parseInt(nota1.value);
    let n2 = parseInt(nota2.value);
    let itens = 
        `<tr>
            <td>${nome.value}</td>
            <td>${n1}</td>
            <td>${n2}</td>
            <td>${((n1 + n2) / 2)}</td>
        </tr>`;
    table.innerHTML += itens;
    nome.value = '';
    n1 = '';
    n2 = '';

    document.querySelector('#nome').value = null;
    document.querySelector('#nota1').value = null;
    document.querySelector('#nota2').value = null;
})

