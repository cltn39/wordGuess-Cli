const Letter = require('./Letter');

class Word {
    constructor(arrNewLetter) {
        this.arrNewLetter = arrNewLetter.split("");
        this.arr = [];
    }
    rtnWord() {
        //A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
        for (let i = 0; i < this.arrNewLetter.length; i++) {
            let newLetter = new Letter(this.arrNewLetter[i]);
            this.arr.push(newLetter);
        }
    }
    callGuessFunction(guess) {
        //A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
        this.arr.forEach(Letter => {
           Letter.letterGuess(guess);  
        });
}}

module.exports = Word;