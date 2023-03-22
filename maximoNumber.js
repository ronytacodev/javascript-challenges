function  maximun (array) {
    // definimos el array
    // let array = [5,4,3,15,10,20]

    // asignamos el valor de la variable max con el primer valor del array que sería array[0]
    let max = array[0];
    let min = array[1];

    // mediante un ciclo for verificamos todos los números que contiene el array para ver cuál es el mayor
    for(let i=0; i<array.length;i++) {
        if(array[i]>max){

            // si encontramos un número mayor a la variable max, se le redeclara esa variable tomando el valor del nuevo número mayor
            max = array[i]
            
        }
      
    }

    for (let f = 0; f < array.length; f++) {
        if (array[f]<min) {
            min = array[f];
        }
        
    }

    suma = min + max;

    return console.log(`este es el número mayor ${max} \n y este es el número menor ${min} \n  y la suma del máximo con el mínimo es ${suma} `);
    
}

exports.maximun = maximun;