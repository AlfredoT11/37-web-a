let nombre = 'Juan';
let apellidoPaterno = 'Pérez'
let edad = 25;

// Objeto literal: Podemos guardar distintos valores en una sola variable y acceder a los valores a través de una clave.
let persona1Literal = {
    nombre: 'Juan',
    apellidoPaterno: 'Pérez',
    edad: 25
}

// 1. Definir los atributos de mi clase.
/*
    - nombre
    - primer apellido
    - segundo apellido
    - edad
    - genero
    - mejor amigo
    - mascotas
*/

// 2. Definir los métodos de mi clase.
/*
    - saludar
    - agregar mejor amigo
    - adoptar mascotas
*/

/*

Persona:
    nombre: Juan
    apellidoPaterno: Vargas

Persona
    nombre: Pedro
    apellidoPaterno: Pérez

*/

// 3. Crear la clase
// Las clases se nombrar con PascalCase
class Persona{

    // 4. Crear el constructor.
    // Este método se encarga de solicitar espacio en la memoria RAM para el objeto.
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad, genero){
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
        this.genero = genero;
        this.mejorAmigo = null;
        this.mascotas = [];
    }

}

// Creando objetos
let persona1 = new Persona('Juan', 'Vargas', 'Rodríguez', 30, 'M');
let persona2 = new Persona('María', 'Molina', 'Mendoza', 52, 'F');

// ` <- backtick Alt + 96
// persona1.nombre + " " + persona1.apellidoPaterno + " " + persona1.apellidoMaterno
console.log(`${persona1.nombre} ${persona1.apellidoPaterno} ${persona1.apellidoMaterno}`); // Template Strings
console.log(`${persona2.nombre} ${persona2.apellidoPaterno} ${persona2.apellidoMaterno}`);
