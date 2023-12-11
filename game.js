const rulesLink = "https://en.wikipedia.org/wiki/File:Rock_paper_scissors_lizard_spock.png";
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const tie = "tie";
const loss = "loss";
const win = "win";

let playerWonGames = 0;
let computerWonGames = 0;

/*
alert(`Let's play a game of rock, paper, scissors, lizard, spock.

If you do not know the rules, you can find them here: ${rulesLink}

Best 3 out of 5 wins.`)
*/

function game() {
    for (let i = 0; i < 5; i++) {
        //let playerChoice = prompt("Choose your weapon! (not case-sensitive)").toLowerCase();
        if (!choices.includes(playerChoice)) {
            i--;
            alert("Please enter a valid choice");
            continue;
        }

        playRound(playerChoice);

        if (playerWonGames > 2) {
            alert("You won! Congratulations!\n\n(Press F5 to reload the page for a new game)");
            break;
        }
        else if (computerWonGames > 2) {
            alert("You lost! Try again!\n\n(Press F5 to reload the page for a new game)");
            break;
        }
        else {
            console.log("New round!")
        }
    }
    playerWonGames = 0;
    computerWonGames = 0;
}

function playRound(playerChoice) {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    switch (checkPlayerWonGame(playerChoice, computerChoice)) {
        case loss:
            computerWonGames++;
            break;
        case win:
            playerWonGames++;
            break;
        default:
            i--;
            break;
    }

    console.log(`Player: ${playerWonGames}`);
    console.log(`Computer: ${computerWonGames}`);
}


function checkPlayerWonGame(playerChoice, computerChoice) {
    switch (playerChoice) {
        case choices[0]:
            return checkRockMoves(computerChoice);
        case choices[1]:
            return checkPaperMoves(computerChoice);
        case choices[2]:
            return checkScissorsMoves(computerChoice);
        case choices[3]:
            return checkLizardMoves(computerChoice);
        case choices[4]:
            return checkSpockMoves(computerChoice);
        default:
            return tie;
    }
}

function checkRockMoves(computerChoice) {
    switch (computerChoice) {
        case choices[0]:
            console.log("Both players chose rock, it's a tie");
            return tie;
        case choices[1]:
            console.log("Rock gets covered by paper. Player loses!");
            return loss;
        case choices[2]:
            console.log("Rock crushes scissors. Player wins!");
            return win;
        case choices[3]:
            console.log("Rock crushes lizard. Player wins!");
            return win;
        case choices[4]:
            console.log("Rock gets vaporized by Spock. Player loses!");
            return loss;
    }
}

function checkPaperMoves(computerChoice) {
    switch (computerChoice) {
        case choices[0]:
            console.log("Paper covers rock. Player wins!");
            return win;
        case choices[1]:
            console.log("Both players chose paper, it's a tie!");
            return tie;
        case choices[2]:
            console.log("Paper gets cut by scissors. Player loses!");
            return loss;
        case choices[3]:
            console.log("Paper gets eaten by lizard. Player loses!");
            return loss;
        case choices[4]:
            console.log("Paper disproves Spock. Player wins!");
            return win;
    }
}

function checkScissorsMoves(computerChoice) {
    switch (computerChoice) {
        case choices[0]:
            console.log("Scissors get crushed by rock. Player loses!");
            return loss;
        case choices[1]:
            console.log("Scissors cut paper. Player wins!");
            return win;
        case choices[2]:
            console.log("Both players chose scissors, it's a tie!");
            return tie;
        case choices[3]:
            console.log("Scissors decapitate lizard. Player wins!");
            return win;
        case choices[4]:
            console.log("Scissors get smashed by Spock. Player loses!");
            return loss;
    }
}

function checkLizardMoves(computerChoice) {
    switch (computerChoice) {
        case choices[0]:
            console.log("Lizard gets smashed by rock. Player loses!");
            return loss;
        case choices[1]:
            console.log("Lizard eats paper. Player wins!");
            return win;
        case choices[2]:
            console.log("Lizard gets decapitated by scissors. Player loses!");
            return loss;
        case choices[3]:
            console.log("Both players chose lizard, it's a tie!");
            return tie;
        case choices[4]:
            console.log("Lizard poisons Spock. Player wins!");
            return win;
    }
}

function checkSpockMoves(computerChoice) {
    switch (computerChoice) {
        case choices[0]:
            console.log("Spock vaporizes rock. Player wins!");
            return win;
        case choices[1]:
            console.log("Spock gets disproven by paper. Player loses!");
            return loss;
        case choices[2]:
            console.log("Spock smashes scissors. Player wins!");
            return win;
        case choices[3]:
            console.log("Spock gets poisoned by lizard. Player loses!");
            return loss;
        case choices[4]:
            console.log("Both players chose Spock, it's a tie!");
            return tie;
    }
}