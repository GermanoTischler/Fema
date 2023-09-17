    
    var lista = document.querySelector('ul');
    var produto = document.querySelector('#produto');
    var botao = document.querySelector('#btn');

    botao.addEventListener('click', addProduto);

    produto.addEventListener('keyup', function(e){
            if(e.keyCode === 13){
                addProduto()
            }
        })

    function addProduto() {
        if(document.getElementById("produto") !== null) {
        var item = '<label type="checkbox"><input type="checkbox">' + produto.value + '</label></br>';
        lista.innerHTML += item;
        produto.value = '';
        produto.focus();
        } else {
            alert('Preencha o campo!');
        }
    }

    //localStorage.setItem('itens', JSON.stringify(lista));
    
    //function inicializar() {
        //lista = JSON.parse(localStorage.getItem('itens'));
    //}