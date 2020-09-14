// Words array is made from words list
function chooseRandomWord() {
    const wordList = ['purple', 'fan', 'family', 'twelve', 'silver', 'javascript', 'thirty', 'donate', 'dog', 'future'];
    // a string is chosen randomly from words array
    let randomWord = wordList[Math.floor(Math.random() * wordList.length)]
    return randomWord;
};

// Assigning the word to output of the function
let randomWordOutput = chooseRandomWord();
// Initial strike count
let strike = 0;
// Empty array used for capturing guesses
let lettersUsed = [];
// Wins counter
let score = 0;

// Answer array is made with underscores. The length is dependent on the chose word.
// The array is initially shown to the player on loading the page. It shows how many
// letters the word. "fan" becomes "_ _ _"
let answerArray = [];
function createAnswerArray() {

    for (i = 0; i < randomWordOutput.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}

console.log(createAnswerArray());
console.log(randomWordOutput);


// Jquery Variables from HTML
const randomWordBox = document.querySelector('.hidden-word-array');
const wholeBody = document.querySelector('body');
// const strikesAllowed = document.querySelector('.strikes-allowed');
const usedLetters = document.querySelector('.letters-guessed');
const strikeCount = document.querySelector('.strike-count');
const gamesWon = document.querySelector('.score');
const hangmanImages = document.querySelector('img');
// Setting the innertext of different divs in the HTML
randomWordBox.innerText = answerArray.join(' ');
// strikesAllowed.innerText = `Strikes allowed: ${randomWordOutput.length}`;
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
    if (lettersUsed.includes(event.key) === true) {
        // if the letter has NOT been tried and the word does not include that letter, a strike is added
    } else if (randomWordOutput.includes(event.key) === false) {
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
            break;
        case strike = 2:
            hangmanImages.src = 'images/Hangman Pics/pixil-frame-0 (2).png';
            break;
        case strike = 3:
            hangmanImages.src = 'images/Hangman Pics/pixil-frame-0 (3).png';
            break;
        case strike = 4:
            hangmanImages.src = 'images/Hangman Pics/pixil-frame-0 (4).png';
            break;
        case strike = 5:
            hangmanImages.src = 'images/Hangman Pics/pixil-frame-0 (5).png';
            break;
        case strike = 6:
            hangmanImages.src = 'images/Hangman Pics/pixil-frame-0 (6).png';
            break;

    }
}

// End game logic
function checkforEnd() {
    // If the answer array is equal to the word, then the player wins
    if (randomWordOutput === answerArray.join('')) {
        setTimeout(function () {
            if (confirm('You Won! Click "Ok" to play again or "Cancel" to refresh page')) {
                // Resets all values and adds 1 to the score
                randomWordOutput = chooseRandomWord();
                answerArray = [];
                createAnswerArray();
                console.log(answerArray);
                console.log(randomWordOutput);
                strike = 0;
                lettersUsed = [];
                randomWordBox.innerText = answerArray.join(' ');
                // strikesAllowed.innerText = `Strikes allowed: ${randomWordOutput.length}`;
                strikeCount.innerText = `Strike Count: ${strike}`
                usedLetters.innerText = `Guessed Letters: ${lettersUsed}`;
                score = score + 1;
                gamesWon.innerText = `Games Won: ${score}`;
                hangmanImages.src = 'images/Hangman Pics/pixil-frame-0 (0).png';
            } else {
                location.reload();
            }
        }, 400);
        // If the player hits the strike limit, they lose
    } else if (strike >= 6) {
        setTimeout(function () {
            if (confirm('You Lost! Click "Ok" to play again or "Cancel" to refresh page')) {
                // All values are rest
                randomWordOutput = chooseRandomWord();
                answerArray = [];
                createAnswerArray();
                console.log(answerArray);
                console.log(randomWordOutput);
                strike = 0;
                lettersUsed = [];
                randomWordBox.innerText = answerArray.join(' ');
                // strikesAllowed.innerText = `Strikes allowed: ${randomWordOutput.length}`;
                strikeCount.innerText = `Strike Count: ${strike}`
                usedLetters.innerText = `Guessed Letters: ${lettersUsed}`;
                hangmanImages.src = 'images/Hangman Pics/pixil-frame-0 (0).png';

            } else {
                location.reload();
            }
        }, 400);
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

