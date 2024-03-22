
let buttonA = document.querySelector(".addButton");
let buttonL = document.querySelector(".lowerButton");
let output = document.querySelector(".number");

buttonA.addEventListener("click", AddCounter);
buttonL.addEventListener("click", LowCounter);

function AddCounter() {
  output.innerHTML++;
}

function LowCounter() {
  if (output.innerHTML != 0) {
    output.innerHTML--;
  }
}