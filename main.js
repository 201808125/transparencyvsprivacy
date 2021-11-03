// JavaScript Document
console.log("TRANSPERANCY / PRIVACY");

// variáveis 

let botaoP = document.querySelector(".btn1");
let botaoT2 = document.querySelector(".btn2");

let privacy = document.querySelector(".privacy");
let transp = document.querySelector(".transp");

let selectedColor = ['#FF5A08', "#0BD3D8", '#FF0062', '#00FF36'];
let errColor = selectedColor[0];

let main = document.querySelector("main");

///////////////////////////////////////////////////////////////

// declara função

// botão_ click 

function pressP() {
    
  if (botaoP.className == "btn1") {
      
    botaoP.textContent = "transparency";
    botaoP.className = "btn2 transp";

  } else if (botaoP.className == "btn2 trasnp") {

    botaoP.style.borderColor = "#0AE5A6";
    botaoP.textContent = "privacy";
    botaoP.className = "btn1 privacy"; 
  }
}










  function pressT2() {
  document.querySelector('.btn2').style.borderColor = '#0AE5A6'
  document.querySelector('.btn2 span').textContent = 'privacy'
}








function pressP3() {
  document.querySelector('.btn3').style.borderColor = '#FF3803';
  document.querySelector('.btn3 span').textContent = 'transparency';
}

function pressT4() {
  document.querySelector('.btn4').style.borderColor = '#0AE5A6'
  document.querySelector('.btn4 span').textContent = 'privacy'

} */

// error // NÃO DÁ :(

function start() {
    
  // criar o elemento
  
  let appear = document.createElement("span");

  // configurar o elemento… conteúdo, classes, comportamentos…
    
  appear.innerHTML = "ERROR";

  let x = Math.random() * window.innerWidth + "px";
  let y = Math.random() * window.innerHeight + "px";
  appear.style.left = x;
  appear.style.top = y;

  appear.style.display = "block";
  appear.style.position = "absolute";
  appear.style.font = "Roboto";
  appear.style.fontSize = "40px";
  appear.style.color = errColor;

  main.appendChild(appear);
}

// isto é um array… devia ser selectedColor[0] <-- index
// random = num entre 0-1 (p. ex. 0.3) => 30% (do total pretendido)

let randIndexNumber = Math.floor(Math.random() * selectedColor.length);
console.log("numero da cor sorteada: ", randIndexNumber);

errColor = selectedColor[randIndexNumber];
console.log("valor da cor sorteada: ", errColor);

// selectedColor = Math.floor(Math.random());
// setTimeout(start, 10000);

setInterval(start, 5000);

///////////////////////////////////////////////////////////////

// add listerner

// botão_ click

botaoP.addEventListener('click', pressP);

botaoT2.addEventListener('click', pressT2);

//
