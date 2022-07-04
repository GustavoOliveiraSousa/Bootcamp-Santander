// //ESTRUTURA
// const myPromise = new Promise((resolve, reject) =>{
//     window.setTimeout(() => {
//         resolve(console.log("Resolvida"));
//     }, 2000);
// });

// //PROMISE MANIPULAÇÃO
// await myPromise
//     .then((result) => result + 'passando pelo then')
//     .then((result) => result + 'e agora acabou')
//     .catch((err) => console.log(err.message));

// //ASYNC/AWAIT
// async function resolvePromise() {
//     const myPromise = new Promise((resolve, reject) =>{
//         window.setTimeout(() => {
//             resolve('Resolvida ');
//         }, 3000);
// });
//     const resolved = await myPromise
//         .then((result) => result +'passando pelo then,')
//         .then((result) => result + 'e agora acabou!')
//         .catch((err) =>console.log(err.message));

//     return resolved;
// }

//O QUE SÃO API'S E FETCH
//JSON: JavaScript Object Notation
//é muito comum que API's retornem seus dados no formato .json, portanto precisamos tratar esses dados quando os recebemos

//ESTRUTURA JSON
// {
//     "description": "schema POST bank"...
// }

// //ESTRUTURA FETCH
// fetch(url, options)
//     .then(Response => Response.json())
//     .then(json => console.log(json))
//     //retorna uma promisse
