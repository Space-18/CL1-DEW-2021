
var pla1= 0;
var pla2= 0;

function random(player){

  if(player == 1){
	 player1 = Math.floor((Math.random() * 6) + 1);
	  document.getElementById("text1").innerHTML = " "+ player1 ;
    }
  else if(player == 2){
	 player2 = Math.floor((Math.random() * 6) + 1);
	   document.getElementById("text2").innerHTML = " "+ player2;
    }

setTimeout(function(){
	if(player1 == 0 || player2 == 0){
    }
  else{
	calcular();
    }
  }, 300);
}

function calcular(){
	if(player1>player2){
		alert("Gana Sujeto 1");
		ganador= "player1";
    location.reload();
    }
  else if(player1<player2){
		alert("Gana Sujeto 2");
		ganador= "player2";
    location.reload();
    }
  else {
		alert("Empate");
		ganador= "Empate";
    location.reload();
    }
  }
