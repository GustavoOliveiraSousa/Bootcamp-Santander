//ESCREVENDO A FUÇÃO SOMA EM TYPESCRIPT
// let soma = (a: number, b:number) => a + b;
// console.log(soma(2,6));
//==========================================================

//COMO FUNCIONAR AS INTERFACES
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico' | 'aéreo';
    executarRugido(alturaEmDecibeis: number): void;
}
interface IFelinos extends IAnimal {
    visaoNoturna: boolean,
}


const animal: IAnimal = {
    nome: "Sabiá",
    tipo: 'aéreo',
    executarRugido: (alturaEmDecibeis) => ("${alturaEmDecibeis} dB"),
};

const felino: IFelinos = {
    nome: "Tigresa",
    tipo: "terrestre",
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => ("${alturaEmDecibeis} dB"),
}
//===================================================================