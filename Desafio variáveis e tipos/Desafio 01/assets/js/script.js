function reverse(s){
    return s.split("").reverse().join("");
}

function inicalizador() {
    var frase = prompt('Digite uma palavra ou frase: ');

    var emBranco = frase.replace(/\s/g, '');

    var minuscula = emBranco.toLowerCase();

    var sss = reverse(minuscula);

	alert(minuscula === sss ? "A palavra/Frase É um palíndromo" : "A palavra/Frase NÃO é um palíndromo");
}

document.getElementById('button').addEventListener('click', inicalizador );

