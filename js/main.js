'use strict';

const numberInput =document.querySelector('.js-number');

//Paso 2.1 Declarar la constante del botón de prueba
const testButton = document.querySelector('.js-button');

//Paso 3.1 - Declaramos la constante del párrafo de HTMl donde meteremos las pistas
const tipElement = document.querySelector('.js-tip');

//Paso 4.4 - Declarar la constante del input donde meteremos el número de intentos
const counterInput = document.querySelector('.js-tries')

// Paso 1.1 - Este código no se ejecuta hasta que no llame a esta función
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

//Paso 3 - Función para "quitar los console.log que teníamos en cada condicional y que se muestren los mensajes en el HTML, necesitamos declarar una constante correspondiente a la clase del párrafo donde lo vamos a meter js-tip
function renderTip(message) {
tipElement.innerHTML = 'Pista: ' + message;
} 
//Paso 2.3 
function handleClickTestButton(event) {
//Pasos:
//2. Verificar si el número es más alto
//3. Vericifar si el número es menor
//4. Verificar si es igual
//5. Comprobación de límites 1-100
//6. Mensaje

//2.3 - 1. Cojer el número que ha puesto la usuaria (userNumberValue)
const userNumberValue = numberInput.value;
//2.3 - 1a. OJO porqué este valor es "texto" y para posteriormente compararlo con el número aleatorio necesitamos que los dos sean números, lo arreglamos con un PARSEINT
const numberValue = parseInt(userNumberValue); // debemos poner numberValue en todas las condifiones if

//2.3 - 0. Comprobar que la usuaria ha metido un número, si no lo es su valor será NaN
if (isNaN(numberValue)) {
//console.log('Debe introducir un número'); --> usamos console para comprobar que funciona, en paso 3 los sustituimos
    renderTip('Debe introducir un número');
}
//2.3 - 1. Comprobación de límites 1-100
else if (numberValue < 1 || numberValue > 100) {
renderTip('El número debe estar entre 1 y 100');
}
//2.3 - 3.  Verificar si el número es más alto
else if (numberValue > randomNumber) {
renderTip('Demasiado alto');
}
//2.3 - 4.  Verificar si el número es más bajo
else if (numberValue < randomNumber) {
renderTip('Demasiado bajo');
}
//2.3 - 5.  Verificar si son iguales, como es el último no necesita if ni la condición
else  //(numberValue === randomNumber) {
renderTip('Enhorabuena');
}

//Paso 4.3 - Creo la función que debe escuchar handleClickCounter
function handleClickCounter(event) {
triesCounter = triesCounter +1;
// lo verificamos console.log(triesCounter) y si ok lo metemos en el HTML
counterInput.value ='Número de intento:' + triesCounter; //Paso 4.5 Metemos con un value, y no con innerHTM, porqué este campo en el HTML es un input! y le le añadimos el texto que queremos que acompañe al resultado
}

//Paso 1.2 - "llamada" a la función getRandomBumber" (número máximo de) y meto el resultado en una "caja" const randomNumber
const randomNumber = getRandomNumber(100);
console.log(randomNumber)
// Paso 2.2 - Poner un Listner al botón de prueba, cuando click ejecuta la función de nombre
testButton.addEventListener('click',handleClickTestButton);

//Paso 4 - El contador de intentos
//4.1 - Declaro una variable, let porqué va a ir cambiando según le de a click
let triesCounter = 0; //al abrir la página llevaré 0 intentos

testButton.addEventListener('click',handleClickCounter); // 4.2 - Debo indicarle un listner nuevo sobre el mismo botón de prueba