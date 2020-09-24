var arr1 = [ "LION", "RHINO", "MONKEY", "HIPPO", "GIRAF", ]
    var random = Math.floor((Math.random()*(arr1.length))); 
    
    var wordChoice = arr1[random]; // the word to guess will be chosen from the array above
    var chosenWord = new Array(wordChoice.length);
    var fail = 0;
    
    // every letter in the word is symbolized by an underscore in the guessfield
    for (var i = 0; i < chosenWord.length; i++){
        chosenWord[i] = "_ ";
    }
    
    // prints the guessfield
    function printchosenWord(){
        for (var i = 0; i < chosenWord.length; i++){
        var word = document.getElementById("word");
        var letter = document.createTextNode(chosenWord[i]);
        word.appendChild(letter);
        }
    }
    
    //checks if the the letter provided by the user matches one or more of the letters in the word
    var checkLetter = function(){
        var f = document.gameInterface; 
        var b = f.elements["guessField"]; 
        var letterGuess = b.value; // the letter provided by the user
        letterGuess = letterGuess.toUpperCase();
        for (var i = 0; i < wordChoice.length; i++){
            if(wordChoice[i] === letterGuess){
                chosenWord[i] = letterGuess + " ";
                var hit = true;
            }
        b.value = "";
        }
        
        //deletes the guessfield and replaces it with the new one
        var word = document.getElementById("word");
        word.innerHTML=""; 
        printchosenWord();
        
        // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
        if(!hit){
            var wrongLetter = document.getElementById("wrongLetter");
            var letter = document.createTextNode(" " + letterGuess);
            wrongLetter.appendChild(letter); 
            fail++;
            var hangman = document.getElementById("hangman");
        }
        
        //checks if all letters have been found
        var done = true;
        for (var i = 0; i < chosenWord.length; i++){
            if(chosenWord[i] === "_ "){
                done = false;
            }
        }
        if(done){
            window.alert("You win!");
        }
        
        //once you got six wrong letters, you lose
        if(fail === 6){
            window.alert("Uh...I guess you're dead now.");
        }
    }
    
    function init(){
        printchosenWord();
    }
    
    window.onload = init;