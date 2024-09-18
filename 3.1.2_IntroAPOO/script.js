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
    constructor(nuevoNombre, apellidoPaterno, apellidoMaterno, edad, genero){
        this.nombre = nuevoNombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
        this.genero = genero;
        this.mejorAmigo = null;
        this.mascotas = [];
    }

    // 5. Crear los métodos
    saludar(){
        console.log(`¡Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años!`);
    }

    saludarAOtraPersona(personaASaludar){
        console.log(`¡Hola, ${personaASaludar.nombre} mi nombre es ${this.nombre}!`);
    }

    conocerMejorAmigo(persona){
        this.mejorAmigo = persona;
        console.log(`Mi nuevo mejor amigo es: ${persona.nombre}`);
    }

    adoptarMascota(mascota){
        this.mascotas.push(mascota);
    }

}

// Creando objetos
let persona1 = new Persona('Juan', 'Vargas', 'Rodríguez', 30, 'M');
let persona2 = new Persona('María', 'Molina', 'Mendoza', 52, 'F');
let persona3 = new Persona('Edgar', 'Torres', 'Rojas', 42, 'M');

// ` <- backtick Alt + 96
// persona1.nombre + " " + persona1.apellidoPaterno + " " + persona1.apellidoMaterno
console.log(`${persona1.nombre} ${persona1.apellidoPaterno} ${persona1.apellidoMaterno}`); // Template Strings
console.log(`${persona2.nombre} ${persona2.apellidoPaterno} ${persona2.apellidoMaterno}`);


persona1.saludar();
persona2.saludar();

persona2.saludarAOtraPersona(persona1);

if(persona1.mejorAmigo == null){
    console.log(`${persona1.nombre} aún no tiene un mejor amigo. ):`);
}else{
    console.log(`El mejor amigo de ${persona1} es ${persona1.mejorAmigo.nombre}`);
}

persona1.conocerMejorAmigo(persona2);


if(persona1.mejorAmigo == null){
    console.log(`${persona1.nombre} aún no tiene un mejor amigo. ):`);
}else{
    console.log(`El mejor amigo de ${persona1.nombre} es ${persona1.mejorAmigo.nombre}`);
}

persona2.conocerMejorAmigo(persona3);

console.log(`El mejor amigo del mejor amigo de ${persona1.nombre} es: ${persona1.mejorAmigo.mejorAmigo.nombre}`);

// Ejercicio:
/*
    1. Crear una nueva clase llamada Mascota, agregarle al menos 3 atributos y el método hacerSonido().
    2. Crear un método en la clase Persona que permita agregar mascotas al atributo mascotas.
    Pista: El método tiene que recibir un objeto de tipo Mascota y se debe agregar ese objeto al arreglo del atributo.
*/

// Punto 1. Crear clase Mascota
// 1. Crear la clase
class Mascota{

    // 2. Agregar los atributos
    constructor(nombre, especie, sonido){
        this.nombre = nombre;
        this.especie = especie;
        this.sonido = sonido;
    }

    // 3. Agregar los métodos
    hacerSonido(){
        return this.sonido;
    }

}

let mascota1 = new Mascota('Tigrillo', 'Gato', 'Miau');
let mascota2 = new Mascota('Mocka', 'Perro', 'Woof!');

console.log(mascota1.hacerSonido());
console.log(mascota2.hacerSonido());

persona1.adoptarMascota(mascota1);
persona2.adoptarMascota(mascota2);

console.log('Sonidos de las mascotas adoptadas');
console.log(persona2.mascotas[0].hacerSonido());
console.log(persona1.mascotas[0].hacerSonido());

console.log(persona1.mascotas[0].nombre);
persona1.mascotas[0].nombre = 'Bowie';
console.log(persona1.mascotas[0].nombre);

