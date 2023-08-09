let startGame = confirm("shall we start the game");
if (startGame) {
  let playerChoice = prompt("please enter rock, paper or scissor");
  if (playerChoice) {
    let player1 = playerChoice.trim().toLowerCase();
    // player1 value is either other data so we use this if condition:
    if (player1 === "rock" || player1 === "paper" || player1 === "scissor") {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissor";
      let Result =
        player1 === computer
          ? "Tie game !"
          : player1 === "rock" && computer === "paper"
          ? `player1: ${player1}\n computer: ${computer}\n computer wins`
          : player1 === "paper" && computer === "scissor"
          ? `player1: ${player1}\n computer: ${computer}\n computer wins`
          : player1 === "scissor" && computer === "rock"
          ? `player1: ${player1}\n computer: ${computer}\n computer wins`
          : `player1: ${player1}\n computer: ${computer}\n player wins`;
      alert(Result);
      let playAgain = confirm("play Again?");
      playAgain ? location.reload() : alert("ok thanks for playing");
    } else {
      alert("you didn't enter rock paper scissor");
    }
  } else {
    alert("ok, fine may be next time");
  }
} else {
  alert("ok, may be next time");
}
