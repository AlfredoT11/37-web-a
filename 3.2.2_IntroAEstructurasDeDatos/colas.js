/*
Cola es una estructura de datos lineal de tipo FIFO (First In First Out)
El primero en entrar es el primero en salir.

Final             ---->          Inicio
---------------------------------------
'Espe'  'Isaac'    'Alfredo'    'Oskar'  <->  ['Espe', 'Isaac', 'Alfredo', 'Oskar']
---------------------------------------

*/

class Cola{

    constructor(){
        this.valores = [];
    }


    /*

    Final             ---->          Inicio
    ---------------------------------------
    'Espe'  'Isaac'    'Alfredo'    'Oskar'  <->  ['Espe', 'Isaac', 'Alfredo', 'Oskar']
    ---------------------------------------
    
    Agregar el elemento 'Lennin'
    
    Final             ---->          Inicio
    -------------------------------------------------
    'Lennin'  'Espe'  'Isaac'    'Alfredo'    'Oskar'  <->  ['Lennin', 'Espe', 'Isaac', 'Alfredo', 'Oskar']
    -------------------------------------------------


    */
    agregarElemento(nuevoElemento){
        this.valores.unshift(nuevoElemento);
    }


    /*

    Final             ---->          Inicio
    ---------------------------------------
    'Espe'  'Isaac'    'Alfredo'    'Oskar'  <->  ['Espe', 'Isaac', 'Alfredo', 'Oskar']
    ---------------------------------------
    
    Eliminando un elemento
    
    Final      ---->       Inicio
    -----------------------------
    'Espe'  'Isaac'    'Alfredo'   <->  ['Espe', 'Isaac', 'Alfredo']
    -----------------------------

    */
    eliminarElemento(){
        return this.valores.pop();
    }

    /*

    Final             ---->          Inicio
    ---------------------------------------         0        1        2          3
    'Espe'  'Isaac'    'Alfredo'    'Oskar'  <->  ['Espe', 'Isaac', 'Alfredo', 'Oskar']
    ---------------------------------------

    El último elemento de la cola es 'Espe'.
    */
    mostrarUltimoElemento(){
        return this.valores[0];
    }

        /*

    Final             ---->          Inicio
    ---------------------------------------         0        1        2          3
    'Espe'  'Isaac'    'Alfredo'    'Oskar'  <->  ['Espe', 'Isaac', 'Alfredo', 'Oskar']
    ---------------------------------------
    length = 4

    El primero elemento de la cola es 'Oskar'.
    */
    mostrarPrimerElemento(){
        return this.valores[this.valores.length - 1];
    }

}

let filaDeTortillas = new Cola();

filaDeTortillas.agregarElemento('Oskar');
filaDeTortillas.agregarElemento('Alfredo');
filaDeTortillas.agregarElemento('Isaac');
filaDeTortillas.agregarElemento('Espe');


console.log('Esta es la fila de tortillas: ');
console.log(`La primer persona formada es: ${filaDeTortillas.mostrarPrimerElemento()} y la última persona formada es: ${filaDeTortillas.mostrarUltimoElemento()}`);
console.log(`Despachando a ${filaDeTortillas.eliminarElemento()}`);
console.log(`La primer persona formada es: ${filaDeTortillas.mostrarPrimerElemento()} y la última persona formada es: ${filaDeTortillas.mostrarUltimoElemento()}`);
console.log(`Despachando a ${filaDeTortillas.eliminarElemento()}`);
console.log(`La primer persona formada es: ${filaDeTortillas.mostrarPrimerElemento()} y la última persona formada es: ${filaDeTortillas.mostrarUltimoElemento()}`);
console.log(`Despachando a ${filaDeTortillas.eliminarElemento()}`);

filaDeTortillas.agregarElemento('Juan');

console.log(`La primer persona formada es: ${filaDeTortillas.mostrarPrimerElemento()} y la última persona formada es: ${filaDeTortillas.mostrarUltimoElemento()}`);
console.log(`Despachando a ${filaDeTortillas.eliminarElemento()}`);
console.log(`La primer persona formada es: ${filaDeTortillas.mostrarPrimerElemento()} y la última persona formada es: ${filaDeTortillas.mostrarUltimoElemento()}`);
console.log(`Despachando a ${filaDeTortillas.eliminarElemento()}`);
console.log(`La primer persona formada es: ${filaDeTortillas.mostrarPrimerElemento()} y la última persona formada es: ${filaDeTortillas.mostrarUltimoElemento()}`);
console.log(`Despachando a ${filaDeTortillas.eliminarElemento()}`);
