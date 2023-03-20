/******************** TEST EXERCISE 2 ************************/ 

// Solicitamos un número por una ventana modal
// testeamos la functión esNumero(num)

// let num1 = prompt("Dame el primer número 1")

// mediante un if verificamos si lo que nos pasa por el prompt, es un número, si no lo es, mandará una alerta
if (esNumero(num1)) {
    alert("Es un número");
} else {
    alert("No es un número");
}

// testeamos la función generarAleatorio(minimo,maximo) 

// pedimos 2 valores 
let num1 = prompt("Dame el primer número 1")
let num2 = prompt("Dame el segundo número 2")

// generamos un número aleatorio con esta función generarAleatorio
let aleatorio = generarAleatorio(num1, num2);

// mostramos el resultado con el alert para notarlo más rápido
alert(aleatorio);
