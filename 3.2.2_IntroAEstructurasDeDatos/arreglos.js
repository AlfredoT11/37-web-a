// let frutas = []; // Esto crea un arreglo vacío.
// let frutas = Array(); // Esto crea un arreglo vacío.

let frutas = ['Naranja', 'Aguacate', 'Fresa'];

// Agregar elementos
frutas.push('Plátano'); // Este método nos permite agregar elementos AL FINAL del arreglo.
frutas.unshift('Manzana'); // Este método nos permite agregar elementos AL INICIO del arreglo.

console.log(frutas);

// Eliminar elementos
frutas.pop(); // Elimina el ÚLTIMO elemento del arreglo y lo regresa.
frutas.shift(); // Elimina el PRIMER elemento del arreglo y lo regresa.

console.log(frutas);

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// El primer parámetro es el inicio, el segundo el número de elementos a borrar y a partir del tercer parámetro son los nuevos valores a agregar.
frutas.splice(1, 1, 'Uvas', 'Maracuya'); // Permite eliminar y agregar elementos al mismo tiempo.
console.log(frutas);

let frutas2 = frutas; // Copia de valor por referencia. // ['Naranja', 'Uvas', 'Maracuya', 'Fresa']
let frutas3 = [...frutas]; // Creamos un nuevo arreglo completamente independiente. Esto se hace con el operador spread (...)
frutas2.pop();

console.log('Frutas originales');
console.log(frutas); 
console.log('Frutas 2');
console.log(frutas2);
console.log('Frutas 3');
console.log(frutas3);

function agregarElemento(arreglo, nuevoValor){
    arreglo.push(nuevoValor);
}

agregarElemento(frutas2, 'Pera');
console.log(frutas);

