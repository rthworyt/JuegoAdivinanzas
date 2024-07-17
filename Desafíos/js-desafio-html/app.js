let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";

function consoleClick() {
    console.log("El botón fue clicado");
}

function promptClick() {
    let ciudadBrasil = prompt("¿Digite alguna ciudad en Brazil?");
    alert(`Estuve en ${ciudadBrasil} y me acordé de ti`);
}

function alertClick() {
    alert("Yo amo JS");
}

function sumaClick() {
    let num1 = parseInt(prompt("Digite el primer número:"));
    let num2 = parseInt(prompt("Digite el segundo número:"));
    alert(`El resultado de la suma es: ${num1+num2}`);
}