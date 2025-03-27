const leitura = require("prompt-sync")();

let valor =leitura("Insira um valor decimal a ser dividido: ");
let divisor = leitura("insira um número inteiro para ser o divisor: ")
let resultado = valor/divisor;

console.log("O resultado desta operação é: "+ resultado)