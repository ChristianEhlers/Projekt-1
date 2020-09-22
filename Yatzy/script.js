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
}

function test(){
	dice = Math.random();
    dice = Math.floor(dice * 6 + 1);
    return dice;
}

console.log("hello");