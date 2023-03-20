
/******************** EXERCISE 3 ************************/ 
// Realizar la suma de un array pasado por parámetro.Validar si es un array.

function esNumero(num) {
    // El método es isNan que verifica si No es un número, pero aplicando lo contrario que sería !isNaN verificamos si lo que se pasa es un número.
    return !isNaN(num);
}

function sumaArray(array) {

    // declaramos el array
    let total = 0;
  
    // verificamos si es un array
    if(Array.isArray(array)){
  
      // con el for recorremos el array
      for (let i = 0; i < array.length; i++) {
  
        // almacenamos cada valor en la variable element
        const element = array[i];
  
        // verificamos si los datos son numéricos
        if(esNumero(element)){
  
          // sumamos el valor de los elementos
          total += element;
        }
        
      }
    } else {
      // mostramos en pantalla si en caso no es un array
      document.write('Debes pasar un array como parámetro');
    }
  
    // retornamos el valor de la suma
    return total;
  }
  
  // Realizar la media de un array pasado por parámetro. Validar si es un array.
  
  function mediaArray(array) {

    // inicializamos la media en 0
    let media = 0;

    // con el if verificamos si es un array
    if(Array.isArray(array)) {
      
      // obtenemos la suma de los valores del array
      let suma = sumaArray(array);

      // obtenemos el valor de la media
      media = suma / array.length;

    } else {
      console.error("Debes pasar un array con parámetro.")
    }

    return media;
  }
  
  // Comprobar, dado un array y un elemento, si existe en el array. Validar si es un array.
  
  function exists(array, elemento) {

    // verificamos que sea un array
    if (Array.isArray(array)) {
      
      // recorremos el array
      for (let i = 0; i< array.length; i++) {

        // guardamos el valor del array en la variable element
      const element = array[i];

      // comparamos los valores del array con el parámetro "elemento" que lo estamos pasando en la función
        if (element == elemento) {

          // de ser iguales , dará true
          return true;
        }
       
      }
    } else {

      // de no ser iguales , dará false
      console.error("Debes pasar un array como parámetro");
    }

    // por defecto dará false, si en caso son iguales , ingresa al for y dará true
    return false;
  }