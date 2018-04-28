const inquirer = require("inquirer");
const Word = require("./word.js");
const wordOptions = ["apple", "boss", "boom", "tree", "cheese"];
let wordChoice;

let newWord = function() {
    return wordOptions[Math.floor(Math.random() * wordOptions.length)];
}

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

const ask = function() {
    inquirer.prompt({
        input: "type",
        message: 'Guess a letter',
        name: "guessedLetter"
    }).then(results => {
        let formattedGuessedLetter = results.guessedLetter
        if (results.guessedLetter.length === 1) {
            wordChoice.guess(results.guessedLetter);
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


const newGame = function() {
    let randomWord = newWord();
    console.log('executed 2', randomWord);
    wordChoice = new Word(randomWord);
    ask();
}

newGame();
