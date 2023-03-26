//Definir una función para ordenar un arreglo de cadenas acorde al último caracter

function ordenarCadenasSegunUltimoCaracter(cadenas) {
    // verificar si es un array,sino mandar un error
    if(!Array.isArray(cadenas)) {
        throw TypeError('El argumento debe ser un arreglo');
    }

    // verificar que cada elemento del arreglo sea un string , sino mostrar un error
    if (!cadenas.every(e => typeof e === 'string')) {
        throw TypeError ('Todos los elementos del arreglo deben ser cadenas de caracteres');
    }

    // ordenar según el último caracter si las validaciones con correctas
    return cadenas.sort((x, y) => x.charCodeAt(x.length -1) - y.charCodeAt(y.length - 1));

}

// hacer el test de la función, arrojando error si no es arreglo

let lenguajes = ['Python', 'Javascript', 'C#', 'Go', 'PHP', 'Java'];
try {
    let resultado = ordenarCadenasSegunUltimoCaracter(lenguajes);

    // ordenando ultimos caracteres n, t , #, 0, P, a
    // ASI QUEDARIAN #, P, a, n, o, t

    console.log(resultado); // ['C#', 'PHP', 'Java', 'Python', 'Go', 'Javascript']
    
} catch (e) {
    console.log(`Error: ${e.message}`);
}