function kast(){
    var terning1 = document.getElementById("terning1");
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
}