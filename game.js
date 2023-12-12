const CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const TIE = "tie";
const LOSS = "loss";
const WIN = "win";
const HALF_SECOND = 500; //ms
const ONE_HUNDREDST_SECOND = 100; //ms
const LIZARD_IMAGE = "./images/lizard.png";
const PAPER_IMAGE = "./images/paper.png";
const ROCK_IMAGE = "./images/rock.png";
const SCISSORS_IMAGE = "./images/scissors.png";
const SPOCK_IMAGE = "./images/spock.png";
const IMAGES = [LIZARD_IMAGE, PAPER_IMAGE, ROCK_IMAGE, SCISSORS_IMAGE, SPOCK_IMAGE];

let playerWonGames = 0;
let computerWonGames = 0;

const choicesBox = document.querySelector(".choiceButtons");
const choiceButtons = choicesBox.getElementsByTagName("button");

for (let button of choiceButtons) {
    button.addEventListener("click", playRound);
}

const playerChoiceButton = document.querySelector("#playerChoice");
const computerChoiceButton = document.querySelector("#computerChoice");

const score = document.querySelector(".score");
const result = document.querySelector(".resultText");

const reloadButton = document.querySelector(".reload");
reloadButton.addEventListener("click", () => {location.reload()});

function playRound(event) {
    let playerChoice = event.currentTarget.getAttribute("class");
    playerChoice = String(playerChoice).split(" ")[1];
    setPlayerChoiceImage(playerChoice);

    let computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setComputerChoiceImage(computerChoice);
    
    switch (checkPlayerWonGame(playerChoice, computerChoice)) {
        case LOSS:
            computerWonGames++;
            computerChoiceButton.style.backgroundColor = "green";
            playerChoiceButton.style.backgroundColor = "red";
            break;
        case WIN:
            playerWonGames++;
            computerChoiceButton.style.backgroundColor = "red";
            playerChoiceButton.style.backgroundColor = "green";
            break;
        case TIE:
            computerChoiceButton.style.backgroundColor = "grey";
            playerChoiceButton.style.backgroundColor = "grey";
            break;       
    }
    score.textContent = `${playerWonGames} : ${computerWonGames}`;

    if (playerWonGames > 2) {
        setTimeout(function() {
            alert("You won! Congratulations!\n\n(Press F5 to reload the page for a new game)");
        }, HALF_SECOND);
        disableChoiceButtons();
    }
    else if (computerWonGames > 2) {
        setTimeout(function() {
            alert("You lost! Try again!\n\n(Press F5 to reload the page for a new game)");
        }, HALF_SECOND);
        disableChoiceButtons();
    }
    else {
        console.log("New round!")
    }
}

function disableChoiceButtons() {
    for (let button of choiceButtons) {
        button.removeEventListener("click",playRound);
        button.disabled = true;
    }
}

function checkPlayerWonGame(playerChoice, computerChoice) {
    switch (playerChoice) {
        case CHOICES[0]:
            return checkRockMoves(computerChoice);
        case CHOICES[1]:
            return checkPaperMoves(computerChoice);
        case CHOICES[2]:
            return checkScissorsMoves(computerChoice);
        case CHOICES[3]:
            return checkLizardMoves(computerChoice);
        case CHOICES[4]:
            return checkSpockMoves(computerChoice);
        default:
            return TIE;
    }
}

function checkRockMoves(computerChoice) {
    switch (computerChoice) {
        case CHOICES[0]:
            result.textContent = "Both players chose rock, it's a tie";
            return TIE;
        case CHOICES[1]:
            result.textContent = "Rock gets covered by paper. Player loses!";
            return LOSS;
        case CHOICES[2]:
            result.textContent = "Rock crushes scissors. Player wins!";
            return WIN;
        case CHOICES[3]:
            result.textContent = "Rock crushes lizard. Player wins!";
            return WIN;
        case CHOICES[4]:
            result.textContent = "Rock gets vaporized by Spock. Player loses!";
            return LOSS;
    }
}

function checkPaperMoves(computerChoice) {
    switch (computerChoice) {
        case CHOICES[0]:
            result.textContent = "Paper covers rock. Player wins!";
            return WIN;
        case CHOICES[1]:
            result.textContent = "Both players chose paper, it's a tie!";
            return TIE;
        case CHOICES[2]:
            result.textContent = "Paper gets cut by scissors. Player loses!";
            return LOSS;
        case CHOICES[3]:
            result.textContent = "Paper gets eaten by lizard. Player loses!";
            return LOSS;
        case CHOICES[4]:
            result.textContent = "Paper disproves Spock. Player wins!";
            return WIN;
    }
}

function checkScissorsMoves(computerChoice) {
    switch (computerChoice) {
        case CHOICES[0]:
            result.textContent = "Scissors get crushed by rock. Player loses!";
            return LOSS;
        case CHOICES[1]:
            result.textContent = "Scissors cut paper. Player wins!";
            return WIN;
        case CHOICES[2]:
            result.textContent = "Both players chose scissors, it's a tie!";
            return TIE;
        case CHOICES[3]:
            result.textContent = "Scissors decapitate lizard. Player wins!";
            return WIN;
        case CHOICES[4]:
            result.textContent = "Scissors get smashed by Spock. Player loses!";
            return LOSS;
    }
}

function checkLizardMoves(computerChoice) {
    switch (computerChoice) {
        case CHOICES[0]:
            result.textContent = "Lizard gets smashed by rock. Player loses!";
            return LOSS;
        case CHOICES[1]:
            result.textContent = "Lizard eats paper. Player wins!";
            return WIN;
        case CHOICES[2]:
            result.textContent = "Lizard gets decapitated by scissors. Player loses!";
            return LOSS;
        case CHOICES[3]:
            result.textContent = "Both players chose lizard, it's a tie!";
            return TIE;
        case CHOICES[4]:
            result.textContent = "Lizard poisons Spock. Player wins!";
            return WIN;
    }
}

function checkSpockMoves(computerChoice) {
    switch (computerChoice) {
        case CHOICES[0]:
            result.textContent = "Spock vaporizes rock. Player wins!";
            return WIN;
        case CHOICES[1]:
            result.textContent = "Spock gets disproven by paper. Player loses!";
            return LOSS;
        case CHOICES[2]:
            result.textContent = "Spock smashes scissors. Player wins!";
            return WIN;
        case CHOICES[3]:
            result.textContent = "Spock gets poisoned by lizard. Player loses!";
            return LOSS;
        case CHOICES[4]:
            result.textContent = "Both players chose Spock, it's a tie!";
            return TIE;
    }
}

function setPlayerChoiceImage(playerChoice) {
    if (playerChoice.includes(CHOICES[0])) {    
        playerChoiceButton.innerHTML = `<img src=${ROCK_IMAGE} width=200px, height=200px>`;
    }
    else if (playerChoice.includes(CHOICES[1])) {
        playerChoiceButton.innerHTML = `<img src=${PAPER_IMAGE} width=200px, height=200px>`;
    }
    else if (playerChoice.includes(CHOICES[2])) {
        playerChoiceButton.innerHTML = `<img src=${SCISSORS_IMAGE} width=200px, height=200px>`;
    }
    else if (playerChoice.includes(CHOICES[3])) {
        playerChoiceButton.innerHTML = `<img src=${LIZARD_IMAGE} width=200px, height=200px>`;
    }
    else if (playerChoice.includes(CHOICES[4])) {
        playerChoiceButton.innerHTML = `<img src=${SPOCK_IMAGE} width=200px, height=200px>`;
    }
}

function setComputerChoiceImage(computerChoice) {
    if (computerChoice.includes(CHOICES[0])) {    
        computerChoiceButton.innerHTML = `<img src=${ROCK_IMAGE} width=200px, height=200px>`;
    }
    else if (computerChoice.includes(CHOICES[1])) {
        computerChoiceButton.innerHTML = `<img src=${PAPER_IMAGE} width=200px, height=200px>`;
    }
    else if (computerChoice.includes(CHOICES[2])) {
        computerChoiceButton.innerHTML = `<img src=${SCISSORS_IMAGE} width=200px, height=200px>`;
    }
    else if (computerChoice.includes(CHOICES[3])) {
        computerChoiceButton.innerHTML = `<img src=${LIZARD_IMAGE} width=200px, height=200px>`;
    }
    else if (computerChoice.includes(CHOICES[4])) {
        computerChoiceButton.innerHTML = `<img src=${SPOCK_IMAGE} width=200px, height=200px>`;
    }
}