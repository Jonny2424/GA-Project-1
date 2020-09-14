// Words array is made from words list
const wordList = ['purple', 'fan', 'family', 'twelve', 'silver', 'javascript', 'thirty', 'donate', 'dog', 'future'];

// a string is chosen randomly from words array
let randomWord = wordList[Math.floor(Math.random() * wordList.length)]
console.log(randomWord);
// Array for knowing how many letters are left
let lettersLeft = randomWord.length;
let strike = 0
let lettersUsed = [];

// this array is made to hide the chosen word with underscores
let answerArray = [];
for (i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
}


// Jquery Variables
const randomWordBox = document.querySelector('.hidden-word-array');
const wholeBody = document.querySelector('body');
const strikesAllowed = document.querySelector('.strikes-allowed');
const usedLetters = document.querySelector('.letters-guessed');
const strikeCount = document.querySelector('.stike-count');
// 
randomWordBox.innerText = answerArray.join(' ');
strikesAllowed.innerText = `Strikes allowed: ${randomWord.length}`;

function checkGuessRight(element) {
    for (i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === element) {
            answerArray[i] = element;
            lettersLeft--;
            randomWordBox.innerText = answerArray.join(' ');
        }
    }
}

function checkGuessWrong(element) {
    if (randomWord.includes(event.key) === false) {
        strike++
    }
}

function checkforEnd() {
    if (lettersLeft <= 0) {
        console.log('you won')
    } else if (strike >= randomWord.length) {
        console.log(strike);
        console.log('you lost')
    }
}

wholeBody.addEventListener('keypress', function () {
    let guess = event.key;
    lettersUsed.push(guess);
    usedLetters.innerText = `Guessed Letters: ${lettersUsed}`;
    checkGuessRight(guess);
    checkGuessWrong(guess);
    checkforEnd();


})

