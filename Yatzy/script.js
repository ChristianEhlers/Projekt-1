//Array to store dice numbers
let dice = [1, 2, 3, 4, 5, 6];
let magic = [0,0,0,0,0,0,0];
let potscore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

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
		magic[udfald]++;
		
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

		// her anbringes kastet i scoreformet array - udregningen
		potscore[0] = magic[1] * 1;
		potscore[1] = magic[2] * 2;
		potscore[2] = magic[3] * 3;
		potscore[3] = magic[4] * 4;
		potscore[4] = magic[5] * 5;
		potscore[5] = magic[6] * 6;	// antal point fra 6'ere
	
		potscore[6] = pair();
		potscore[7] = twoPairs();
		potscore[8] = threeSame();
		potscore[9] = fourSame();
		potscore[10] = smallStraight();
		potscore[11] = bigStraight();
		potscore[12] = house();
		potscore[13] = chance();
		potscore[14] = yatzy();
	}
	console.log(locked);
	console.log(potscore[0])
	console.log(pair())
}

function terning(){
	dice = Math.random();
    dice = Math.floor(dice * 6 + 1);
    return dice;
}
// prints result of 1 par in table 
document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'par1' ) ){
		var tdg = document.getElementById("par1");
		var tt = document.createTextNode(pair());
		tdg.appendChild(tt);
		console.log("1 par")
	} 
})
// prints result of 3 ens in table 
document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'ens3' ) ){
		var tde = document.getElementById("ens3");
		var tt = document.createTextNode(threeSame());
		tde.appendChild(tt);
		console.log("3 ens")
	} 
})
// prints result of 4 ens in table 

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'ens4' ) ){
		var tde = document.getElementById("ens4");
		var tt = document.createTextNode(fourSame());
		tde.appendChild(tt);
		console.log("4 ens")
	} 
})

// reset dices when clicking on a points field.

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'reset' ) ){
		document.getElementById("kastterning").disabled = false;
		rolls = 0; 
		document.getElementById("terning").innerHTML = '<p>0</p>' + '<p>0</p>' + '<p>0</p>' + '<p>0</p>' + '<p>0</p>' ;
		locked = [false,false,false,false,false];
		magic = [0,0,0,0,0,0,0];
		let a = document.getElementsByClassName('btn');
		for(let i = 0; i < 5; i++) {
			a[i].style.backgroundColor = 'white';
		}
		
	} 
})

// calculate scores in the bottom half of the Yatzy board
// calculate pairs
function pair() {
	for (let i = magic.length -1; i >= 0; i--) {
		if (magic[i] >= 2) {
			return i * 2;
		}
	}
}

function twoPairs() {
	for (let i = magic.length -1; i >= 0; i--) {

	}
}

function threeSame() {
	for (let i = magic.length -1; i >= 0; i--) {
		if (magic[i] >= 3) {
			return i * 3;
		}
	}
}

function fourSame() {
	for (let i = magic.length -1; i >= 0; i--) {
		if (magic[i] >= 4) {
			return i * 4;
		}
	}
}

function smallStraight() {
	for (let i = magic.length -1; i >= 0; i--) {
		if (magic[1] == 1 && magic[2] == 1 && magic[3] == 1 && magic[4] == 1 && magic[5] == 1) {
			 
			return 15;
			 
		}
	}
}

function bigStraight() {
	for (let i = magic.length -1; i >= 0; i--) {
		if (magic[2] == 1 && magic[3] == 1 && magic[4] == 1 && magic[5] == 1 && magic[6] == 1) {
			return 20;
		}
	}
}

function house() {

}

function chance() {
	for (let i = magic.length -1; i >= 0; i--) {
		if (magic[i] >= 1) {
			return i * 6;
		}
	}
}

function yatzy() {
	for (let i = magic.length -1; i >= 0; i--) {
		if (magic[i] >= 5) {
			return i * 5;
		}
	}
}


//eventListeners on possible fields to add points 
document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'enere' ) ){
		var tde = document.getElementById("enere");
		var tt = document.createTextNode(potscore[0]);
		tde.appendChild(tt);
		console.log("enere")
	}
}) 

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'toere' ) ){
		var tde = document.getElementById("toere");
		var tt = document.createTextNode(potscore[1]);
		tde.appendChild(tt);
		console.log("toere")
	} 
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'treere' ) ){
		var tde = document.getElementById("treere");
		var tt = document.createTextNode(potscore[2]);
		tde.appendChild(tt);
		console.log("treere")
	} 
})


document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'fireere' ) ){
		var tde = document.getElementById("fireere");
		var tt = document.createTextNode(potscore[3]);
		tde.appendChild(tt);
		console.log("fireere")
	} 
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'femere' ) ){
		var tde = document.getElementById("femere");
		var tt = document.createTextNode(potscore[4]);
		tde.appendChild(tt);
		console.log("femere")
	} 
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'seksere' ) ){
		var tde = document.getElementById("seksere");
		var tt = document.createTextNode(potscore[5]);
		tde.appendChild(tt);
		console.log("seksere")
	} 
})



document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'par2' ) ){
		console.log("2 par")
	} 
})





document.addEventListener('click', function(event2){
	if (event2.target.classList.contains( 'lille' ) ){
		var divl = document.getElementById("lille");
		var tt2 = document.createTextNode(smallStraight());
		divl.appendChild(tt2);
		console.log(potscore[10])
	} 
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'stor' ) ){
		var divl = document.getElementById("stor");
		var tt2 = document.createTextNode(bigStraight());
		divl.appendChild(tt2);
		console.log("stor straight")
	} 
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'hus' ) ){
		console.log("hus")
	} 
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'chance' ) ){
		console.log("chance")
	} 
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'yatzy' ) ){
		console.log("yatzy")
	} 
})

