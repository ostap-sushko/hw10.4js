let num = 0
const id = setInterval(()=>{
num+=1
console.log("пройшла 1 сек");

if(num === 5){
  clearInterval(id)
}
},1000) 


const imgRef = document.querySelector(".img")
let num1 = 0
let num2 = 100
let num3 = 0
const idd= setInterval(()=>{
num1+=1
num2+=1
num3+=1

imgRef.style.marginLeft = num3 + "px"
imgRef.style.width = num2 + "px"
if(num1=== 100){
  clearInterval(idd)
}
},10)



let score = 0;
let time = 10;

const buttonRef = document.getElementById("btn");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");


buttonRef.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});


const timer = setInterval(() => {
  time--;
  timeDisplay.textContent = time;

  if (time <= 0) {
    clearInterval(timer);
    buttonRef.disabled = true;
    alert("Гру завершено! Ваш результат: " + score);
  }
}, 1000);


const button = document.getElementById("startBtn");
const input = document.getElementById("seconds");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  let seconds = Number(input.value);

  if (seconds <= 0) {
    message.textContent = "Введіть коректне число!";
    return;
  }

  message.textContent = `Залишилось: ${seconds} сек`;

  const timer = setInterval(() => {
    seconds--;
    message.textContent = `Залишилось: ${seconds} сек`;

    if (seconds <= 0) {
      clearInterval(timer);
      message.textContent = "Час вийшов!";
    }
  }, 1000);
});