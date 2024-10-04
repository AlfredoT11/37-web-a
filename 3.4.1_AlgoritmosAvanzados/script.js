function busquedaBinaria(valorABuscar, arreglo, inicio, final){

    let posicionMitad = Math.floor((inicio + final)/2);

    if(inicio == final && arreglo[posicionMitad] != valorABuscar){
        // El valor buscado no existe en el arreglo.
        return -1;
    }

    if(arreglo[posicionMitad] == valorABuscar){
        return posicionMitad;
    }else if(valorABuscar > arreglo[posicionMitad]){
        // Movernos a la derecha.
        return busquedaBinaria(valorABuscar, arreglo, posicionMitad + 1, final);
    }else{
        // Movernos a la izquierda.
        return busquedaBinaria(valorABuscar, arreglo, inicio, posicionMitad - 1);
    }

}

// NOTA: Recordar que para utilizar búsqueda binaria, el arreglo debe estar ordenado de menor a mayor.
let arreglo = [1, 2, 3, 5, 8, 24, 32, 100, 200, 504, 603, 809, 1000];

let valoresABuscar = [809, 1001, 3];
for(let i = 0; i < valoresABuscar.length; i++){
    let valorABuscar = valoresABuscar[i];
    if(busquedaBinaria(valorABuscar, arreglo, 0, arreglo.length - 1) != -1){
        console.log(`El valor ${valorABuscar} SÍ está en el arreglo`);
    }else{
        console.log(`El valor ${valorABuscar} NO está en el arreglo`);
    }
}

// Maximum call stack (pila) size exceeded -> Nos quedamos sin memoria.
// Tamaño máximo de pila de llamadas excedido.
function a(){
    console.log(`Soy A`);
}

function b(){
    a();
    console.log(`Soy B`);
}

function c(){
    b();
    console.log(`Soy C`);
}

c();

/*
call stack
busqueudaBinaria() bsquedaBinaria() busquedaBinaria() busquedaBinaria() busquedaBinaria() busquedaBinaria() busquedaBinaria() busquedaBinaria() busquedaBinaria() busquedaBinaria() busquedaBinaria()
->
*/  

let numeros = [1, 5, 3, 4, 6, 8, 24, 33, 81, 90];

// find() -> regresa el primer valor que cumpla con las condiciones.
let primerPar = numeros.find((numero) => numero % 2 == 0);
console.log(`El primer valor par del arreglo es: ${primerPar}`);

let primerParMayorA50 = numeros.find((numero) => numero % 2 == 0 && numero > 50);
console.log(`Par mayor a 50: ${primerParMayorA50}`);


class Persona{
    constructor(primerNombre, edad, promedio){
        this.primerNombre = primerNombre;
        this.edad = edad;
        this.promedio = promedio;
    }

    
    toString(){
        return `Primer nombre: ${this.primerNombre}  Edad: ${this.edad} Promedio: ${this.promedio}`;
    }

}

let persona1 = new Persona('Luis', 32, 8.5);
let persona2 = new Persona('Enrique', 18, 6.0);
let persona3 = new Persona('Lucía', 23, 9.3);
let persona4 = new Persona('Ernesto', 50, 7.5);
let persona5 = new Persona('Mariana', 61, 5.9);
let personas = [persona1, persona2, persona3, persona4, persona5];

// filter() -> Regresa todos los valores que cumplan con las condiciones.
let personasMayoresA40 = personas.filter(persona => persona.edad > 40);
console.log(`Personas cuya edad sea mayor a 40: ${personasMayoresA40}`);

let personasMayoresOIgualA30YNombresConMasDe4Caracteres = personas.filter(persona => persona.edad >= 30 && persona.primerNombre.length > 4);
console.log(personasMayoresOIgualA30YNombresConMasDe4Caracteres);

// El método sort nos permite ordenar sin crear un arreglo nuevo.
// Este método puede recibir un parámetro opcional conocido como función de comparación. Si no se recibe, el método convierte cada elemento
// a cadena y los ordena alfabéticamente.
let numerosAleatorios = [52, 12, 18, 61, 84, 69, 73, 74, 20, 1, 201, 10001, 12, 300000001];
console.log(`Arreglo antes de ser ordenado: ${numerosAleatorios}`);
numerosAleatorios.sort();
console.log(`Arreglo después de ser ordenado: ${numerosAleatorios}`);

numerosAleatorios.sort((a, b) => a - b);
console.log(`Arreglo ordenado numéricamente: ${numerosAleatorios}`);

/*
[5, 2, 8, 10, 24, 1]
 a  b

(a, b) => a - b

a = 5
b = 2

a - b = 5 - 2 = 3
3 > 0
[2, 5, 8, 10, 24, 1]
 b  a
    a  b

a = 5
b = 8
a - b = 5 - 8 = -3
-3 < 0

[2, 5, 8, 8, 24, 1]
    a  b
       a  b


a = 8
b = 8
a - b = 8 - 8 = 0
0 = 0

[2, 5, 8, 8, 24, 1]
       a  b

*/

console.log(`Antes de ordenar por promedio: ${personas}`);
let personasFiltradas = personas.sort((personaA, personaB) => personaA.promedio - personaB.promedio)
                                .filter(persona => persona.promedio > 8)
                                .map(persona => `${persona.primerNombre} : ${persona.promedio}`);
console.log(`Después de ordenar por promedio: ${personasFiltradas}`);

