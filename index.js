var RandomNo1 = Math.random();
RandomNo1 = Math.floor(RandomNo1 * 6);
RandomNo1 = RandomNo1 + 1;

var RandomImageSRC1 = "images/dice" + RandomNo1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",RandomImageSRC1);

var RandomNo2 = Math.random();
RandomNo2 = Math.floor(RandomNo2 * 6);
RandomNo2 = RandomNo2 + 1;

var RandomImageSRC2 = "images/dice" + RandomNo2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",RandomImageSRC2);

if(RandomNo1===RandomNo2){
    document.querySelector("h1").innerHTML = "DRAW";
}else if(RandomNo1>RandomNo2){
    document.querySelector("h1").innerHTML = "Player 1 is the Winner";
}else{
    document.querySelector("h1").innerHTML = "Player 2 is the Winner";
}