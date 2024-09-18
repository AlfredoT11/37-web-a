/*

    Pikachu: 
        Ataque: 50
        Vida:   100

    Charmander:
        Ataque: 40
        Vida:   120

    Pikachu ataque a Charmander
    Vida = Vida de Charmander - Ataque de Pikachu = 120 - 50 = 70

*/

let pokemon1 = null;
let pokemon2 = null;

class Pokemon{

    constructor(nombre, nivelAtaque, nivelDeVida){
        this.nombre = nombre;
        this.nivelAtaque = nivelAtaque;
        this.nivelDeVida = nivelDeVida;
    }

    atacarPokemon(pokemonAAtacar){
        // Template strings -> Se utilizan para crear cadenas que no necesiten concatenarse, en su lugar "inyectamos" los valores.
        // backticks -> ``  -> Alt + 96
        console.log(`${this.nombre} está atacando a ${pokemonAAtacar.nombre}`);
        console.log(`El nivel de vida de ${pokemonAAtacar.nombre} ANTES del ataque es: ${pokemonAAtacar.nivelDeVida}`);
        console.log(`${this.nombre} lanza su ataque...`);
        pokemonAAtacar.nivelDeVida = pokemonAAtacar.nivelDeVida - this.nivelAtaque;
        console.log(`El nivel de vida de ${pokemonAAtacar.nombre} DESPUÉS del ataque es: ${pokemonAAtacar.nivelDeVida}`);
    
        // Pseudocódigo para hacerlo gráfico:
        /* 
            Darle click a un botón que sea el que lance el evento.
            Dentro de su HTML tener una etiqueta con un id pokemon1
            Acceder a esa etiqueta getElementById()
            Asignarle una animación con CSS
            Dentro de HTML tener otra etiqueta con un id para el pokemon2, acceder a esa etiqueta y modificar su estilo, animación cuando se reciba el evento

        */
    
    }
}

// class <NombreDeLaClaseHija> extends <NombreDeLaClasePadre>{}
class PokemonFuego extends Pokemon{
    
    // El constructor de la clase hija TIENE que mandar a llamar al construtor de la clase padre.
    constructor(nombre, nivelAtaque, nivelDeVida, colorDeFlama){
        super(nombre, nivelAtaque, nivelDeVida); // Este método nos permite acceder al constructor de la clase padre.
        this.colorDeFlama = colorDeFlama;
    }

    quemar(pokemonAAtacar){
        console.log(`${this.nombre} está quemando a ${pokemonAAtacar.nombre}`);
        console.log(`El nivel de vida de ${pokemonAAtacar.nombre} ANTES del ataque es: ${pokemonAAtacar.nivelDeVida}`);
        console.log(`${this.nombre} lanza su quemadura...`);
        pokemonAAtacar.nivelDeVida = pokemonAAtacar.nivelDeVida - (this.nivelAtaque * 1.5);
        console.log(`El nivel de vida de ${pokemonAAtacar.nombre} DESPUÉS del ataque es: ${pokemonAAtacar.nivelDeVida}`);
    }

    //Sobeescribiendo el método de atacar (Sobreescribir un método significa modificar el comportamiento del método que heredamos de la clase padre.)
    atacarPokemon(pokemonAAtacar){
        this.quemar(pokemonAAtacar);
    }
    
}

class PokemonAgua extends Pokemon{
    
    // El constructor de la clase hija TIENE que mandar a llamar al construtor de la clase padre.
    constructor(nombre, nivelAtaque, nivelDeVida, colorDeHielo){
        super(nombre, nivelAtaque, nivelDeVida); // Este método nos permite acceder al constructor de la clase padre.
        this.colorDeHielo = colorDeHielo;
    }

    congelar(pokemonAAtacar){
        console.log(`${this.nombre} está congelando a ${pokemonAAtacar.nombre}`);
        console.log(`El nivel de vida de ${pokemonAAtacar.nombre} ANTES del ataque es: ${pokemonAAtacar.nivelDeVida}`);
        console.log(`${this.nombre} lanza su congelamiento...`);
        pokemonAAtacar.nivelDeVida = pokemonAAtacar.nivelDeVida - (this.nivelAtaque * 1.3);
        console.log(`El nivel de vida de ${pokemonAAtacar.nombre} DESPUÉS del ataque es: ${pokemonAAtacar.nivelDeVida}`);
    }

    //Sobeescribiendo el método de atacar
    atacarPokemon(pokemonAAtacar){
        this.congelar(pokemonAAtacar);
    }
}

class CombatePokemon{

    constructor(pokemonA, pokemonB){
        this.pokemonA = pokemonA;
        this.pokemonB = pokemonB;
    }

    pokemonAAtacaAPokemonB(){
        // Con polimorfismo
        this.pokemonA.atacarPokemon(this.pokemonB);
    }

    pokemonBAtacaAPokemonA(){
        // Sin polimorfismo
        if(this.pokemonB instanceof PokemonFuego){
            this.pokemonB.quemar(this.pokemonA);
        }else if(this.pokemonB instanceof PokemonAgua){
            this.pokemonB.congelar(this.pokemonA);
        }else{
            this.pokemonB.atacarPokemon(this.pokemonA);
        }
        
    }

}

pokemon1 = new Pokemon('Pikachu', 20, 200);
pokemon2 = new PokemonFuego('Charmander', 25, 150, 'Azul');
let pokemon3 = new PokemonAgua('Squirtle', 32, 110, 'Verde');

let combatePokemon = new CombatePokemon(pokemon2, pokemon3);

//pokemon3.congelar(pokemon2);
//pokemon2.quemar(pokemon3);

combatePokemon.pokemonAAtacaAPokemonB();
combatePokemon.pokemonBAtacaAPokemonA();

/*
console.log(pokemon3.colorDeHielo);
console.log(pokemon2.colorDeFlama);


console.log('--------------------------------------');
console.log(typeof pokemon1); // <- typeof es un OPERADOR que nos dice el tipo de dato de un valor.
console.log(typeof pokemon2);
console.log(typeof pokemon3);

console.log(pokemon1.constructor.name); // <- el atributo constructor.name nos dice la clase a la que pertenece el objeto.
console.log(pokemon2.constructor.name);
console.log(pokemon3.constructor.name);

console.log(pokemon3);
*/

// Ejercicio:
/*
    1. Crear una clase Animal que tenga al menos 3 parámetros y un método hacerSonido().
    2. Crear 3 clases hijas de la clase Animal, agregar un atributo específico y  modificar el método hacerSonido para que cada animal haga el sonido de su especie.
    3. Crear una clase Granja que tenga un atributo de tipo arreglo que permita almacenar un conjunto de animales.
    4. Crear un método en la clase Granja que permita agregar un nuevo animal.
    5. Crear un método en la clase Granja que permita que cada animal haga su sonido.
*/