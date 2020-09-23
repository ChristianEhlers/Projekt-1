//Array to store dice numbers
let dice = [1, 2, 3, 4, 5, 6];

//arrays to store "eyes" of rolled dices and for checkboxes
arr1 = [0,0,0,0,0];
locked = [false,false,false,false,false];
let rolls = 0;

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
		var btn = document.createElement("Button");
		var text = document.createTextNode("lås");
  			btn.appendChild(text); 		
		btn.classList.add("btn")
		btn.addEventListener('click', function(){
			locked[i] = locked[i] ? false : true;
			this.style.backgroundColor = "red";
		
		});
		let udfald = terning();
		var print = document.createTextNode(udfald);
		
		if(!locked[i]){
			arr1[i] = udfald;
			print = document.createTextNode(udfald);
		} else{
			print = document.createTextNode(arr1[i])
			btn.style.backgroundColor = "red"
		}

		
    	div.appendChild(print);
    	div.appendChild(btn)
		div.appendChild(br);
		
	}
	console.log(locked);
	

}

function terning(){
	dice = Math.random();
    dice = Math.floor(dice * 6 + 1);
    return dice;
}


btn = document.getElementsByTagName("button");
document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'reset' ) ){
		document.getElementById("kastterning").disabled = false;
		rolls = 0; 
		btn.style.backgroundColor = "green";

	} 
}) 