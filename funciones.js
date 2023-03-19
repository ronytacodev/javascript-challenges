/******************** EXERCISE 1 ************************/ 
// Encontrar el número mayor del array
function  maximun () {
    // definimos el array
    let array = [5,4,3,15,10,20]

    // asignamos el valor de la variable max con el primer valor del array que sería array[0]
    let max = array[0]

    // mediante un ciclo for verificamos todos los números que contiene el array para ver cuál es el mayor
    for(let i=0; i<array.length;i++) {
        if(array[i]>max){

            // si encontramos un número mayor a la variable max, se le redeclara esa variable tomando el valor del nuevo número mayor
            max=array[i]
        }
      
    }
    console.log(`The largest element in array is ${max} `);
}

// maximun();
/********************************************/ 


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

/******************** EXERCISE 3 ************************/ 
// Realizar la suma de un array pasado por parámetro.Validar si es un array.




// Realizar la media de un array pasado por parámetro. Validar si es un array.

// Comprobar, dado un array y un elemento, si existe en el array. Validar si es un array.

/******************** EXERCISE 4 ************************/ 

// Realizar la carga de dos valores enteros por teclado utilizando la función prompt. Calcular la suma previo controlar que los dos valores sean de tipo numérico.

// declarando variables y pidiendo valores
    var suma;
  let num1=prompt('Ingrese el primer valor:','');
  let num2=prompt('Ingrese el segundo valor:','');

    // convirtiendolos a entero
  num1=parseInt(num1);
  num2=parseInt(num2);

//   aplicando if para ver si son numéricos
  if (isNaN(num1) || isNaN(num2))
  {
    // si no son numéricos mostrar en pantalla
    document.write('Al menos uno de los dos valores ingresados no es numérico.');
  }
  else
  {
    // aplicando la suma de ser numéricos y mostrar el resultado en pantalla
    suma=num1+num2;
    document.write('La suma de los dos valores es:' + suma);
  }