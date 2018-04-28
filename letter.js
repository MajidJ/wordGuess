"use strict";


const Letter = function(letter) {
    this.letter = letter;
    this.guessed = false;
    this.toString = function() {
        this.display = "_ ";
        if (this.guessed) {
            this.display = letter + " ";
            return this.display;
        } else {
            return this.display;
        }
    }
    this.check = function(guessedLetter) {
        if (this.letter === guessedLetter) {
            this.guessed = true;
        }
    };
};

module.exports = Letter;
