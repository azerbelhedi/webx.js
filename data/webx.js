var colors = ["red" , "black" , "white" , "blue"] ;
var i = 0 ;
setInterval(function(){
	var x =document.getElementsByClassName("clino") ;
	for(var j = 0 ; j < x.length ; j++)
	x[j].style.color = colors[i];
	i++;
	if(i == 4){i = 0 ;}
},1000);