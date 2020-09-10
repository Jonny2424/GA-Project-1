# GA-Project-1
## Title of game
Can you save me!

## Description

The game is basic hangman. The game will automatically chose a word for you. Guesses are limited by the word size or difficulty selected. An image on the side will appear as wrong letters are typed. If the player guesses the word correctly under the amount of guesses given, he or she wins. If the player uses all the guesses and the word is not found, he or she loses.

## Function
- computer selects word
- waits for input
- compares user input to selected letter
- if a match occurs, the letter is shown
- if the guess does not match, the user recieves a strike

## Features
- user can choose difficulty (length of words, sentances, and numbers)

- body parts appear on post when a stike occurs
- the game keeps track of how many times you win

## Object of the game
- Guess the word without hitting the strike limit

## Wireframe

![wireframe](https://i.imgur.com/RhbsDnn.png)

## MVP

- page loads with a word already chosen
- selected word is in an array
- waits for user to type a letter
- checks user input to a value in the array
- if there is a match, the letter is shown
- if there is no match, the letters stay hidden and a stike is added to you.
- when a strike is made, a body part is loaded onto the post picture
- player guesses until either the total word is guessed before the maximum amount of strikes **or** the maximum stike limit is reached and they lose.

## Post MVP
- add music, posibbly counting down sounds on harder levels
- one life mode
- add a timer