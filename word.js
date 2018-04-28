"use strict";

// Variables
const Letter = require("./letter.js");

// Constructor function for the target word(s)
const Word = function(word) {
    this.wordComplete = false;
    
    // Splits the target word(s) into separate objects for each letter using the Letter constructor function
    this.letterArray = word.split("").map(function(elem) {
        return new Letter(elem);
    });

    // Utalizes join() and the corresponding Letter constructor function's toString sub-function
    // to determine what is logged out in the console
    this.print = function() {
        console.log(this.letterArray.join(" ") + "\n");
    }

    // Checks if the guessed letter is present and/or is displayed in the console
    // The target word(s) is then checked for completion
    this.guess = function(guessedLetter) {
        this.letterArray.map(elem => {
            elem.check(guessedLetter);
        })
        if (this.letterArray.join("") === word) {
            this.wordComplete = true;
        }
    }
}

module.exports = Word;
