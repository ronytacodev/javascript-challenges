// Definir una función para calcular el máximo común divisor MCD usando un ciclo while.

// function mcd(a , b) {
//     while (a != b) {
//         if (a > b) {
//             a -= b;
//         } else {
//             b -= a;
//         }
//     }

//     return a;
// }

// usando método euclides
function mcd(a , b){
    let aux = 0;
    if (a > 0 && b > 0) {
        while ((a % b) > 0) {
            aux = b;
            b = a % b;
            a = aux;
        }
    } else {
        console.log('los datos deben ser positivos');
    }

    return b;
}

function mcm (a , b) {
    return (a*b) / mcd(a,b);
}

console.log(mcd(30 , 50)); // 10
console.log(mcd(5 , 8)); // 1
console.log(mcm(8, 4)); // multiplos de 4 : 4, 8, 12 , del 8 : 8, 16,24 mcm es: 8