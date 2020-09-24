//Array to store dice numbers
let dice = [1, 2, 3, 4, 5, 6];
let magic = [0,0,0,0,0,0,0];
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
		
	}
	console.log(locked);
	

}

function terning(){
	dice = Math.random();
    dice = Math.floor(dice * 6 + 1);
    return dice;
}

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'reset' ) ){
		document.getElementById("kastterning").disabled = false;
		rolls = 0; 
		document.getElementById("terning").innerHTML = '<p>0</p>' + '<p>0</p>' + '<p>0</p>' + '<p>0</p>' + '<p>0</p>' ;
		locked = [false,false,false,false,false];
		let a = document.getElementsByClassName('btn');
		for(let i = 0; i < 5; i++) {
			a[i].style.backgroundColor = 'white';
		}	
		
	} 
}) 

document.addEventListener('click', function(event){
	if (magic[6] >= 2){
		let numberOf = [];
    	let number = 1;
    	let whereIsNumber = arr1.indexOf(number);
    	while (whereIsNumber != -1) {
        numberOf.push(whereIsNumber);
        whereIsNumber = arr1.indexOf(number, whereIsNumber + 1);
    }
    console.log(numberOf);
    console.log(arr1.includes(1));
		
		console.log("enere")
	} 
}) 

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'toere' ) ){
		console.log("toere")
	} 
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'treere' ) ){
		console.log("treere")
	} 
})


document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'fireere' ) ){
		console.log("fireere")
	} 
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'femere' ) ){
		console.log("femere")
	} 
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'seksere' ) ){
		console.log("seksere")
	} 
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'par1' ) ){
		console.log("1 par")
	} 
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'par2' ) ){
		console.log("2 par")
	} 
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'ens3' ) ){
		console.log("3 ens")
	} 
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'ens4' ) ){
		console.log("4 ens")
	} 
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'lille' ) ){
		console.log("lille straight")
	} 
})

document.addEventListener('click', function(event){
	if (event.target.classList.contains( 'stor' ) ){
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