'use strict';

const selectNumber = document.querySelector('.number');
console.log(selectNumber);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }
