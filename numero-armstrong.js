// Ejercicio para definir una función que valide si un número dado es de tipo Armstrong

// por ejemplo: 371
//  3^3 + 7^3 + 1^3 = 371

function esNumeroArmstrong (numero) {  
    if (typeof numero != 'number') {
        throw TypeError ('El argumento debe ser un número');
    }

    if (!Number.isInteger(numero)) {
        throw TypeError ('El argumento debe ser un número entero');
    }

    if (numero <=100 || numero > 999) {
        return null;
    }

    let resultado = String(numero).split('').map(c => parseInt(c)).reduce((a, d) => {
        return a + Math.pow(d , 3);
    }, 0);

    return resultado == numero;
}

try {
    console.log(esNumeroArmstrong(371)); //true
} catch (e) {
    console.log(`Error: ${e.message}`);
}