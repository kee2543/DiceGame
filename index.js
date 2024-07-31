var random1 = Math.floor(Math.random()*6)+1;
var image1 = "images/dice" + random1 + ".png";
document.getElementsByClassName("img1")[0].setAttribute('src', image1);

var random2 = Math.floor(Math.random()*6)+1;
var image2 = "images/dice" + random2 + ".png";
document.getElementsByClassName("img2")[0].setAttribute('src', image2);

if (random1 > random2) {
    document.querySelector('h1').innerHTML = 'Player 1 Wins !';
} else if (random1 < random2) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins !';
} else {
    document.querySelector('h1').innerHTML = 'Draw !';
}