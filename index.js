const Word = require('./Word');
const inquirer = require('inquirer');

//index.js: The file containing the logic for the course of the game, which depends on Word.js and:

//Randomly selects a word and uses the Word constructor to store it

//Prompts the user for each guess and keeps track of the user's remaining guesses

const wordsPool = [
    'tiger', 'giraffe', 'monkey', 'kangaroo'
];

let guesses,
    pickedWords,
    word,
    pickedWord = "";

const wordGuess = () => {
    pickedWords = [];
    console.log("------------------------------------------");
    console.log("This is Word-Guess-Cli demonstration");
    console.log("------------------------------------------");
    demonstrate();
}

const demonstrate = () => {
    guesses = 10;
    if (pickedWords.length < wordsPool.length) {
        pickedWord = getWord();
    } else {
        console.log("You got it right!");
        continuePrompt();
    }
    if (pickedWord) {
        word = new Word(pickedWord);
        makeGuess();
    }
}

const getWord = () => {
    let randomPick = Math.floor(Math.random() * wordsPool.length);
    let randomWord = wordsPool[randomPick];
    if (pickedWords.indexOf(randomWord) === -1) {
        pickedWords.push(randomWord);
        return randomWord;
    } else {
        return getWord();
    }
}

const makeGuess = () => {
    let checker = [];
    inquirer.prompt([
        {
            name: "guessedLetter",
            message: 
                "\nGuess a letter!" +
                "\nGuesses Left: " + guesses
        }
    ])
        .then(data => {
            word.arr.forEach(Letter => {
                Letter.checkLetter(data.guessedLetter);
                checker.push(Letter.getCharacter());
            });
            if (guesses > 0 && checker.indexOf("_") !== -1) {
                guesses--;
                if (guesses === 0) {
                    console.log("YOU RAN OUT OF GUESSES! GAME OVER.");
                    continuePrompt();
                } else {
                    makeGuess();
                }
            } else {
                console.log("CONGRATULATIONS! YOU GOT THE WORD!");
            }
        });
}


wordGuess();