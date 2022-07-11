//npm start lite-server
//npm run watch

//evita o uso do any, pois desregula a tipagem, essecia do typescript 

let valorAny: any;
valorAny = 3;
valorAny = "Olá";
valorAny = true;

let valorString1: string =  "Teste";
valorString1 = valorAny;

let valorString2: string = ", pode comemorar";
valorString2 = valorAny;

function somaString(string1: string, string2: string) {
    console.log(string1 + string2 );
    
}

somaString(valorString1, valorString2);