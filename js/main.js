
const listaBotoes = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const robotron = document.querySelector('[data-robotron]');
let i = -1; 

const cores = [
    'amarelo', 'azul', 'branco','preto','rosa','vermelho'
]

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

function manipulaDados(operacao, controle){
    const peca = controle.querySelector('[data-contador]');
    if(operacao === '+'){
        peca.value = parseInt(peca.value) + 1;
    }else{
        peca.value = parseInt(peca.value) - 1;
    }
}

function atualizaEstatisticas(operacao, peca){
    estatisticas.forEach((elemento) => {
        if(operacao === '+'){
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        }else{
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        }   
    })
}

listaBotoes.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.controle, evento.target.dataset.peca);
    })
})

robotron.addEventListener('click', () => {
        if(i >= cores.length - 1){
            i = -1;
        }
        i++;
        robotron.setAttribute('src',`./img/robotron_${cores[i]}.png`);
    })
