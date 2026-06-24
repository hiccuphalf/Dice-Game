var Player1 = prompt("Name of Player 1: ");
var Player2 = prompt("Name of Player 2: ");

document.querySelector("p").innerHTML = Player1;
document.querySelector(".Player2").innerHTML = Player2;

var randomNumber1 = Math.floor((Math.random()*6) + 1);
var randomNumber2 = Math.floor((Math.random()*6) + 1);
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelector(".img1").setAttribute("src" , randomImageSource);

document.querySelector(".img2").setAttribute("src" , randomImageSource2);

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Tie" ; 
}else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML =  Player1 + " wins";
}else{
    document.querySelector("h1").innerHTML = Player2 + " wins";
}