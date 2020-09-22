//Array to store dice numbers
let dice = [1, 2, 3, 4, 5, 6];

//arrays to store "eyes" of rolled dices and for checkboxes
arr1 = [0,0,0,0,0];
locked = [false,false,false,false,false];

//function to throw dice, clear dices and "rebuild" the dices again for the second and third throw
function kast(){
	rolls += 1;
	var click = document.getElementById("terning").innerHTML = rolls;
	var kastterning = document.getElementById("kastterning");
	if(rolls >= 3){
		kastterning.disabled = true;
	} 
	//when the function is run, create an empty id
    document.getElementById("terning").innerHTML = '';
	
	//for loop to run the test function 5 times - each time creating the dices in the "terning" div as well as creating input checkboxes. 
	for (let i = 0; i < 5; i++){
    	var div = document.getElementById("terning");
   		var br = document.createElement("br");
   		var input = document.createElement("INPUT");
		input.setAttribute("type", "checkbox");
		input.addEventListener('click', function(){
			locked[i] = locked[i] ? false : true;
		});
		let udfald = terning();
		var print = document.createTextNode(udfald);
		
		if(!locked[i]){
			arr1[i] = udfald;
			print = document.createTextNode(udfald);
		} else{
			print = document.createTextNode(arr1[i]);
		}
    	div.appendChild(print);
    	div.appendChild(input)
    	div.appendChild(br);	
	}
	console.log(locked);
}

function terning(){
	dice = Math.random();
    dice = Math.floor(dice * 6 + 1);
    return dice;
}
let rolls = 0;
function numOfRolls(){

}
/*
var count = 0;
function clickFunc() {
  count += 1;
  var click = document.getElementById('clicks').innerHTML = count;
  var btn = document.querySelector('.btn');
  if(count >= 3) { // placed inside the click function
    btn.disabled = true;
  }
}
/*
function numOfRolls(){
	if(rolls === 6){
		window.alert("hej")
	}
}


numOfRolls();
numOfRolls();
numOfRolls();

*/