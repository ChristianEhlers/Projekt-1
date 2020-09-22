let dice = [1, 2, 3, 4, 5, 6];
arr1 = [0,0,0,0,0];
locked = [false,false,false,false,false];

function kast(){
    document.getElementById("terning").innerHTML = '';
	
	for (let i = 0; i < 5; i++){
<<<<<<< HEAD
	/*document.getElementById('terning' + '<br>');
	terning.innerHTML = test();
    }*/
    var div = document.getElementById("terning");
   var br = document.createElement("br");
   var input = document.createElement("INPUT");
input.setAttribute("type", "checkbox");
   var print = document.createTextNode(test());
       div.appendChild(print);
       div.appendChild(input)
       div.appendChild(br);
}
=======
    	var div = document.getElementById("terning");
   		var br = document.createElement("br");
   		var input = document.createElement("INPUT");
		input.setAttribute("type", "checkbox");
		let udfald = test();
		var print = document.createTextNode(udfald);
		if(!locked[i])
			arr1[udfald]++;
    	div.appendChild(print);
    	div.appendChild(input)
    	div.appendChild(br);
	}
>>>>>>> 0cca5294b2e8c7787d61bd731a8b0922a42aaa40
}

function test(){
	dice = Math.random();
    dice = Math.floor(dice * 6 + 1);
    return dice;

	}

console.log("hello");

