let circle = document.querySelector('#circle')
let upBtn = document.querySelector('#upBtn')
let downBtn = document.querySelector('#downBtn')

let rotateValue = circle.style.transform
let rotateSum;

let rotateFuncUP = ()=>{
   console.log(rotateValue);
   rotateSum = rotateValue + "rotate(-90deg)"
   circle.style.transform = rotateSum
   rotateValue = rotateSum
}

let rotateFuncDN = ()=>{
   console.log(rotateValue);
   rotateSum = rotateValue + "rotate(+90deg)"
   circle.style.transform = rotateSum
   rotateValue = rotateSum
}

upBtn.addEventListener('click', rotateFuncUP)
downBtn.addEventListener('click', rotateFuncDN)