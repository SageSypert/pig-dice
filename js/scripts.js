// Business Logic


//*NOTES*//

// Create player constructor
// Create object for player one and player two 
// Container with incrementing or zero score for each roll/ branching


// Player Object Constructor
function Player(playerNumber) {
  this.name = name;
  this.originalScore = 0;
  this.updatedScore = 0;
  this.hasRolled = true;
  this.firstTime =true;
}

function rolldice() {
  let randomDiceRoll = Math.floor(Math.random() * 6) + 1;
  if (randomDiceRoll === 1) {
    return 0;
  } else {
    return randomDiceRoll;
  }
}

function game() {
  let currentScore = rolldice();
  let hold = false;
  while (currentScore !== 0) {
    hold = confirm(`Your score is ${currentScore} Would you like to hold?`)
    if (hold === true) {break;}
    let newScore = rolldice()
    if (newScore === 0) {
      currentScore = 0;
    } else {
      currentScore += newScore;
    }
  }
  if (currentScore === 0) {
    alert("Ops sorry you rolled a 1");
  } else {
    alert(`Congratulations, your score is ${currentScore}!`);
  }
  return currentScore;
}

$(document).ready(function() {
  $("#roll").on("click", function(event) { //log original score
    event.preventDefault();

    game();
  });
});


//use hold button to answer boolean instead of ok/cancel. ok = true, cancel = false
//

// Player.prototype.diceRoll = function() {
  
//   if(this.firstTime) {
//     let originalScore = this.score;
//     this.firstTime = false;
//   }
//     updatedScore = score
  

//   if(hold === true) {
//     score = updatedScore;
//     return this.score;
  
//   } else {
//     // player.diceRoll()
//     let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
    
//     if (randomNumber1 === 1) {
//       alert("You rolled a 1! Sorry, your turn is over.");
//       firstTime = true;
//       this.score;
      
//     } else {
//       updatedScore += randomNumber1; //4
//       player.hasRolled = true;
//       // prompt("roll again?");  //replace
//       // prompt("hold?");  //replace
//       if ("roll again === true;") {
//         // this.diceRoll();
//         // hold = false;
//       } else {
//         score = updatedScore;
//         hold = true;
//         this.diceRoll();
//         firsttime = true;
//       };
//     };
//   };
// };
  

    
  
//     hold = false; //* Yet to declare
//     player.diceRoll();
//   };
//     firstTime = false;
// };



//ui logic

// Creates two players

// let currentPlayer = playerOne;
// player1 or player2


// function playerSwitch()  {
//   let currentPlayer = playerOne;
//   if(currentPlayer === playerOne)  {
//     currentPlayer = playerTwo;
//     console.log(currentPlayer);
//   } else {
//     currentPlayer = playerOne;
//     console.log(currentPlayer);
//   }
// }


// // player.diceRoll;

// $(document).ready(function() {

//   let playerOne = new Player("playerOne");
//   let playerTwo = new Player("playerTwo");
//   let currentPlayer = playerOne;
  
//   //hide hold button
//   if(currentPlayer.hasRolled) {
//     $("#roll").show();
//     $("#hold").show();
//   } else {
//     $("#roll").hide();
//     $("#hold").hide();
//   }
  
//   $("#roll").on("click", function(event){
//     event.preventDefault();
//     // currentPlayer.diceRoll()
//     console.log("clicked roll");
//   });

//   $("#hold").on("click", function(event){
//     event.preventDefault();
//     playerSwitch();
//     console.log("clicked hold");
//   });
// });

//function for program will always start at player 1
//switches back and forth when a player rolls 1 or holds.

// function PlayerDatabase () {
//   this.contacts ={};
//   this.currentId = 0;
// }

// PlayerDatabase.prototype.addPlayer = function(player) {
//   player.id = this.assignId();
//   this.players[player.id] = player;
// }

// PlayerDatabase.prototype.assignId() {
//   this.currentId += 1;
//   return this.currentId;
// }
//one function for just rolling the dice
// function rolldice(objectScore) {
//   let randomDiceRoll = Math.floor(Math.random() * 6) + 1;
//   console.log(randomDiceRoll);
//   if (randomDiceRoll === 1) {
//     return objectScore; //return original score
//     console.log()
//   } else {
//     return objectScore += randomDiceRoll;
//   }
// }

// function game() {
//   let currentScore = rolldice(this.originalScore);
//   let hold = false;
//   while (currentScore !== 0) {
//     hold = confirm(`Your score is ${currentScore} Would you like to hold?`)
    
//     if (hold === true) {break;}  //hold button adds score to final score and exits returns scoreValue

//     //roll button rolls random range between 1-6 adds value to 

//     let newScore = rolldice(this.originalScore)  //originalScore? originalScore pass through at beginning of turn
    
//     if (newScore === this.originalScore) {
//       currentScore = this.originalScore;
//       console.log(currentScore);
//     } else {
//       currentScore += newScore;
//       console.log(currentScore);
//     }
//   }
  
// //   if (currentScore === 0) {
// //     alert("Oops sorry you rolled a 1");
  
// //   } else {
// //     alert(`Congratulations, your score is ${currentScore}!`);
// //   }
// //   return currentScore;
// }