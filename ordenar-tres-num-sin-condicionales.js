// Ordenar tres números de forma ascendente sin usar condicionales ni ciclos.

let a = 4;
let b = 5;
let c = 9;

let x = Math.min(a, b, c);
let y = Math.max(a, b, c);
let z = (a + b + c) - x - y;

// x = 4
// y = 9
// z = (18) - 4 - 9
// z = 5

console.log(x, z, y);