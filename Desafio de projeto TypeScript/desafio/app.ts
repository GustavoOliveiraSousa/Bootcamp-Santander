let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = "Olá";
anyEstaDeVolta = 5;

let stringTeste: string = "Verificar";
stringTeste = anyEstaDeVolta;

let unknownValue: unknown;
unknownValue = 1;
unknownValue = "Oi";
unknownValue = true;
unknownValue = "vai sim"

let stringTeste2: string = "agora vai";

if ( typeof unknownValue === 'string') {
    //só posso reatribuir um tipo unknown se eu verificar com um if
    stringTeste2 = unknownValue;
}