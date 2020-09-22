let dice = [1, 2, 3, 4, 5, 6];
arr1 = [0,0,0,0,0];
locked = [false,false,false,false,false];

function kast(){
    document.getElementById("terning").innerHTML = '';
	
	for (let i = 0; i < 5; i++){
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
}

function test(){
	dice = Math.random();
    dice = Math.floor(dice * 6 + 1);
    return dice;
	}