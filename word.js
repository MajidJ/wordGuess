const Letter = require("./letter.js");

const Word = function(word) {
    this.wordComplete = false;
    this.letterArray = word.split("").map(function(elem) {
        return new Letter(elem);
    });
    this.print = function() {
        console.log(this.letterArray.join(""));
    }
    this.guess = function(guessedLetter) {
        this.letterArray.map(elem => {
            elem.check(guessedLetter);
        })
        this.checkIfAllLettersGuessed = function() {
            this.lettersGuessedBooleanArray = [];
            this.letterArray.map(elem => {
                this.lettersGuessedBooleanArray.push(elem.guessed);
            });
            this.isTrue = function(bool) {
                return bool === true;
            }
            if (this.lettersGuessedBooleanArray.every(this.isTrue)) {
                this.wordComplete = true;
            }
        }
        this.checkIfAllLettersGuessed();
    }
}

module.exports = Word;
