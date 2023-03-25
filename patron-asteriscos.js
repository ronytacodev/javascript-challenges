// Imprimir  el siguiente patrón de asteriscos utilizando un ciclo for

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

for (let i = 0; i < 6; i++) {
    let resultado = '';

    for (let j = 0; j <= i; j++) {
        resultado += '* ';
    }

    console.log(resultado);
    
}