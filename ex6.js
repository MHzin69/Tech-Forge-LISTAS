const leitura = require("prompt-sync")();

let raio = Number(leitura("Insira o valor do raio do circulo: "));
let pi = 3.1415;
let area = pi * Math.pow(raio, 2);
console.log("A area do circulo é "+area);