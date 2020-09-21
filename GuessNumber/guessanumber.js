//Funktion til at generere et tilfældigt tal mellem 1 og 1000
let randomNumber = Math.floor(Math.random() * 1000) +1;
console.log(randomNumber);
console.log('SLET CONSOLE LOG NÅR SPILLET VIRKER');

// variabler til at gemme data som spillet skal bruge
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

// funktion til at tjekke om en spillers gæt er korrekt eller ej.
function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'GAME OVER!';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last Guess was too high!';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

