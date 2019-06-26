let computerChoices = ['rock','paper','scissors'];
let gameOver = false;
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
  return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}

function playRound(playerSelection, computerSelection){
  if(computerSelection === 'rock'){

    if(playerSelection === 'paper'){
      console.log(`YOU: ${playerSelection}`);
      console.log(`CPU: ${computerSelection}`);
      console.log('You Win!');
      playerScore++;
      getScoreBoard();
    } else if (playerSelection === 'scissors'){
      console.log(`YOU: ${playerSelection}`);
      console.log(`CPU: ${computerSelection}`);
      console.log(`You Lose!`);
      computerScore++;
      getScoreBoard();
    } else if (playerSelection === computerSelection){
      console.log(`YOU: ${playerSelection}`);
      console.log(`CPU: ${computerSelection}`);
      console.log(`It's a Tie!`);
      getScoreBoard();
    } else {
      alert('Please Refresh and Enter a Valid Choice');
    }

  } else if (computerSelection === 'paper'){

    if(playerSelection === 'scissors'){
      console.log(`YOU: ${playerSelection}`);
      console.log(`CPU: ${computerSelection}`);
      console.log('You Win!');
      playerScore++;
      getScoreBoard();
    } else if (playerSelection === 'rock'){
      console.log(`YOU: ${playerSelection}`);
      console.log(`CPU: ${computerSelection}`);
      console.log(`You Lose!`);
      computerScore++;
      getScoreBoard();
    } else if (playerSelection === computerSelection){
      console.log(`YOU: ${playerSelection}`);
      console.log(`CPU: ${computerSelection}`);
      console.log(`It's a Tie!`);
      getScoreBoard();
    } else {
      alert('Please Refresh and Enter a Valid Choice');
    }

  } else if (computerSelection === 'scissors'){

    if(playerSelection === 'rock'){
      console.log(`YOU: ${playerSelection}`);
      console.log(`CPU: ${computerSelection}`);
      console.log('You Win!');
      playerScore++;
      getScoreBoard();
    } else if (playerSelection === 'paper'){
      console.log(`YOU: ${playerSelection}`);
      console.log(`CPU: ${computerSelection}`);
      console.log(`You Lose!`);
      computerScore++;
      getScoreBoard();
    } else if (playerSelection === computerSelection){
      console.log(`YOU: ${playerSelection}`);
      console.log(`CPU: ${computerSelection}`);
      console.log(`It's a Tie!`);
      getScoreBoard();
    } else {
      alert('Please Refresh and Enter a Valid Choice');
    }

  } else{
    console.error("Something Went Wrong. Computer did not select Rock, Paper, or Scissors...");
  }
}

function startRound(){
  let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
  let computerSelection = computerPlay();
  console.log(playRound(playerSelection,computerSelection))
}

// Function to display current scoreboard
function getScoreBoard(){
  return console.log(`YOU:${playerScore} | CPU:${computerScore}`);
}

function game(){
  startRound();

  if(playerScore === 5){
    gameOver = true;
    alert(`YOU WIN!\n YOU:${playerScore} | CPU:${computerScore}`);
  } else if (computerScore === 5){
    gameOver = true;
    alert(`YOU LOSE!\n YOU:${playerScore} | CPU:${computerScore}`);
  } 
}

while (!gameOver){
  game();
}