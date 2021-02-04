'use strict';

/* const randomNumber = docment.querySelector('.temporal'); //Número random */
let choosedNumber = document.querySelector('.input__number'); //Número introducido por la usuaria
const clueElement = document.querySelector('.clue'); //Pista
const button = document.querySelector('.form__button'); //Botón

//Declarar la variable del valor que mete la usuaria en el input
let test = document.getElementById('number').value;

//handler
function checkNumber() {
  //Condicionales para el mensaje del sorteo
  if (chosedNumer > 100) {
    clueElement.innerHTML = 'El número debe ser entre 1 y 100';
  } else if (chosedNumber < 1) {
    clueElement.innerHTML = 'El número debe ser entre 1 y 100';
  } else if ((chosedNumber = '')) {
    clueElement.innerHTML =
      'Para jugar debes introducir un número entre 1 y 100';
  } else if (chosedNumer > randomNumber) {
    clueElement.innerHTML = 'Tu número es demasiado alto';
  } else if (chosedNumber < randomNumber) {
    clueElement.innerHTML = 'Tu número es demasiado bajo';
  } else {
    clueElement.innerHTML = 'Enhorabuena has acertado';
  }
}

// función del listener
button.addEventListener('click', checkNumber); //

//CONTADOR de intentos
const botonElement = document.querySelector('.botonClick'); // Declaro la constante botón
const counterElement = document.querySelector('.form__counter'); //Declaro la constante del contador
let counter = 0; //Valor inicial del contador 0 intentos

botonElement.onclick = function () {
  counter++;
  counterElement.innerHTML = 'Número de intentos:' + counter;
};

// función del handle
// función del listener