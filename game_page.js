play1_name=localStorage.getItem("player1");
play2_name=localStorage.getItem("player2");

document.getElementById("p1_name").innerHTML=play1_name+":";
document.getElementById("p2_name").innerHTML=play2_name+":";

player1_score=0;
player2_score=0;

document.getElementById("p1_score").innerHTML=player1_score;
document.getElementById("p2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn-"+play1_name;
document.getElementById("player_answer").innerHTML="Answer Turn-"+play2_name;