//EXPORTAR
//Named exports
export function mostra(pessoa) {
    return`A idade de ${pessoa.nome} é ${pessoa.idade}`;
}
//ou
function mostraIdade(pessoa) {
    return`A idade de ${pessoa.nome} é ${pessoa.idade}`;
}
export{
    mostraIdade
}
//-----------------------------------------------

//Default exports
//Só pode haver um por arquivo
//Será o retorno padrão do seu arquivo
function mostraIdade(pessoa) {
    return`A idade de ${pessoa.nome} é ${pessoa.idade}`;
}
export default mostraIdade;
//---------------------------------------------- 
