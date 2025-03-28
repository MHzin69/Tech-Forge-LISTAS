const leitura = require("prompt-sync")();

let lado = leitura("Insira o tamanho do lado: ")
let area = Math.sqrt(3)/4 * Math.pow(lado, 2)
 console.log("A área deste triangulo é %d",area)