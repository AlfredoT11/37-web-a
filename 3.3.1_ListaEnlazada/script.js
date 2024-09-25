class Nodo{
    constructor(valor){
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListaEnlazada{
    constructor(){
        this.inicio = null;
        this.final = null;
    }

    /*
        Caso I: Ya hay valores en la lista enlazada
        inicio => 5 -> 8 -> 10 -> null
        Agregar valor 21
        inicio => 5 -> 8 -> 10 -> 21 -> null

        Caso II: La lista enlazada está vacía
        inicio => null
        Agregar el valor 5
        inicio => 5 -> null
    */
    agregarElemento(nuevoValor){
        if(this.inicio == null){
            // La lista enlazada está vacía
            let nuevoNodo = new Nodo(nuevoValor);
            this.inicio = nuevoNodo;
            this.final = nuevoNodo;
        }else{
            // Ya hay valores en la lista enlazada
            // Paso 1. Se crea el nuevo nodo.
            let nuevoNodo = new Nodo(nuevoValor);

            // Paso 2. El valor siguiente del final de la lista enlazada apunta al nuevo nodo.
            this.final.siguiente = nuevoNodo;

            // Paso 3. El final ahora apuntará al nuevo nodo
            this.final = nuevoNodo;
        }
    }

    buscar(valorABuscar){
        if(this.inicio == null){
            return false;
        }
        // Paso 1. Apuntamos al inicio de la lista enlazada.
        let aux = this.inicio;

        // Paso 2. Verificamos si ya terminamos de recorrer la lista enlazada.
        while(aux != null){
            // Paso 3. Verificar si el valor del nodo es el que estoy buscando
            if(aux.valor == valorABuscar) return true;

            // Paso 4. Movernos al siguiente elemento.
            aux = aux.siguiente;
        }
        return false;
    }

    /*
        Caso 0: La lista enlazada está vacía.
        Caso I: El valor a eliminar está en el nodo de inicio.
            Caso especial: La lista enlazada es de un solo elemento.
        Caso II: El valor a eliminar no está en el inicio ni en el final.
        Caso III: El valor a eliminar está en el nodo final.
    */
    eliminar(valorABuscar){
        
        // Caso 0. Lista vacía
        if(this.inicio == null){
            return;
        }

        // Caso I. El valor a eliminar está en el nodo de inicio.
        if(this.inicio.valor == valorABuscar){
            // Caso especial. La lista enleazada es de un solo elemento.
            if(this.inicio == this.final){
                this.final = null;
            }
            this.inicio = this.inicio.siguiente;
            return;
        }

        let aux = this.inicio;
        while(aux.siguiente != null){
            // Caso III. El valor a eliminar está al final
            if(aux.siguiente == this.final && this.final.valor == valorABuscar){
                this.final = aux;
                this.final.siguiente = null;
                return;
            }


            // Caso II. El valor a eliminar está en medio
            if(aux.siguiente.valor == valorABuscar){
                aux.siguiente = aux.siguiente.siguiente;
                return;
            }

            aux = aux.siguiente;
        }
    }

    mostrar(){
        if(this.inicio == null){
            return;
        }
        // Paso 1. Apuntamos al inicio de la lista enlazada.
        let aux = this.inicio;

        // Paso 2. Verificamos si ya terminamos de recorrer la lista enlazada.
        while(aux != null){
            // Paso 3. Mostrar el valor.
            console.log(aux.valor);

            // Paso 4. Movernos al siguiente elemento.
            aux = aux.siguiente;
        }
    }

}


let listaDeNumeros = new ListaEnlazada();
listaDeNumeros.agregarElemento({nombre: 'Pedro', apellido: 'Pérez'}); // Caso II: Aún no hay valores en la lista enlazada.
listaDeNumeros.agregarElemento(300); // Caso I: Se agrega un nuevo valor cuando ya hay valores.
listaDeNumeros.agregarElemento(true); // Caso I: Se agrega un nuevo valor cuando ya hay valores.
listaDeNumeros.agregarElemento(['Manzana', 'Plátano']); // Caso I: Se agrega un nuevo valor cuando ya hay valores.
listaDeNumeros.agregarElemento(82); // Caso I: Se agrega un nuevo valor cuando ya hay valores.
listaDeNumeros.agregarElemento('Hola mundo'); // Caso I: Se agrega un nuevo valor cuando ya hay valores.



console.log('Lista enlazada: ');
listaDeNumeros.mostrar();

let valorABuscar;
valorABuscar = 300;
if(listaDeNumeros.buscar(valorABuscar)){
    console.log(`El valor ${valorABuscar} SÍ se encuentra en la lista enlazada`);
}else{
    console.log(`El valor ${valorABuscar} NO se encuentra en la lista enlazada`);
}

valorABuscar = 10008000;
if(listaDeNumeros.buscar(valorABuscar)){
    console.log(`El valor ${valorABuscar} SÍ se encuentra en la lista enlazada`);
}else{
    console.log(`El valor ${valorABuscar} NO se encuentra en la lista enlazada`);
}

valorABuscar = 29;
if(listaDeNumeros.buscar(valorABuscar)){
    console.log(`El valor ${valorABuscar} SÍ se encuentra en la lista enlazada`);
}else{
    console.log(`El valor ${valorABuscar} NO se encuentra en la lista enlazada`);
}

let listaNumeros2 = new ListaEnlazada();
listaNumeros2.agregarElemento(5);
listaNumeros2.agregarElemento(7);
listaNumeros2.agregarElemento(8);
listaNumeros2.agregarElemento(5);
listaNumeros2.agregarElemento(1);
listaNumeros2.agregarElemento(24);

console.log('Lista enlazada original: ');
listaNumeros2.mostrar();

console.log('Lista después de eliminar el primer elemento: ');
listaNumeros2.eliminar(5);
listaNumeros2.mostrar();

console.log('Lista después de eliminar un elemento a la mitad: ');
listaNumeros2.eliminar(1);
listaNumeros2.mostrar();


console.log('Lista después de eliminar el último elemento: ');
listaNumeros2.eliminar(24);
listaNumeros2.mostrar();