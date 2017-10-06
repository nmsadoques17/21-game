var player = 0;
var comp = 0;
var total = 0;

alert("The game is simple. You add 1, 2 or 3 to the total, starting at 0. Don't say 21!");


do{
	var player = 0;
	var comp = 0;
	do{
		player = prompt("Enter 1 2 or 3:");
		if (player == 1) {
			total = total + 1;
			alert("The total is now "+total+".");
			comp = 3;
			total = total + 3;
			alert("The computer added 3.The total is now "+total+".");
		}
		else if (player == 2) {
			total = total + 2;
			alert("The total is now "+total+".");
			comp = 2;
			total = total + 2;
			alert("The computer added 2.The total is now "+total+".");
		}
		else if (player == 3) {
			total = total + 3;
			alert("The total is now "+total+".");
			comp = 1;
			total = total + 1;
			alert("The computer added 1.The total is now "+total+".");
		}
	}
	while(total<20)
	alert("you lose. Your only option is 21.")
	var playAgain = prompt("would you like to play again? Press y to play again.")
}
while(playAgain == "y");