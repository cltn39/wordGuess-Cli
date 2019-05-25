const Letter = require('./Letter');

class Word {
    constructor(word) {
        this.word = word
        this.arr = [];
        
        this.createWord = () => {
            let wordArr = this.word.split("");
            for (let i = 0; i < wordArr.length; i++) {
                let newLetter = new Letter(wordArr[i]);
                this.arr.push(newLetter);
            }
        }
        
    }
    
    rtnWord() {
        //A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
        const result = [];
        this.arr.forEach(Letter => {
            result.push(
                Letter.letterGuess());
        });
        return result.join("")
    }
    callGuessFunction(guess) {
        //A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
        this.arr.forEach(Letter => {
            Letter.letterGuess(guess);
        });
    }
}

module.exports = Word;

// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)