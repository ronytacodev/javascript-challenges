//definir una función que sume todos los múltiplos de 3 y 5 rango de  1 a 1000

function sumarMultiplos3y5 () {
    let suma = 0;

    for (let i = 0; i <= 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(i)
            suma += i;
        }
        
    }

    return suma;
}

console.log(sumarMultiplos3y5());