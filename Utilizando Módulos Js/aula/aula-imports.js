//IMPORTS
//Named exports
import { funcao, variavel, classe } from "./aula-exports.js";

//Default exports
import valueDefault from "./aula-exports.js";

//Trocando nome de imports
import { arquivo as Apelido} from './aula-exports.js';
Apelido.metodo();

//Importando todos os dados de um arquivo
import * as INFOS from './aula-exports.js';
INFOS.MetodoA();
console.log(INFOS.variavel);