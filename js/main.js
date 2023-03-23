
const aumentar = document.querySelector('#aumentar');
const diminuir = document.querySelector('#diminuir');
const braco = document.querySelector('#braco');

const listaBotoes = document.querySelectorAll('.controle-ajuste');
const listaPecas = document.querySelectorAll('.controle-contador');

listaBotoes.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent);
    })
})


function manipulaDados(operacao){
    if(operacao === '+'){
        braco.value = parseInt(braco.value) + 1;
    }else{
        braco.value = parseInt(braco.value) - 1;
    }
}



