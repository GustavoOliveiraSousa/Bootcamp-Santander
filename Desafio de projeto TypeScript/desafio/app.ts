// npm install tsc-watch --save-dev
// não ative a configuração outdir no package.json (senão o tsc watch não funciona)
// npm run "algum script do package.json(voce pode criar) eu configurei o "watch": "tsc --watch" e o "start": "lite-server",
//tsc --init    - para iniciar o tradutor(cria o arquivo tsconfig.json)
let buttonTeste = document.getElementById("button");


//usano o "?" não precisa usar o if para verificar se existe
buttonTeste?.addEventListener('click', () =>{
    console.log("funcionou");
})