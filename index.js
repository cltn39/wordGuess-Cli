const Word = require('./Word');
const inquirer = require('inquirer');

//index.js: The file containing the logic for the course of the game, which depends on Word.js and:

//Randomly selects a word and uses the Word constructor to store it

//Prompts the user for each guess and keeps track of the user's remaining guesses

const wordsArr = [
    'tiger', 'giraffe', 'monkey', 'kangaroo'
];

let guesses,
    pickedArr,
    word,
    pickedWord;

const start = () => {
    pickedArr = []
    console.log("------------------------------------------");
    console.log("This is Word-Guess-Cli demonstration");
    console.log("------------------------------------------");
    demonstrate();
}

const demonstrate = () => {
    pickedWord = "";
    guesses = 10;
    if (pickedArr.length < wordsArr.length) {
        pickedWord = getWord();
    } else {
        console.log("You got it right!");
        continuePrompt();
    }
    if (pickedWord) {
        word = new Word(pickedWord);
        word.createWord();
        makeGuess();
    }
}

const getWord = () => {
    let randomPick = Math.floor(Math.random() * wordsArr.length);
    let randomWord = wordsArr[randomPick];
    if (pickedArr.indexOf(randomWord) === -1) {
        pickedArr.push(randomWord);
        return randomWord;
    } else {
        return getWord();
    }
}

const makeGuess = () => {
    let checker = [];
    inquirer.prompt([{
            type: "input",
            name: "guessedLetter",
            message: `${word.update} \nGuess a letter! \nGuesses Left: ${guesses} \n`
        }])
        .then( (data) => {
            let checkCase = data.guessedLetter.toLowerCase();
            word.arr.forEach(Letter => {
                Letter.updateGuess(checkCase);
                checker.push(Letter.letterGuess());
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
                demonstrate();
            }
        });
}

function continuePrompt() {
    inquirer.prompt([{
            name: "continue",
            type: "list",
            message: "Would you like to play again?",
            choices: ["Yes", "No"]
        }])
        .then(data => {
            if (data.continue === "Yes") {
                start();
            } else {
                console.log("Thanks for playing!");
            }
        });
}


start();