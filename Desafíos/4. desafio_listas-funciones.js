//Desafios con arrays (listas)
/* 
    Crea una lista vacía llamada "listaGenerica".

        let listaGenerica = [];

    //Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

        let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

    //Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

        lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

    //Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

        function listaLenguajes () {
            return console.log(lenguagesDeProgramacion);
        }
    
    //Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

        function mostrarLenguajesInverso(lenguajesDeProgramacion) {
            for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
                console.log(lenguajesDeProgramacion[i]);
            }
        }

    //Crea una función que calcule el promedio de los elementos en una lista de números.

        let listaNotas1 = [69, 78, 83, 74];

        function calcularPromedioNotas (listaNotas) {
            let suma = 0;
            for (let i = 0; i < listaNotas.length; i++) {
                suma += listaNotas[i];
            }
            let promedio = suma / listaNotas.length;
            return promedio;
        }

        console.log(calcularPromedioNotas(listaNotas1));

    //Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

        let listaNumeros = [1000, 1, 25, 50, 88];

        function mostrarMinMaxDeLista(listaNumeros) {
            let min = Math.min(...listaNumeros);
            let max = Math.max(...listaNumeros);
            return console.log(`El número mayor es ${max} mientras que el menor = ${min}`);
        }

        mostrarMinMaxDeLista(listaNumeros);

    //Crea una función que devuelva la suma de todos los elementos en una lista.

        let listaNumeros = [1, 2, 3, 4, 5, 5];
        function sumaElementosLista(array) {
        let suma = 0;
        for (let i = 0; i < array.length; i++) {
            suma += array[i];
        }
        return console.log(suma);
        }
        console.log(sumaElementosLista(listaNumeros));

    //Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

        let lista = ["Pera", "Banana", "Chocolate", "Sandia"];

        function filtroLista(elemento) {
            let elementoBuscado = lista.indexOf(elemento);
            if (elementoBuscado === -1) {
                return -1;
            } else {
                return elementoBuscado;
            }
        }

        console.log(filtroLista("Sandia"));

    //Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

        let lista1 = [12, 12, 12], lista2 = [12, 12, 12];

        function sumaListas(lista1, lista2) {
            let lista3 = [];
            for (let i = 0; i < lista1.length; i++){
                lista3.push(lista1[i]+lista2[i]);
            }
            return console.log(lista3);
        }

        sumaListas(lista1, lista2);

    //Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número. 

        let lista = [12, 12];
        function fncListaCuadrado(array) {
            let listaCuadrado = [];
            for (let i = 0; i < array.length; i++) {
                listaCuadrado.push(array[i]*array[i]);
            }
            return console.log(listaCuadrado);
        }
        fncListaCuadrado(lista);
*/
