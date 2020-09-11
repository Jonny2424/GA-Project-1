// Words array is made from words list
const wordList = ['purple', 'fan', 'family', 'twelve', 'silver', 'javascript', 'thirty', 'donate', 'dog', 'future'];

// a string is chosen randomly from words array
let randomWord = wordList[Math.floor(Math.random() * wordList.length)]

// the string is then broken down into an array. Each letter is an index.
randomWordArray = randomWord.split('');
console.log(randomWordArray);

// Jquery Variables
const randomWordBox = document.querySelector('.hidden-word-array');
const wholeBody = document.querySelector('body');


// Function for making divs for each letter of the word
for (i = 0; i < randomWordArray.length; i++) {
   randomWordBox.innerHTML += `<div class="blank"><span class="hidden-letter">${randomWordArray[i]}</span></div>`;
}

function index() {
console.log(randomWordArray[indexes[i]]);
}

// add eventListener for when a key is pressed
document.addEventListener('keypress', function() {

// Finding which index has the specific letter    
    let indexes = [];
    
    for ( let i = 0; i < randomWordArray.length; i++)
        if (randomWordArray[i] === event.key) {
            indexes.push(i);
            for (j = indexes[i]; j <= indexes.length; j++) { 
            console.log(randomWordArray[j]); 
            
            }
            
            
        } 
        
})

// IF (selceted word contains keyPress)
//  find which index from the word
//  reveal the letter of the matching index
//  add letter to usedLetters array
// ELSE IF (selceted word does NOT contains keyPress)
//  tell player its wrong
//  subtract from numberOfGuessesLeft
