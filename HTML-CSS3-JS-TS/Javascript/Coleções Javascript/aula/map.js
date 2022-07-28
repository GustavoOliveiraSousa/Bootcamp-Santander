//MÉTODOS MAP
//maps podem ter chaves de qualquer tipo
//maps possuem a propriedade length
//maps são mais fáceis de iterar
//utilizado quando o valor das chaves é desconhecido
//os valores tem o mesmo tipo

//Adicionar, ler e deletar
const myMap = new Map()

myMap.set("apple", "fruit", "pomgranade");
//Map (1) {"apple" => "fruit"}
console.log(myMap.get('apple'));

myMap.get('apple');
//"fruit"

myMap.delete("apple")
// true

myMap.get("apple")
//underfined

