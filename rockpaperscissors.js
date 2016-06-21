// ask for userChoice

var determineUserChoice = function() {
	choice = Math.random();
	// console.log("user choice number generated within function:" + userChoice);

	if (choice <= 0.25) {
		choice = "rock";
	} else if (choice >= 0.75) {
		choice = "scissors";
	} else if (choice < 0.5) {
		choice = "paper";
	} else {
		choice = "mao";
	}

	return choice;

};

var userChoice = determineUserChoice();
console.log("User choice is:" + " " + userChoice);

// if user enters an invalid choice, prompt for valid choice - repeat until valid
var validation = false;

while (validation === false) {
	if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
		validation = false;
		console.log("Running again to find valid response.");
		var userChoice = determineUserChoice();
		console.log("Ran again, choice is now: " + userChoice);
	} else {
		validation = true;
		console.log("User choice is valid:" + " " + userChoice);
	}
}

// determine computer choice
var determineComputerChoice = function() {
	computerChoice = Math.random();
	// console.log("comp choice number generated within function:" + computerChoice);

	if (computerChoice <= 0.33) {
		computerChoice = "rock";
	} else if (computerChoice >= 0.67) {
		computerChoice = "scissors";
	} else {
		computerChoice = "paper";
	} 

};

determineComputerChoice();
console.log("Computer choice is:" + " " + computerChoice);


// determines winner of game
var compare = function(choice1, choice2) {
	if (choice1 === choice2) {
		console.log("It's a tie! Let's play again");
	} else if (choice1 === "rock") {
		if (choice2 === "paper") {
			console.log("The computer wins!");
		} else { //computer choice would have to be scissors
			console.log("The user wins!");
		}
	} else if (choice1 === "scissors") {
		if (choice2 === "paper") {
			console.log("The user wins!");
		} else { //computer choice would have to be rock
			console.log("The computer wins!");
		}
	} else { //user choice would have to be paper
		if (choice2 === "rock") {
			console.log("The user wins!");
		} else { //computer choice would have to be scissors
			console.log("The computer wins!");
		}
	}
};

compare(userChoice, computerChoice);

// replay game if it's a tie

while (userChoice === computerChoice) {
	var userChoice = determineUserChoice();
	console.log("User choice is:" + " " + userChoice);
	determineComputerChoice();
	console.log("Computer choice is:" + " " + computerChoice);
	compare(userChoice, computerChoice);
};

// next to do: get rid of repetitive code in last while loop

