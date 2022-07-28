//MÉTODOS

// Estrutura da DOM
// tag, id, class

// //SELECIONANDO OS ELEMENTOS DE UMA PÁGINA
// document.getElementById('titulo');
// document.getElementsByTagName('li');
// document.getElementsByClassName('texto');
// document.querySelectorAll('.primeira-classe .segunda-classe');

// //ADICIONAR E DELETAR
// document.createElement(element);    //cria um novo elemento HTML
// document.removeChild(element);      //remove um elemento
// document.appendChild(element);      //adiciona um elemento
// document.replaceChild(newEold);    //substitui um elemento

//CLASSES
//element.classList
const meuElemento = document.getElementById("meu-elemento")

meuElemento.classList.add("novo-estilo");   //adiciona a classe "meu-estilo"

meuElemento.classList.remove("classe");     //remove a classe "classe"

meuElemento.classList.toggle("dark-mode");  //adiciona a classe "dark-mode" caso não faça parte da lista e remove ela caso faça parte

//CSS
//acessando diretamente o CSS de um elemento
document.getElementById("paragrafo").style.color = "red";

//EVENTOS
//tipos
//eventos de mouse (mouseover, mouseout)
//eventos de clique (click, dbclick)
//eventos de atualização (change, load)

//Event listener
//diretamente no javascipt, cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação

var node = document.getElementById('button');

function mudaTexto(paragrafo) {
    paragrafo.innerHTML = "ESSE É O MEU JEITO NINJA DE SER";

    document.getElementById('foto').src = 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/b6e14db2ac28c22801d8d008aea52f4e87bb2c6f3dc5fbbeb86fbc24bdc5ab72_1.jpg';

    document.getElementById('button').remove('_button')
}