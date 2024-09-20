/*
            tope
----------------
| 5    8      10   <->    [5, 8, 10]
----------------

*/
class Pila{

    constructor(){
        this.valores = [];
    }

    /* Método push
                tope
    ----------------
    | 5    8      10   <->    [5, 8, 10]
    ----------------
    Agregando el valor 11
    
                    tope
    -------------------
    | 5    8  10     11  <->    [5, 8, 10, 11]
    -------------------
    */
    agregarElemento(nuevoValor){
        this.valores.push(nuevoValor);
    }


    /* Método pop
                tope
    ----------------
    | 5    8      10  <-> [5, 8, 10]
    ----------------
    Eliminando el tope
    
          tope
    ---------
    | 5    8  <-> [5, 8]
    ---------
    */
    eliminarTope(){
        return this.valores.pop();
    }

    mostrarTope(){
        return this.valores[this.valores.length - 1];
    }

}

let historialNavegacion = new Pila();
historialNavegacion.agregarElemento('www.google.com')
console.log(`Página visitada: ${historialNavegacion.mostrarTope()}`);
historialNavegacion.agregarElemento('www.youtube.com');
console.log(`Página visitada: ${historialNavegacion.mostrarTope()}`);
historialNavegacion.agregarElemento('www.youtube.com/LinkinPark');
console.log(`Página visitada: ${historialNavegacion.mostrarTope()}`);
historialNavegacion.agregarElemento('www.youtube.com/LinkinPark/newMusic');
console.log(`Página visitada: ${historialNavegacion.mostrarTope()}`);
historialNavegacion.agregarElemento('www.youtube.com/LinkinPark/newMusic/TheEmptinessMachine');
console.log(`Página visitada: ${historialNavegacion.mostrarTope()}`);


console.log(`Última página visitada: ${historialNavegacion.eliminarTope()}`);
console.log(`Página anterior: ${historialNavegacion.eliminarTope()}`);
console.log(`Página anterior: ${historialNavegacion.eliminarTope()}`);
console.log(`Página anterior: ${historialNavegacion.eliminarTope()}`);
console.log(`Página anterior: ${historialNavegacion.eliminarTope()}`);
console.log(`Página anterior: ${historialNavegacion.eliminarTope()}`);
console.log(`Página anterior: ${historialNavegacion.eliminarTope()}`);
console.log(`Página anterior: ${historialNavegacion.eliminarTope()}`);




