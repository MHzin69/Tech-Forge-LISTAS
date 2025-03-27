const leitura = require("prompt-sync")();

let nome = leitura("Insira seu nome: ");
let endereco = leitura("Insira seu endereço: ");
let telefone = leitura("Insira seu número de telefone: ")

console.log("Nome: "+nome);
console.log("Endereço: "+endereco)
console.log("Telefone: "+telefone)