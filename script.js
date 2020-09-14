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
const strikeCount = document.querySelector('.strike-count');
// 
randomWordBox.innerText = answerArray.join(' ');
strikesAllowed.innerText = `Strikes allowed: ${randomWord.length}`;
strikeCount.innerText = `Strike Count: ${strike}`
usedLetters.innerText = `Guessed Letters: ${lettersUsed}`;

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
    if (lettersUsed.includes(event.key) === true) {
        // console.log("already used");
    } else if (randomWord.includes(event.key) === false) {
    strike++
    strikeCount.innerText = `Strike Count: ${strike}`;
}
}

function checkforEnd() {
    if (randomWord === answerArray.join('')) {
        setTimeout(function () {
            if (confirm('You Won! Click "Ok" to play again')) {
                location.reload();
            }
        }, 300);

    } else if (strike >= randomWord.length) {
        setTimeout(function () {
            if (confirm('You Lost! Click "Ok" to play again')) {
                location.reload();
            }
        }, 300);
    }
}

wholeBody.addEventListener('keypress', function () {
    let guess = event.key;
    
    console.log(lettersUsed)
    checkGuessRight(guess);
    checkGuessWrong(guess);
    lettersUsed.push(guess);
    checkforEnd();


})

