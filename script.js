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
// Checks for correct guesses
function checkGuessRight(element) {
    for (i = 0; i < randomWord.length; i++) {
        // Runs through each index of the chosen word. If an index element matches the guess
        if (randomWord[i] === element) {
            answerArray[i] = element;
            lettersLeft--;
            randomWordBox.innerText = answerArray.join(' ');
        }
    }
}
// Checks for wrong guesses
function checkGuessWrong(element) {
    // if the letter has already been guessed, do nothing
    if (lettersUsed.includes(event.key) === true) {
    // if the letter has NOT been tried and the word does not include that letter, a strike is added
    } else if (randomWord.includes(event.key) === false) {
        strike++
        // Updates strike count on screen
        strikeCount.innerText = `Strike Count: ${strike}`;
    }
}
// End game logic
function checkforEnd() {
    // If the answer array is equal to the word, then the player wins
    if (randomWord === answerArray.join('')) {
        setTimeout(function () {
            if (confirm('You Won! Click "Ok" to play again')) {
                location.reload();
            }
        }, 300);
        // If the player hits the strike limit, they lose
    } else if (strike >= randomWord.length) {
        setTimeout(function () {
            if (confirm('You Lost! Click "Ok" to play again')) {
                location.reload();
            }
        }, 300);
    }
}
// Function waiting for key to be pressed
wholeBody.addEventListener('keypress', function () {
    let guess = event.key;
    // console.log(lettersUsed)
    // Checks if the guess is in the word
    checkGuessRight(guess);
    // Checks if guess is not in the word
    checkGuessWrong(guess);
    // prevents recieving multiple strikes on a single wrong letter
    if (lettersUsed.includes(guess) === true) {
    } else {
        lettersUsed.push(guess);
        usedLetters.innerText = `Guessed Letters: ${lettersUsed}`;
    }
    // Checks for endgame logic
    checkforEnd();


})

