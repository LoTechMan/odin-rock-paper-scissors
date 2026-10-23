const WIN_SCORE = 5;

let computerChoice;
let playerChoice;

let computerScore;
let playerScore;

function initGame() {
	const btn_rock = document.querySelector(".rock");
	const btn_paper = document.querySelector(".paper");
	const btn_scissors = document.querySelector(".scissors");

	const para_computerScore = document.querySelector(".computer-score");
	const para_playerScore = document.querySelector(".player-score");
	const para_message = document.querySelector(".message");

	computerScore = 0;
	playerScore = 0;

	para_computerScore.textContent = `Computer score: ${computerScore}`;
	para_playerScore.textContent = `Player score: ${playerScore}`;
	para_message.textContent = ``;

	btn_rock.disabled = false;
	btn_paper.disabled = false;
	btn_scissors.disabled = false;
}

function getComputerChoice(min, max) {
	// Always return a value between 0, and 2 (inclusive).
	let choice = Math.floor(Math.random() * (max - min + 1)) + min;

	if (choice === 0) {
		return "rock";
	} else if (choice === 1) {
		return "paper";
	} else if (choice === 2) {
		return "scissors";
	}
}

function playRound(playerChoice, computerChoice) {
	const result = document.querySelector(".message");

	switch (playerChoice) {
		case "rock":
			if (computerChoice === "scissors") {
				result.textContent = `Round win! Rock beats scissors.`;
				playerScore++;
			} else if (computerChoice === "paper") {
				result.textContent = `Round loss! Paper beats rock.`
				computerScore++;
			} else {
				result.textContent = `Round draw!`;
			}
			break;

		case "paper":
			if (computerChoice === "rock") {
				result.textContent = `Round win! Paper beats rock.`;
				playerScore++;
			} else if (computerChoice === "scissors") {
				result.textContent = `Round loss! Scissors beats paper.`;
				computerScore++;
			} else {
				result.textContent = `Round draw!`;
			}
			break;
		
		case "scissors":
			if (computerChoice === "paper") {
				result.textContent = `Round win! Scissors beats paper.`;
				playerScore++;
			} else if (computerChoice === "rock") {
				result.textContent = `Round loss! Rock beats scissors.`;
				computerScore++;
			} else {
				result.textContent = `Round draw!`;
			}
			break;
	}
	refreshScores();
}

function refreshScores() {
	const para_computerScore = document.querySelector(".computer-score");
	const para_playerScore = document.querySelector(".player-score");

	para_computerScore.textContent = `Computer score: ${computerScore}`;
	para_playerScore.textContent = `Player score: ${playerScore}`;

	checkWinCondition();
}

function checkWinCondition() {
	const result = document.querySelector(".message");

	if (computerScore === WIN_SCORE) {
		result.textContent = "You lose! Better luck next time!";
		endGame();
	} else if (playerScore === WIN_SCORE) {
		result.textContent = "You win! Congratulations!";
		endGame();
	}
}

function endGame() {
	const btn_rock = document.querySelector(".rock");
	const btn_paper = document.querySelector(".paper");
	const btn_scissors = document.querySelector(".scissors");

	btn_rock.disabled = true;
	btn_paper.disabled = true;
	btn_scissors.disabled = true;
}

const options = document.querySelector(".options");

options.addEventListener("click", (event) => {
	computerChoice = getComputerChoice(0, 2);
	playerChoice = event.target.className;

	playRound(playerChoice, computerChoice);
});

initGame();