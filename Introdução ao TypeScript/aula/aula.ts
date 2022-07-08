//ESCREVENDO A FUÇÃO SOMA EM TYPESCRIPT
// let soma = (a: number, b:number) => a + b;
// console.log(soma(2,6));
//==========================================================

// //COMO FUNCIONAR AS INTERFACES
// interface IAnimal {
//     nome: string;
//     tipo: 'terrestre' | 'aquatico' | 'aéreo';
//     executarRugido(alturaEmDecibeis: number): void;
// }
// interface IFelinos extends IAnimal {
//     visaoNoturna: boolean,
// }


// const animal: IAnimal = {
//     nome: "Sabiá",
//     tipo: 'aéreo',
//     executarRugido: (alturaEmDecibeis) => ("${alturaEmDecibeis} dB"),
// };

// const felino: IFelinos = {
//     nome: "Tigresa",
//     tipo: "terrestre",
//     visaoNoturna: true,
//     executarRugido: (alturaEmDecibeis) => ("${alturaEmDecibeis} dB"),
// }
// //===================================================================

// //COMO FUNCIONAM AS TYPES
// //interface serve como um modelo
// interface IAnimal {
//     nome: string;
//     tipo: 'terrestre' | 'aquatico' | 'aéreo';
//     domestico: boolean;
// }
// interface IFelinos extends IAnimal {
//     visaoNoturna: boolean,
// }

// interface ICanino extends IAnimal {
//     porte: "pequeno" | "médio" | "grande",
// }
 
// //types servem para fazer junções de interfaces
// type IDomestico = IFelinos | ICanino

// const animal: IDomestico = {
//     domestico: true,
//     nome: "Dog",
//     porte: "grande",
//     tipo: "terrestre",
//     visaoNoturna: true,
// };

// //================================================================

// //TRATANDO A TAG INPUT
// const input = document.getElementById('input') as HTMLInputElement;

// input.addEventListener('input', (event) => {
//     //console.log('digitei');
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i, value );
// });

//====================================================================

// //GENERIC TYPES
// function adicionaApendiceALista<T>(array: any[], valor: T) {
//     return array.map(item => item + valor);
// }

// const operacaoComNumeros = adicionaApendiceALista([1, 2, 3], 1);
// const operacaoSemNumeros = adicionaApendiceALista(['A', 'B', 'C'], 'd');

// console.log(operacaoComNumeros);
// console.log(operacaoSemNumeros);

// //==================================================================

//DESENVOLVENDO CONDICIONAIS