/* Desafíos:
    Crear una función que muestre "¡Hola, mundo!" en la consola.

        function holaMundo() {
            console.log("Hola Mundo!");
        }
        holaMundo();

    Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

        function saludos(nombre) {
            console.log(`¡Hola, ${nombre}`)
        }
        saludos('Jonathan');    

    Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

        function tercera(numero) {
            return numero * 2;
        }
        console.log(`El doble del número ingresado = ${tercera(5)}` )

    Crear una función que reciba tres números como parámetros y devuelva su promedio.

        function cuarta(num1, num2, num3) {
            let suma = num1+num2+num3;
            let promedio = suma/3;
            console.log(`Promedio es igual a: ${Math.floor(promedio)}`);
        }
        cuarta(98, 100, 80);

    Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

        function mayorMenor(num1, num2) {
            if (num1 === num2 || num2 === num1) {
                console.log("Los números son iguales!");
            }
            else if (num1 > num2) {
                console.log(`El primer número ${num1} es mayor que ${num2}`);
            } else {
                console.log(`El segundo número ${num2} es mayor que ${num1}`);
            }
        }
        mayorMenor(1, 1);

    Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo. 

        function quinta(numero) {
            return numero * numero;
        }
        console.log(`El resultado es igual a ${quinta(2)}`);
*/
