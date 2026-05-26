/* =========================================
   LOGIN
========================================= */

function abrirPopup(){

let user = document.querySelector('input[type="text"]').value;

let pass = document.querySelector('input[type="password"]').value;

/* LOGIN */

if(user === "magnata" && pass === "goku2026"){

document.getElementById("popup").style.display = "block";

}else{

alert("Usuário ou senha incorretos");

}

}

/* =========================================
   FECHAR POPUP
========================================= */

function fecharPopup(){

document.getElementById("popup").style.display = "none";

criarBolinha();

}

/* =========================================
   BOTÃO FLUTUANTE GOKU
========================================= */

function criarBolinha() {

if(document.getElementById("goku-float")) return;

const bolinha = document.createElement("div");

bolinha.id = "goku-float";

bolinha.innerHTML = `

<div id="fechar-float">✕</div>

<img src="https://raw.githubusercontent.com/matheusdasilvagama50-sudo/Teste-Garena/main/file_0000000065ec720eb50430b0cefab549.png">

`;

document.body.appendChild(bolinha);

/* POSIÇÃO */

let posX = localStorage.getItem("floatX");
let posY = localStorage.getItem("floatY");

if(posX && posY){

bolinha.style.left = posX;
bolinha.style.top = posY;

}else{

bolinha.style.right = "20px";
bolinha.style.top = "50%";

}

/* ESTILO */

bolinha.style.position = "fixed";
bolinha.style.width = "75px";
bolinha.style.height = "75px";
bolinha.style.borderRadius = "50%";
bolinha.style.background = "#111";
bolinha.style.border = "3px solid #a200ff";
bolinha.style.boxShadow = "0 0 25px #a200ff";
bolinha.style.display = "flex";
bolinha.style.alignItems = "center";
bolinha.style.justifyContent = "center";
bolinha.style.zIndex = "999999";
bolinha.style.cursor = "move";
bolinha.style.overflow = "visible";

/* IMAGEM */

const img = bolinha.querySelector("img");

img.style.width = "100%";
img.style.height = "100%";
img.style.borderRadius = "50%";
img.style.objectFit = "cover";

/* X */

const fechar = document.getElementById("fechar-float");

fechar.style.position = "absolute";
fechar.style.top = "-8px";
fechar.style.right = "-8px";
fechar.style.width = "25px";
fechar.style.height = "25px";
fechar.style.background = "#ff0033";
fechar.style.borderRadius = "50%";
fechar.style.display = "flex";
fechar.style.alignItems = "center";
fechar.style.justifyContent = "center";
fechar.style.color = "#fff";
fechar.style.fontSize = "14px";
fechar.style.fontWeight = "bold";
fechar.style.cursor = "pointer";

/* FECHAR */

fechar.onclick = (e) => {

e.stopPropagation();

bolinha.remove();

localStorage.removeItem("floatVisible");

};

/* ABRIR DASHBOARD */

bolinha.onclick = () => {

window.location.href = "dashboard.html";

};

/* SALVAR */

localStorage.setItem("floatVisible","true");

/* DRAG MOBILE */

let isDragging = false;

bolinha.addEventListener("touchstart", () => {

isDragging = true;

});

document.addEventListener("touchmove", (e) => {

if(!isDragging) return;

let touch = e.touches[0];

bolinha.style.left = touch.clientX - 35 + "px";
bolinha.style.top = touch.clientY - 35 + "px";

bolinha.style.right = "auto";

localStorage.setItem("floatX", bolinha.style.left);
localStorage.setItem("floatY", bolinha.style.top);

});

document.addEventListener("touchend", () => {

isDragging = false;

});

/* DRAG PC */

let mouseDrag = false;

bolinha.addEventListener("mousedown", () => {

mouseDrag = true;

});

document.addEventListener("mousemove", (e) => {

if(!mouseDrag) return;

bolinha.style.left = e.clientX - 35 + "px";
bolinha.style.top = e.clientY - 35 + "px";

bolinha.style.right = "auto";

localStorage.setItem("floatX", bolinha.style.left);
localStorage.setItem("floatY", bolinha.style.top);

});

document.addEventListener("mouseup", () => {

mouseDrag = false;

});

}

/* =========================================
   CONTINUAR BOLINHA
========================================= */

window.onload = () => {

if(localStorage.getItem("floatVisible") === "true"){

criarBolinha();

}

};
