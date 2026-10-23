let computerChoice;
let playerChoice;

function getComputerChoice(min, max) {
	let choice = Math.floor(Math.random() * (max - min + 1)) + min;

	if (choice === 0) {
		return "rock";
	} else if (choice === 1) {
		return "paper";
	} else if (choice === 2) {
		return "scissors";
	}
}

let playerScore = 0;
let computerScore = 0;

function displayChoices() {
	console.log("-> Your pick: " + playerChoice + "\n-> Opponent's pick: " + computerChoice);
}

function displayScores() {
	console.log("-> Your score: " + playerScore + "\n-> Opponent's score: " + computerScore);
}

function displayFinalResults() {
	console.log("[FINAL RESULTS]\n");
	displayScores();

	if (playerScore > computerScore) {
		console.log("Congratulations! You win!");
	} else if (playerScore < computerScore) {
		console.log("You lose! Better luck next time!");
	} else {
		console.log("It's a tie!");
	}
}

function playRound(playerChoice, computerChoice) {
	const result = document.querySelector(".result");

	switch (playerChoice) {
		case "rock":
			if (computerChoice === "scissors") {
				result.textContent = "Round win! Rock beats scissors.";
				playerScore++;
				refreshScores(playerScore, computerScore);
			} else if (computerChoice === "paper") {
				result.textContent = "Round loss! Paper beats rock."
				computerScore++;
				refreshScores(playerScore, computerScore);
			} else {
				result.textContent = "Round draw!";
			}
			break;

		case "paper":
			if (computerChoice === "rock") {
				result.textContent = "Round win! Paper beats rock.";
				playerScore++;
				refreshScores(playerScore, computerScore);
			} else if (computerChoice === "scissors") {
				result.textContent = "Round loss! Scissors beats paper.";
				computerScore++;
				refreshScores(playerScore, computerScore);
			} else {
				result.textContent = "Round draw!";
			}
			break;
		
		case "scissors":
			if (computerChoice === "paper") {
				result.textContent = "Round win! Scissors beats paper.";
				playerScore++;
				refreshScores(playerScore, computerScore);
			} else if (computerChoice === "rock") {
				result.textContent = "Round loss! Rock beats scissors.";
				computerScore++;
				refreshScores(playerScore, computerScore);
			} else {
				result.textContent = "Round draw!";
			}
			break;
	}
}

function refreshScores(playerScore, computerScore) {
	const para_computerScore = document.querySelector(".computer-score");
	const para_playerScore = document.querySelector(".player-score");

	para_computerScore.textContent = "Computer score: " + computerScore;
	para_playerScore.textContent = "Player score: " + playerScore;

	if (computerScore === 5) {
		const result = document.querySelector(".result");
		result.textContent = "You lose! Better luck next time!";
	} else if (playerScore === 5) {
		const result = document.querySelector(".result");
		result.textContent = "You win! Congratulations!"
	}
}

const options = document.querySelector(".options");

options.addEventListener("click", (event) => {
	computerChoice = getComputerChoice(0, 2);
	playerChoice = event.target.className;

	playRound(playerChoice, computerChoice);
});