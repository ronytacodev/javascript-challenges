// definir una función que valide si un valor es un arreglo.

function esArreglo(valor) {

    return toString.call(valor) === '[object Array]';
}

console.log(esArreglo(123)); //false
console.log(esArreglo("123")); //false
console.log(esArreglo("123".split(''))); //true
console.log(esArreglo([])); //true
console.log(esArreglo(Array())); //true