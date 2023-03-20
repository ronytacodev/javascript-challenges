/******************** TEST EXERCISE 3 ************************/ 

function test() {

    // declaramos el valor de a que es el array
    let a = [1,2,3,4,"hola",6,7,8,9,10];

    // usamos la función sumaArray
    let total = sumaArray(a);

    // usamos la función para obtener la media
    let media = mediaArray(a);

    // usamos la funcion para ver si el número 5 forma parte del array "a"
    let encontrado = exists(a, 5);

    // mostramos en pantalla el resultado
    document.write('La suma total es ' + total + "<br/>");
    document.write('La media es ' + media + "<br/>");
    // si el número 5 esta en el array , arrojará resultado como true , sino será false
    document.write(encontrado);
}
window.onload = test;