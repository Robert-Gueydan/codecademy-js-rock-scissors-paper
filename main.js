//User Choice
let firstName = "Rob"
let yourChoice = 'bombs';  

// User Choice function expression
const getUserChoice = (userInput) => {
userInput = userInput.toLowerCase();
if (userInput === "rock") {
  return `${userInput}`
} else if (userInput === "scissors") {
  return `${userInput}`
} else if (userInput === "paper") {
  return `${userInput}`
} else if (userInput === "bomb")  {
  return `${userInput}`
} else {
  return "That is not a valid Choice"
}
}

//Computer Choice Function Expression
const getComputerChoice = () => {
  computerChoice = Math.floor(Math.random() * 3);
  return  computerChoice === 0 ? 'rock'
          :computerChoice === 1 ? 'scissors'
          : "paper";
};

// determine winner function
 function determineWinner(userChoice, computerChoice) {
   if (userChoice === computerChoice) {
     return "Its a tie";
   } else if (userChoice === "rock"){
       if (computerChoice === "paper"){
         return "Computer Wins";
       } else {
         return "You win";
       }
   } else if (userChoice === "scissors"){
       if (computerChoice === "rock") {
         return "Computer Wins";
       } else {
         return "You Win";
       }
   } else if (userChoice === "paper"){
       if (computerChoice === "scissors") {
         return "Computer Wins";
       } else {
         return "you win"
       }
    } else if (userChoice === "bomb"){
      return "BOOOM You always win"
    } else {
      return "You did not make a valid choice, computer wins"
    }
   } 

//playGame function
const playGame = () => {
  let userChoice = getUserChoice(yourChoice);
  let computerChoice = getComputerChoice();

  console.log(`You chose, ${yourChoice} and the computer chose, ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
  }
  
playGame();


