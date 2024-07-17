//Desafíos:

//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function imc(altura, peso) {
  const imc = peso / (altura * altura);
  return Math.round(imc);
}

console.log(imc(1.8, 76));

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorizar(numero) {
  resultado = numero;

  if (numero == 1 || numero == 0) return 1;

  while (numero > 1) {
    numero--;
    resultado = resultado * numero;
  }
  return resultado;
}

console.log(factorizar(5));

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function dolarPesoDom(monto) {
  return monto * 59;
}

console.log(dolarPesoDom(600));

//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function areaPerimetroRectangulo(altura, anchura) {
  let area = altura * anchura;
  let perimetro = altura * 2 + anchura * 2;
  return `El área del rectángulo es ${area} y el perímetro es ${perimetro}`;
}
console.log(areaPerimetroRectangulo(5, 10));

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function areaPerimetroCirculo(radio) {
  const pi = 3.14;
  let area = radio * radio * pi;
  let perimetro = 2 * pi * radio;
  return console.log(
    `El área del círculo es ${area} y el perímetro es ${Math.round(perimetro)}`
  );
}

areaPerimetroCirculo(5);

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaMultiplicacion(numero) {
  let num2 = 10;
  while (num2 > 0) {
    console.log(`${numero} x ${num2} = ${numero * num2}`);
    num2--;
  }
}

tablaMultiplicacion(5);
