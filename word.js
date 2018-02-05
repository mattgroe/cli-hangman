var Letter = require('./letter.js');

//letterObjArr will hold the current word where it will then get sent through a function that
//creates letter objects out of the word



module.exports = function Word(word) {
    this.word = word;
    this.returnArr = function (word, arrWord) {
        //returns the letters as a string with '-' instead
        var str = word.toString();
        var arr = str.split("");
        //for each statement of the specific string within wordsArr
        arr.forEach(character => {
            //creates a newLetter object from the Letter constructor and passes it the
            //current character from the word that needs to be guessed.
            var newLetter = new Letter(character);
            arrWord.push(newLetter);
        });
        console.log(arrWord.toString());
        return arrWord; 
    }
    this.returnBlank = function(str, blankWord) {
        var n = str.toString().length;
        for (i = 0; i < n; i++) {
            blankWord.push("-");
        }
        console.log(blankWord.toString());
        return blankWord;
    }
    this.guess = function (bool, character, word, blankWord) {
        console.log(bool + ":" + character + ":" + word + ":" + blankWord);
        function setCharAt(str, index, chr) {
            if (index > str.length - 1) return str;
            return str.substr(0, index) + chr + str.substr(index + 1);
        }
        //boolean check to see if the letter has been guessed or not...
        var n = 0;
        var newLetter = new Letter(character);
        console.log("Bool:" + bool);
        if (bool){
            newLetter.hasBeenGuessed();
            n = word.indexOf(character);
            console.log("Index: " + n);
            blankWord = setCharAt(blankWord, n, character);
            console.log("Word: " + blankWord);
            //prints out the new blankWord with updated letter...
            return blankWord;
        } else {
            newLetter.hasBeenGuessed();
            n = word.indexOf(character);
            console.log("Index: " + n);
            blankWord = setCharAt(blankWord, n, character);
            console.log("Word: " + blankWord);
            //prints out the new blankWord with updated letter...
            return blankWord;
        }
    }
};