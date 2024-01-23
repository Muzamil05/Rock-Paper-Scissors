function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return choice[random];
}

function playRound(PlayerSelection, ComputerSelection) {
    if (PlayerSelection === "rock") {
        if (ComputerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        } else if (ComputerSelection === "Scissors") {
            return "You Win! scissors beats rock";
        } else if (ComputerSelection === "Rock") {
            return "Its a tie! please try again.";
        }
    } else if (PlayerSelection === "scissors") {
        if (ComputerSelection === "Rock") {
            return "You Lose! Rock beats Scissors!";
        } else if (ComputerSelection === "Paper") {
            return "You Win! Scissors beats Paper!";
        } else if (ComputerSelection === "Scissors") {
            return "Its a tie! please try again.";
        }
    } else if (PlayerSelection === "paper") {
        if (ComputerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper!";
        } else if (ComputerSelection === "Rock") {
            return "You Win! Paper beats Rock!";
        } else if (ComputerSelection === "Paper") {
            return "Its a tie! please try again.";
        }
    }
}

function game() {
    let PlayerScore = 0;
    let ComputerScore = 0;
    for (let i = 0; i < 5; i++) {
        const PlayerSelection = prompt("Enter your choice: ").toLocaleLowerCase();
        const ComputerSelection = getComputerChoice();
        console.log(playRound(PlayerSelection, ComputerSelection));
        if (playRound(PlayerSelection, ComputerSelection).includes("Win")) {
            PlayerScore++;
        } else if (playRound(PlayerSelection, ComputerSelection).includes("Lose")) {
            ComputerScore++;
        }
    }
    if (PlayerScore > ComputerScore) {
        console.log("You won the game!");
    } else if (PlayerScore < ComputerScore) {
        console.log("You lost the game!");
    } else if (PlayerScore === ComputerScore){
        console.log("Its a tie!");
    }
}

game();