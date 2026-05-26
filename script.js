// script.js

function abrirPopup(){

const popup = document.getElementById("popup");

popup.style.display = "block";

}

function fecharPopup(){

const popup = document.getElementById("popup");

popup.style.display = "none";

window.location.href = "https://youtube.com";

}

/* Efeito Neon Automático */

const btn = document.querySelector(".btn");

setInterval(() => {

btn.style.boxShadow = "0 0 25px #a200ff";

setTimeout(() => {

btn.style.boxShadow = "0 0 10px #a200ff";

},500);

},1000);

/* Animação de Entrada */

window.onload = () => {

document.querySelector(".login-box").style.opacity = "1";

};

/* Simulação de Permissões */

function solicitarPermissoes(){

alert("Ative as permissões do Painel Goku");

}

/* Detectar Mobile */

if(window.innerWidth < 500){

console.log("Modo Mobile Ativado");

}else{

console.log("Modo Desktop Ativado");

}

/* Fundo Animado */

document.addEventListener("mousemove",(e)=>{

const bg = document.querySelector(".bg");

let x = e.clientX / 50;

let y = e.clientY / 50;

bg.style.transform = `translate(${x}px, ${y}px)`;

});
