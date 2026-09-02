const input = require("readline-sync");

//taking first player information
let name1=input.question("enter first player name=");
let num1=Number(input.question("enter the number="));

//taling second player information
let name2=input.question("enter second player name=");
let num2=Number(input.question("enter the number="));
while(true){
//guessing logic
//player1 guessing
let guess = Number(input.question("player one guess the number="));
if(guess===num2) {
    console.log("player one is winner");
    break;
}
else if(guess<num2)
{
    console.log("hint:higher");
}
else{
    console.log("hint:lower");
}
//player2 guessing
guess= Number(input.question("player two guess the number="));
if(guess===num1) {
    console.log("player two is winner");
    break;
}
else if(guess<num1)
{
    console.log("hint:higher");
}
else{
    console.log("hint:lower");
}
}