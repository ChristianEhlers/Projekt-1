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
guessField.focus();

// funktion til at tjekke om en spillers gæt er korrekt eller ej.
function checkGuess() {
    let userGuess = Number(guessField.value);
    //userGuess.setAttribute('min', '0');
    //userGuess.setAttribute('max', '1000');
    if (guessCount === 1) {
        guesses.textContent = 'Forrige gæt: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Tillykke! Du gættede rigtigt!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'GAME OVER!';
        setGameOver();
    } else {
        lastResult.textContent = 'Forkert!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Det sidste gæt var for lavt!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Det sidste gæt var for højt!';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

// Tilføj eventListener til Submit knappen
guessSubmit.addEventListener('click', checkGuess);

//Tilføj GameOver funktionen ved korrekt gæt eller brug af 10 forsøg
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start et nyt spil';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

//funktion til at nulstille spillet
function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

//Cookie functionality setup
function createCookie(name, value, days) {
    let expires;
    let samesite = "; sameSite=lax";            // nml
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + samesite + "; path=/"; // nml
}

function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

//Cookie execution
const isValid = function(e) {
    let name = document.formal.name;
    let born = document.formal.born;
    if (born.value === "" || name.value === "") {
        window.alert("Both fields must be filled in");
        name.focus();
        e.preventDefault();
        return false;
    } else {
        createCookie(name.value + born.value, 42, 0.00694444);
        return true;
    }
}

const getstarted = function() {
    console.log(`Cookie niels1945-11-25? ${readCookie('niels1945-11-25')}`);
    console.log(`Cookies: ${document.cookie}`)
    document.formal.addEventListener('submit', isValid);
}
window.addEventListener('load', getstarted);