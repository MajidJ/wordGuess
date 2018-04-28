"use strict";

// Variables
const inquirer = require("inquirer");
const Word = require("./word.js");
const wordOptions = ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Frederic Chopin", "Johannes Brahms", "Pyotr Ilyich Tchaikovsky", "Gustav Mahler", "Claude Debussy", "Joseph Haydn"];
let wordChoice;

// Chooses a random word from the wordOptions array
let newWord = function() {
    return wordOptions[Math.floor(Math.random() * wordOptions.length)];
}
// End of newWord() function


// Asks the player if they would like to continue playing once they have finished their target word(s)
const finished = function() {
    console.log("Congrats! You figured it out!");
    const askNewGame = function() {
        inquirer.prompt({
            input: "type",
            message: "Do you want to play again with a new word? (y/n)",
            name: "playAgain"
        }).then(results => {
            if (results.playAgain === "y") {
                newGame();
            } else if (results.playAgain === "n") {
                console.log("Thanks for playing! Bye.");
            } else {
                console.log("Please answer with 'y' or 'n'");
                askNewGame();
            }
        }).catch(error => {
            if (error) throw error;
        });
    }
    askNewGame();
}
// End of finished() function


// Repeatedly asks the player to supply a single letter (a-z) to fill out the target word(s) until complete
// The player's input is verified to be a letter before continuing
const ask = function() {
    inquirer.prompt({
        input: "type",
        message: 'Guess a letter',
        name: "guessedLetter"
    }).then(results => {
        let formattedGuessedLetter = results.guessedLetter
        if (results.guessedLetter.length === 1 && results.guessedLetter.match(/[a-z]/i)) {
            wordChoice.guess(results.guessedLetter.toLowerCase());
            wordChoice.print();
            if (!wordChoice.wordComplete) {
                ask();
            } else {
                finished();
            }
        } else {
            console.log("Please input only 1 letter (a-z).");
            ask();
        }
    }).catch(error => {
        if (error) throw error;
    });
};
// End of ask() function


// A new game is initiated by choosing a new random word and building out a new Word constructor function
// Then the game begins by itiated the ask funciton for the user to supply letter guesses
const newGame = function() {
    let randomWord = newWord();
    wordChoice = new Word(randomWord);
    ask();
}
// End of newGame() function


// The inital game is initiated
newGame();
