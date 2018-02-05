// requiring the inquirer npm
var inquirer = require('inquirer');

module.exports = function Letter(char) {
    this.char = char.toString();
    this.bool = false;
    //checks to see if that letter has been guessed
    this.hasBeenGuessed = function () {
        //boolean statement to check to see if the letter has been guessed or not.
        this.bool ?
            [console.log("Has already been guessed")] :
            [console.log('Has not been guessed')];
    }
    //checks to see if the char is in the word/phrase
    this.check = function (char, word) {
        console.log('User input: ' + char);
        //boolea statement to check to see if the char is within the word to guess.
        word.indexOf(char) > -1 ?
            [this.bool = true, console.log('Correct Guess')] :
            [this.bool = true, console.log("Wrong Guess")];

    }
}