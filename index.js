const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const scoreBar = document.getElementById('score-bar');
const resultText = document.getElementById('result-text');
const compRock = document.getElementById('comp-rock');
const compPaper = document.getElementById('comp-paper');
const compScissors = document.getElementById('comp-scissors');
let playerScore = 0;
let winner;

rock.addEventListener('click', () => handleClick('rock'));
paper.addEventListener('click', () => handleClick('paper'));
scissors.addEventListener('click', () => handleClick('scissors'));

const handleClick = (playerChoice) => {
    if (isGameOver()) {
        //UPDATE RESULT TEXT
        resultText.innerHTML = `Game Over! ${winner} wins!`;
        return
    }
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    highlightChoice(computerChoice);
    updateScoreBar();
    updateResultText(playerChoice, computerChoice);

}

const highlightChoice = (computerChoice) => {
    compRock.style.border = ``;
    compRock.style.transform = ``;
    compRock.style.boxShadow = ``;

    compPaper.style.border = ``;
    compPaper.style.transform = ``;
    compPaper.style.boxShadow = ``;

    compScissors.style.border = ``;
    compScissors.style.transform = ``;
    compScissors.style.boxShadow = ``;

    if (computerChoice === 'rock') {
        compRock.style.border = `2px solid var(--red-color)`;
        compRock.style.transform = `scale(1.1)`;
        compRock.style.boxShadow = `0 0 6px 2px var(--red-color)`;
    }

    if (computerChoice === 'paper') {
        compPaper.style.border = `2px solid var(--red-color)`;
        compPaper.style.transform = `scale(1.1)`;
        compPaper.style.boxShadow = `0 0 6px 2px var(--red-color)`;
    }

    if (computerChoice === 'scissors') {
        compScissors.style.border = `2px solid var(--red-color)`;
        compScissors.style.transform = `scale(1.1)`;
        compScissors.style.boxShadow = `0 0 6px 2px var(--red-color)`;
    }
}

const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        console.log(computerChoice);
        winner = 'tie';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        console.log('Player Wins');
        playerScore++;
        winner = 'player';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        console.log('Player Wins');
        playerScore++;
        winner = 'player';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        console.log('Player Wins');
        playerScore++;
        winner = 'Player';
    } else {
        console.log('Computer Wins');
        playerScore--;
        winner = 'Computer';
    }
    
}

const updateScoreBar = () => {
    switch(playerScore) {
        case -5: scoreBar.style.background = `var(--red-color)`;
        break;
        case -4: scoreBar.style.background = `linear-gradient(90deg, var(--green-color) 10%, var(--red-color) 10%)`;
        break;
        case -3: scoreBar.style.background = `linear-gradient(90deg, var(--green-color) 20%, var(--red-color) 20%)`;
        break;
        case -2: scoreBar.style.background = `linear-gradient(90deg, var(--green-color) 30%, var(--red-color) 30%)`;
        break;
        case -1: scoreBar.style.background = `linear-gradient(90deg, var(--green-color) 40%, var(--red-color) 40%)`;
        break;
        case 0: scoreBar.style.background = `linear-gradient(90deg, var(--green-color) 50%, var(--red-color) 50%)`;
        break;
        case 1: scoreBar.style.background = `linear-gradient(90deg, var(--green-color) 60%, var(--red-color) 40%)`;
        break;
        case 2: scoreBar.style.background = `linear-gradient(90deg, var(--green-color) 70%, var(--red-color) 30%)`;
        break;
        case 3: scoreBar.style.background = `linear-gradient(90deg, var(--green-color) 80%, var(--red-color) 20%)`;
        break;
        case 4: scoreBar.style.background = `linear-gradient(90deg, var(--green-color) 90%, var(--red-color) 10%)`;
        break;
        case 5: scoreBar.style.background = `var(--green-color)`;
    }
}

const updateResultText = (playerChoice, computerChoice) => {
    if (!isGameOver()) {
        switch(winner) {
            case 'tie':
                resultText.innerText = `Tie! You played ${playerChoice} and the computer played ${computerChoice}.`;
                break;
            case 'player':
                resultText.innerText = `You won! Your ${playerChoice} beats the computer's ${computerChoice}.`;
                break;
            case 'computer':
                resultText.innerText = `You Lost! The computer's ${computerChoice} beats your ${playerChoice}.`;
        }
    } 
}

const isGameOver = () => {
    if (playerScore === 5 || playerScore === -5) {
        return true;
    } else {
        return false;
    }
}


const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
