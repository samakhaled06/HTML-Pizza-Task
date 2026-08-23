var PlayerOne = prompt("Choose Rock, Paper, or Scissors");
var PlayerTwo = prompt("Choose Rock, Paper, or Scissors");

if (PlayerOne === "Rock" && PlayerTwo === "Paper") {
    console.log("Player Two wins");
}
else if (PlayerOne === "Paper" && PlayerTwo === "Rock") {
    console.log("PlayerOne wins");
}
else if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Scissors") {
    console.log("PlayerOne wins");
}
else if (PlayerOne === "Scissors" && PlayerTwo === "Rock") {
    console.log("PlayerTwo wins");
}
else if (PlayerOne === "Paper" && PlayerTwo === "Scissors") {
    console.log("PlayerTwo wins");
}
else if (PlayerOne === "Scissors" && PlayerTwo === "Paper") {
    console.log("PlayerOne wins");
}
else if (PlayerOne === PlayerTwo) {
    console.log("tie");
}