"use strict"

// Constructor function for each letter in the target word(s)
const Letter = function(letter) {
    this.letter = letter;
    this.guessed = false;

    // A function that determines what to display and accounts for spaces in target word(s)
    this.toString = function() {
        this.display = "_";
        if (this.guessed || this.letter === " ") {
            this.display = letter;
            return this.display;
        } else {
            return this.display;
        }
    };

    // A function that marks the guessed boolean as true if the char is guessed 
    // and accounts for spaces in target word(s)
    this.check = function(guessedLetter) {
        if (this.letter.toLowerCase() === guessedLetter || this.letter === " ") {
            this.guessed = true;
        }
    };
};

module.exports = Letter;