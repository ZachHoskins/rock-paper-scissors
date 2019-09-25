let computerChoices = ['rock', 'paper', 'scissors'];
let gameOver = false;
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
const buttons = document.querySelectorAll('button');

const container = document.querySelector('#text');
const content = document.createElement('div');
let playerScoreText = document.createElement('div');
let computerScoreText = document.createElement('div');
let resultsText = document.createElement('div');
let scoreBoardText = document.createElement('div');
const gameOverContainer = document.querySelector("#game_over_text");
let gameOverText = document.createElement('h2');
gameOverText.classList.add('gameOver');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerSelection = button.id;

    if (!gameOver) {
      startRound();
    }
  });
});

function computerPlay() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function startRound() {
  let computerSelection = computerPlay();
  //console.log(`${playerSelection} vs ${computerSelection}`);
  playRound(playerSelection, computerSelection);

  if (playerScore === 5) {
    gameOver = true;
    container.removeChild(content);
    gameOverText.textContent = `YOU WIN!\nYOU:${playerScore} | CPU:${computerScore}`;
  } else if (computerScore === 5) {
    gameOver = true;
    container.removeChild(content);
    gameOverText.textContent = `YOU LOSE!\nYOU:${playerScore} | CPU:${computerScore}`;
  }
  gameOverContainer.appendChild(gameOverText);
}

function playRound(playerSelection, computerSelection) {
  playerScoreText.textContent = `YOU: ${playerSelection}`;
  computerScoreText.textContent = `CPU: ${computerSelection}`;

  if (computerSelection === 'rock') {

    if (playerSelection === 'paper') {
      resultsText.textContent = 'You Win!';
      playerScore++;
      getScoreBoard();
    } else if (playerSelection === 'scissors') {
      resultsText.textContent = `You Lose!`;
      computerScore++;
      getScoreBoard();
    } else if (playerSelection === computerSelection) {
      resultsText.textContent = `It's a Tie!`;
      getScoreBoard();
    } else {
      alert('Please Refresh and Enter a Valid Choice');
    }

  } else if (computerSelection === 'paper') {

    if (playerSelection === 'scissors') {
      resultsText.textContent = 'You Win!';
      playerScore++;
      getScoreBoard();
    } else if (playerSelection === 'rock') {
      resultsText.textContent = `You Lose!`;
      computerScore++;
      getScoreBoard();
    } else if (playerSelection === computerSelection) {
      resultsText.textContent = `It's a Tie!`;
      getScoreBoard();
    } else {
      alert('Please Refresh and Enter a Valid Choice');
    }

  } else if (computerSelection === 'scissors') {

    if (playerSelection === 'rock') {
      resultsText.textContent = 'You Win!';
      playerScore++;
      getScoreBoard();
    } else if (playerSelection === 'paper') {
      resultsText.textContent = `You Lose!`;
      computerScore++;
      getScoreBoard();
    } else if (playerSelection === computerSelection) {
      resultsText.textContent = `It's a Tie!`;
      getScoreBoard();
    } else {
      alert('Please Refresh and Enter a Valid Choice');
    }

  } else {
    console.error("Something Went Wrong. Computer did not select Rock, Paper, or Scissors...");
  }

  content.appendChild(playerScoreText);
  content.appendChild(computerScoreText);
  content.appendChild(resultsText);
  content.appendChild(scoreBoardText);
  container.appendChild(content);
}

// Function to display current scoreboard
function getScoreBoard() {
  return scoreBoardText.textContent = `YOU:${playerScore} | CPU:${computerScore}`;
}

// function game() {
//   startRound();

// }