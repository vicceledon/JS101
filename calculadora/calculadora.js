const sumar = require("./sumar.js");
const restar = require("./restar.js");
const multiplicar = require("./multiplicar.js");
const dividir = require("./dividir.js");

console.log(sumar(5, 4));
console.log(restar(5, 4));
console.log(multiplicar(5, 4));
console.log(multiplicar(5, 0));
console.log(dividir(5, 4));
console.log(dividir(5, 0));

//Una prueba de implementación de arrow function e if ternario. ;)

let div = (a, b) => (a === 0 || b === 0 ? "Error" : a / b);
console.log(div(3, 0));
