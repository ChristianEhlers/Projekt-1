/*var lsgwoerter = [ "LION", "RHINO", "MONKEY", "HIPPO", "GIRAF", ]
    var random = Math.floor((Math.random()*(lsgwoerter.length))); 
    
    var lsgwort = lsgwoerter[random]; // the word to guess will be chosen from the array above
    var ratewort = new Array(lsgwort.length);
    var fehler = 0;
    
    // every letter in the word is symbolized by an underscore in the guessfield
    for (var i = 0; i < ratewort.length; i++){
        ratewort[i] = "_ ";
    }
    
    // prints the guessfield
    function printRatewort(){
        for (var i = 0; i < ratewort.length; i++){
        var ratefeld = document.getElementById("ratefeld");
        var buchstabe = document.createTextNode(ratewort[i]);
        ratefeld.appendChild(buchstabe);
        }
    }
    
    //checks if the the letter provided by the user matches one or more of the letters in the word
    var pruefeZeichen = function(){
        var f = document.rateformular; 
        var b = f.elements["ratezeichen"]; 
        var zeichen = b.value; // the letter provided by the user
        zeichen = zeichen.toUpperCase();
        for (var i = 0; i < lsgwort.length; i++){
            if(lsgwort[i] === zeichen){
                ratewort[i] = zeichen + " ";
                var treffer = true;
            }
        b.value = "";
        }
        
        //deletes the guessfield and replaces it with the new one
        var ratefeld = document.getElementById("ratefeld");
        ratefeld.innerHTML=""; 
        printRatewort();
        
        // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
        if(!treffer){
            var gerateneBuchstaben = document.getElementById("gerateneBuchstaben");
            var buchstabe = document.createTextNode(" " + zeichen);
            gerateneBuchstaben.appendChild(buchstabe); 
            fehler++;
            var hangman = document.getElementById("hangman");
        hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + fehler + ".png";
        }
        
        //checks if all letters have been found
        var fertig = true;
        for (var i = 0; i < ratewort.length; i++){
            if(ratewort[i] === "_ "){
                fertig = false;
            }
        }
        if(fertig){
            window.alert("You win!");
        }
        
        //once you got six wrong letters, you lose
        if(fehler === 6){
            window.alert("Uh...I guess you're dead now.");
        }
    }
    
    function init(){
        printRatewort();
    }
    
    window.onload = init;*/

    let dice = [1, 2, 3, 4, 5, 6];
    
function kast(){
   /* var terning1 = document.getElementById("terning1");
    var terning2 = document.getElementById("terning2");
    var terning3 = document.getElementById("terning3");
    var terning4 = document.getElementById("terning4");
    var terning5 = document.getElementById("terning5");
    var t1 = Math.floor(Math.random() * 6) + 1;
    var t2 = Math.floor(Math.random() * 6) + 1;
    var t3 = Math.floor(Math.random() * 6) + 1;
    var t4 = Math.floor(Math.random() * 6) + 1;
    var t5 = Math.floor(Math.random() * 6) + 1;
    terning1.innerHTML = t1;
    terning2.innerHTML = t2;
    terning3.innerHTML = t3;
    terning4.innerHTML = t4;
    terning5.innerHTML = t5;
	*/
	for (let i = 0; i < 5; i++){
	//document.getElementById('terning' + '<br>');
//terning.innerHTML = test();
   var div = document.getElementById("terning");
   var br = document.createElement("br");
   var input = document.createElement("INPUT");
input.setAttribute("type", "checkbox");
   var print = document.createTextNode(test());
       div.appendChild(print);
       div.appendChild(input)
       div.appendChild(br);
  
    }

}

function test(){
	dice = Math.random();
    dice = Math.floor(dice * 6 + 1);
    return dice;
	}