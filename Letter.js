class Letter {
    constructor(underlying_character) {
        this.underlying_character = underlying_character
        this.IsLetterGuessed = false;
    }
    letterGuess() {
        //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
        if (!this.IsLetterGuessed) {
            return '_';
        } else if (this.IsLetterGuessed) {
            return this.underlying_character;
        } else {
            console.error("error occured!")
        }
    }
    updateGuess(choice) {
        //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
        if (choice === this.underlying_character) {
            this.IsLetterGuessed =true;
        }
    }
}

module.exports = Letter;
