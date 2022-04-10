//User Choice
let name = "Rob"
let yourChoice = 'rock';  

//User Choice function expression
const getUserChoice = (userInput) => {
   userInput = userInput.toLowerCase();
   return userInput === "paper" || userInput === "scissors" || userInput === "rock" ? userInput
        : `You typed ${userInput}, that is not Rock, Scissors, Paper`
}; 
//Computer Choice Function Expression
const getComputerChoice = () => {
  computerChoice = Math.floor(Math.random() * 3);
  return  computerChoice === 0 ? 'rock'
          :computerChoice === 1 ? 'scissors'
          : "paper";
};
// Standard nested else/if
// function determineWinner(userChoice, computerChoice) {
//   if (userChoice === computerChoice) {
//     return "Its a tie";
//   } else if (userChoice === "rock"){
//       if (computerChoice === "paper"){
//         return "Computer Wins";
//       } else {
//         return "You win";
//       }
//   } else if (userChoice === "scissors"){
//       if (computerChoice === "rock") {
//         return "Computer Wins";
//       } else {
//         return "You Win";
//       }
//   } else {
//       if (computerChoice === "scissors") {
//         return "Computer Wins";
//       } else {
//         return "You win"
//       }
//   }
// }

//nested ternary in else/if
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
  console.log(`You both chose ${computerChoice} It's a tie`);
  } else if (userChoice === "rock") {
    return computerChoice === "paper" ? "The computer chose paper, computer wins" : `The computer chose scissors, ${name} wins`; } 
    else if (userChoice === "scissors") {
    return computerChoice === "paper" ? `The computer chose paper, ${name} wins` : "The computer chose rock, computer wins";
  } else {  
    return computerChoice === "scissors" ? "The computer chose scissors, computer wins" : `The computer chose rock, ${name} wins`; 
  }
}

const playGame = () => {
  let userChoice = getUserChoice(yourChoice);
  let computerChoice = getComputerChoice();
  console.log(`${userChoice} ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
