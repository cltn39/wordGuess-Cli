class Letter {
    constructor(underlying_character, IsLetterGuessed) {
        this.underlying_character = underlying_character
        this.IsLetterGuessed = IsLetterGuessed
    }
    letterGuess () {
        //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    }
    updateGuess () {
        //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    }
}