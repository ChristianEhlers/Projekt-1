//Funktion til at generere et tilfældigt tal mellem 1 og 1000
let randomNumber = Math.floor(Math.random() * 1000) +1;
console.log(randomNumber);
console.log('SLET CONSOLE LOG NÅR SPILLET VIRKER');

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

