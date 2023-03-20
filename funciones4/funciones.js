/******************** EXERCISE 4 ************************/ 

// Realizar la carga de dos valores enteros por teclado utilizando la función prompt. Calcular la suma previo controlar que los dos valores sean de tipo numérico.

// declarando variables y pidiendo valores
    var suma;
  let num1=prompt('Ingrese el primer valor:','');
  let num2=prompt('Ingrese el segundo valor:','');

    // convirtiendolos a entero
  num1=parseInt(num1);
  num2=parseInt(num2);

// //   aplicando if para ver si son numéricos
  if (isNaN(num1) || isNaN(num2))
  {
//     // si no son numéricos mostrar en pantalla
    document.write('Al menos uno de los dos valores ingresados no es numérico.');
  }
  else
  {
//     // aplicando la suma de ser numéricos y mostrar el resultado en pantalla
    suma=num1+num2;
    document.write('La suma de los dos valores es:' + suma);
  }