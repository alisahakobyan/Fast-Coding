
var oneLetter = randomItem(letter);
var oneElement = document.getElementById(oneLetter);
var val = document.querySelector('input').value;
let score = 0;
let highScore;
let time = 8;



let button = document.getElementById("playButton");
let game1 = document.getElementById("FirstMod");
let game2 = document.getElementById("SecondMod");
let backButton = document.getElementById("Back");
let backButton2 = document.getElementById("Back2");
let backButton3 = document.getElementById("backBtn3");
let infoButton = document.getElementById("info");

let centerDiv = document.getElementById("center");
let chooseDiv = document.getElementById("choose");
let keyboardDiv = document.getElementById("keyboard");
let GameOverDiv = document.getElementById("gameOver");

let count = document.getElementById("start-count");

let gameDiv = document.getElementById("count-down");
let mainGame = document.getElementById("game");
let words = document.getElementById("info-text");
let typingArea = document.getElementById("input-box");
let yourScore = document.getElementById("score");
let highScoreElement = document.getElementById("high-score");
let timer = document.getElementById("time");

let finalScore = document.getElementById("finalScore");
let highestScore = document.getElementById("highest score");



 button.addEventListener('click', function () {
   centerDiv.style.display = "none"
   chooseDiv.style.display = "grid"

})

game1.addEventListener('click', function () {
   chooseDiv.style.display = "none";
   keyboardDiv.style.display = "grid";
   gameKeyboard()

})


game2.addEventListener('click', function () {
   chooseDiv.style.display = "none";
   gameDiv.style.display = "grid"
   count.innerHTML = 3;
   let stop = setInterval(function () {
      count.innerHTML = count.innerHTML - 1;
      if (count.innerHTML == 0) {
         clearInterval(stop);
         generalGame();
      }

   }, 1000)
})


backButton.addEventListener('click', function () {
   oneElement.classList.remove("selected");
   keyboardDiv.style.display = "none";
   chooseDiv.style.display = "grid";
})


backButton2.addEventListener('click', function () {
   centerDiv.style.display = "grid";
   chooseDiv.style.display = "none";
})

backButton3.addEventListener('click',function(){
   location.reload()
})




function generalGame() {
   gameDiv.style.display = "none";
   mainGame.style.display = "grid";

   typingArea.value = ""
   yourScore.innerHTML = score;
   words.innerHTML = randomItem(wordsArr);
   timer.innerHTML = time;



   let it = setInterval(function(){
      time--;
       timer.innerHTML = time;
       if(timer.innerHTML <= 0){
         clearInterval(it);
         mainGame.style.display = "none";
         GameOverDiv.style.display = "grid";
         finalScore.innerHTML ="Your Score: " + score;
      }
   },1000);


   if(!localStorage.score){
    localStorage.setItem("score", 0);
  }

 highScore = localStorage.getItem("score", 0);
 highScoreElement.innerHTML = highScore;
 
   typingArea.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
         if (typingArea.value == words.innerHTML) {
            score++;
            yourScore.innerHTML = score;
            typingArea.value = "";
            words.innerHTML = randomItem(wordsArr);
            time+=4;
            CorrectWordSound();

            if(score > highScore){
               highScore = score;
               highScoreElement.innerHTML = highScore;
               localStorage.score = highScore;
            }
         }else {
          time-=2;
            words.innerHTML = randomItem(wordsArr);
            typingArea.value = "";

         }
         timer.innerHTML = time;
         typingArea.value = "";
      }
   })

}



function gameKeyboard() {
   oneElement.classList.add("selected");
 
   document.addEventListener("keypress", function (event) {
 
      if (event.code == oneLetter) {
         oneElement.classList.remove("selected");
         oneLetter = randomItem(letter);
         oneElement = document.getElementById(oneLetter);
         oneElement.classList.add("selected");
 
      } else {
         let falseEl = document.getElementById(event.code);
         falseEl.classList.add("hit");

         setTimeout(function () {
            falseEl.classList.remove("hit");
         }, 200)
      }
   })
 
 }

