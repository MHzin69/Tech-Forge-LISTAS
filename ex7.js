const leitura = require("prompt-sync")();

let sec = (leitura("Insira os segundos: "));
let hr = Math.floor(sec / 3600);
let min = Math.floor((sec % 3600)/60);
let seg = Math.floor(min % 60);

console.log("%d Segundos são %d hora, %d minutos e %d segundos", sec, hr, min, seg)