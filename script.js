// Array containing a word and its hint
const wordList = [
    { word: 'halo', hint: 'spartan 118' },
    { word: 'mario', hint: 'theres a million games named after me' },
    { word: 'tetris', hint: 'blocks on blocks on blocks' },
    { word: 'fortnite', hint: 'build and shoot' },
    { word: 'minecraft', hint: 'everything you build is blocky' },
    { word: 'sims', hint: 'controling their lives' },
    { word: 'portal', hint: 'infinite loops' },
    { word: 'battlefield', hint: 'cod wannabe with 64 players' },
    { word: 'zelda', hint: 'triforce' },
    { word: 'pokemon', hint: 'gotta catch them all' }
]
// Empty arrays for splitting words and hints
let listOfWords = [];
let listOfHints = [];
// For loop runs through the wordList and breaks aparts words and hints
// and assigns them to an array
for (i = 0; i < wordList.length; i++) {
    let x = wordList[i].word;
    let y = wordList[i].hint;
    listOfWords.push(x);
    listOfHints.push(y);
}

// Function for choosing the random word
function chooseRandomWord() {
    let indexOfWord = Math.floor(Math.random() * wordList.length);
    // a string is chosen randomly from words array
    let randomWord = listOfWords[indexOfWord];
    return randomWord;
};

// Assigning the word to output of the function
let randomWordOutput = chooseRandomWord();
// Finds index of the word in order to assign the correct hint
let indexOfWordForHint = listOfWords.indexOf(randomWordOutput);


// Initial strike count
let strike = 0;
// Empty array used for capturing guesses
let lettersUsed = [];
// Wins counter
let score = 0;

// Answer array is made with underscores. The length is dependent on the chose word.
// The array is initially shown to the player on loading the page. It shows how many
// letters the word. "fan" becomes "_ _ _".
let answerArray = [];
function createAnswerArray() {

    for (i = 0; i < randomWordOutput.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}
createAnswerArray();

// Jquery Variables from HTML
const randomWordBox = document.querySelector('.hidden-word-array');
randomWordBox.innerText = answerArray.join(' ');
const wholeBody = document.querySelector('body');

// const strikesAllowed = document.querySelector('.strikes-allowed');
const usedLetters = document.querySelector('.letters-guessed');
const strikeCount = document.querySelector('.strike-count');
const gamesWon = document.querySelector('.score');
const hangmanImages = document.querySelector('img');
const hint = document.querySelector('h3');
const hardModeSwitch = document.querySelector('#hard-mode');
const mainTitle = document.querySelector('h1');

// Setting the innertext of different divs in the HTML
randomWordBox.innerText = answerArray.join(' ');
strikeCount.innerText = `Strike Count: ${strike}`
usedLetters.innerText = `Guessed Letters: ${lettersUsed}`;
gamesWon.innerText = `Games Won: ${score}`

// Checks for correct guesses
function checkGuessRight(element) {
    for (i = 0; i < randomWordOutput.length; i++) {
        // Runs through each index of the chosen word. If an index element matches the guess, 
        // set the same index in answerArray to the guess
        if (randomWordOutput[i] === element) {
            answerArray[i] = element;
            // Updates the page to show the correct guesses
            randomWordBox.innerText = answerArray.join(' ');
        }
    }
}
// Checks for wrong guesses
function checkGuessWrong(element) {
    // if the letter has already been guessed, do nothing
    if (lettersUsed.includes(element) === true) {
        // if the letter has NOT been tried and the word does not include that letter, a strike is added
    } else if (randomWordOutput.includes(element) === false) {
        strike++
        // Updates strike count on screen
        strikeCount.innerText = `Strike Count: ${strike}`;
        pictureSet();
    }
}
// Function changes hangman picture based on how many strikes
function pictureSet() {
    switch (strike) {

        case strike = 1:
            hangmanImages.src = 'images/Hangman Pics/pixil-frame-0 (1).png';
            hint.innerText = "You're not that lucky!";
            break;
        case strike = 2:
            hangmanImages.src = 'images/Hangman Pics/pixil-frame-0 (2).png';
            break;
        case strike = 3:
            hangmanImages.src = 'images/Hangman Pics/pixil-frame-0 (3).png';
            hint.innerText = "Ya did it again...";
            break;
        case strike = 4:
            // strike 4 is when the hints pop up
            hangmanImages.src = 'images/Hangman Pics/pixil-frame-0 (4).png';
            hint.innerText = `Hint: ${listOfHints[indexOfWordForHint]}`
            hint.style.color = 'blue';
            break;
        case strike = 5:
            hangmanImages.src = 'images/Hangman Pics/pixil-frame-0 (5).png';
            break;
        case strike = 6:
            hangmanImages.src = 'images/Hangman Pics/pixil-frame-0 (6).png';
            break;

    }
}

// Added a function for reseting the board when the "ok" button is clicked
function resetBoard() {
    randomWordOutput = chooseRandomWord();
    indexOfWordForHint = listOfWords.indexOf(randomWordOutput);
    answerArray = [];
    createAnswerArray();
    strike = 0;
    lettersUsed = [];
    randomWordBox.innerText = answerArray.join(' ');
    strikeCount.innerText = `Strike Count: ${strike}`;
    usedLetters.innerText = `Guessed Letters: ${lettersUsed}`;
    hangmanImages.src = 'images/Hangman Pics/pixil-frame-0 (0).png';
    hint.innerText = 'Hit any key to begin!';
    hint.style.color = 'white';
    mainTitle.innerText = 'Can you guess me?';
    hint.innerText = 'Hit any key to begin!';
}

// End game logic
function checkforEnd() {
    // If the answer array is equal to the word, then the player wins
    if (randomWordOutput === answerArray.join('')) {
        setTimeout(function () {
            if (confirm('You Won! Click "Ok" to play again or "Cancel" to refresh page')) {
                resetBoard();
                score = score + 1;
                gamesWon.innerText = `Games Won: ${score}`;
            } else {
                location.reload();
            }
        }, 400);
        // If the player hits the strike limit, they lose
    } else if (strike >= 6) {
        setTimeout(function () {
            if (confirm('You Lost! Click "Ok" to play again or "Cancel" to refresh page')) {
                resetBoard();
            } else {
                location.reload();
            }
        }, 400);
    }
}
// Function waiting for key to be pressed
wholeBody.addEventListener('keypress', function () {
    let guessKey = event.key;
    // Forces all letters to lowercase
    let guess = guessKey.toLowerCase();
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
// Added hard mode when the player clicks on my name in the corner
hardModeSwitch.addEventListener('click', function (event) {
    event.preventDefault();
    strike = 5;
    strikeCount.innerText = `Strike Count: ${strike}`
    mainTitle.innerText = 'HARD MODE!'
    hint.innerText = 'One strike and you lose';
})

