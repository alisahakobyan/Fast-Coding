var oneLetter = randomItem(letter);
var oneElement = document.getElementById(oneLetter);


function CorrectWordSound(){
   ding = new Audio('assets/correctWord.wav');
	ding.play();
}


function randomItem(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}




