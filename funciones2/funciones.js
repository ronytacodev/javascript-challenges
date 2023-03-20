

/******************** EXERCISE 2 ************************/ 
// Validar si un texto introducido es un número.

function esNumero(num) {
    // El método es isNan que verifica si No es un número, pero aplicando lo contrario que sería !isNaN verificamos si lo que se pasa es un número.
    return !isNaN(num);
}

//  Generar un número aleatorio entre 2 números, comprobar que son números.En caso de que el primero sea mayor que el segundo se intercambiarán.

function generarAleatorio(minimo,maximo) {

    // mediante un if verificaremos las dos variables minimo y máximo
    if (esNumero(minimo) && esNumero(maximo)) {

        // convertimos a entero ambas variables para generar el aleatorio
        minimo = parseInt(minimo);
        maximo = parseInt(maximo);

        // con el if verificamos que número es mayor que el otro y le volvemos asignar los valores
        if (minimo > maximo) {

            // con la variable aux nos ayudamos para verificar cuál es el mayor número
            let aux = maximo;

            // intercambiamos las variables para dejarlos como minimo y maximo
            maximo = minimo;
            minimo = aux;
        }

        // con esta función generamos un número aleatorio entre los 2 números minimo y maximo
        return Math.floor(Math.random() * (maximo - minimo) + minimo);

    } else {
        console.error("Los números no tienen un formarto correcto")
    }


}
