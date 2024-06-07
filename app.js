let computerScore = 0;
let humanScore = 0;

//score display
const computerScoreDisplay = document.querySelector("#computer-score")
computerScoreDisplay.textContent = `Computer: ${computerScore}`;
const humanScoreDisplay = document.querySelector("#human-score")
humanScoreDisplay.textContent = `Player: ${humanScore}`;

const computerScoreDisplayIcon = document.querySelector("#computer-score-display")
const humanScoreDisplayIcon = document.querySelector("#human-score-display")
const scoreTextDisplay = document.querySelector("#score-text-display")
const scoreTextDisplayMove = document.querySelector("#score-text-display-move")
//buttton logic
const btnRock = document.querySelector('#button-rock');
btnRock.addEventListener('click', () => playGame("Rock"))

const btnPaper = document.querySelector('#button-paper');
btnPaper.addEventListener('click', () => playGame("Paper"))


const btnScissors = document.querySelector('#button-scissors');
btnScissors.addEventListener('click', () => playGame("Scissors"));

const btnResetGame = document.querySelector('#reset-game');
btnResetGame.addEventListener('click', () => resetScore());


function resetScore(){
  // console.log('resetScore');
   humanScore = 0;
   computerScore = 0;
   humanScoreDisplay.textContent = "Player: 0";
   computerScoreDisplay.textContent = "Computer: 0";
   computerScoreDisplayIcon.style.backgroundImage = "url('images/question-sign.png')";
   humanScoreDisplayIcon.style.backgroundImage= "url('images/question-sign.png')";
   scoreTextDisplay.textContent = "Choose your hand!";
   scoreTextDisplayMove.textContent = "---";
  
}


//computer choice
function getComputerChoice(){
   let randNum = Math.random();
   if(randNum <= 0.33333333){
      return "Rock";
   } else if(randNum > 0.333334 && randNum <= 0.666666){
      return "Paper";
   } else {
      return "Scissors";
   }
}
   

function playGame(playerChoice){
   const computerChoice = getComputerChoice()
  // console.log(`Computer Choice: ${computerChoice}`)
  // console.log(`Player Choice: ${playerChoice}`)
   if(computerChoice === playerChoice){
      scoreTextDisplay.textContent = "It is tie!"
      scoreTextDisplayMove.textContent = `${computerChoice} ties ${playerChoice}.`
    //  console.log(`Computer Choice: ${computerChoice} vs Player Choice: ${playerChoice}. It is tie!`)
   }else if(
      (computerChoice === "Paper" && playerChoice === "Scissors") ||
      (computerChoice === "Rock" && playerChoice === "Paper") ||
      (computerChoice === "Scissors" && playerChoice === "Rock")
   ){
     // console.log(`Computer Choice: ${computerChoice} vs Player Choice: ${playerChoice}. Player is a winner!`)
      humanScore++;
      humanScoreDisplay.textContent = humanScore;
      humanScoreDisplay.textContent = `Player: ${humanScore}`;
      scoreTextDisplay.textContent = "You won!"
      scoreTextDisplayMove.textContent = `${playerChoice} beats ${computerChoice} !`
   }else{
     // console.log(`Computer Choice: ${computerChoice} vs Player Choice: ${playerChoice}. Computer is a winner!`)
      computerScore++
      computerScoreDisplay.textContent = `Computer: ${computerScore}`;
      scoreTextDisplay.textContent = "You lost!"
      scoreTextDisplayMove.textContent = `${playerChoice} is beaten by ${computerChoice}.`

   }
   updateScoreDisplayIcon(computerChoice, computerScoreDisplayIcon);
   updateScoreDisplayIcon(playerChoice, humanScoreDisplayIcon);


}

function updateScoreDisplayIcon (choice, element){
   if(choice === "Rock"){
      element.style.backgroundImage = "url('images/fist.png')"
   } else if(choice === "Paper"){
      element.style.backgroundImage = "url('images/hand-paper.png')"
   } else if(choice === "Scissors"){
      element.style.backgroundImage = "url('images/scissors.png')"
   }
   element.classList.add('change');
   setTimeout(() => {
      element.classList.remove('change');
  }, 500);
}
 