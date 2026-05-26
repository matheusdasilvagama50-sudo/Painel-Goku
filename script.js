function abrirPopup(){

const user = document.querySelector('input[type="text"]').value;

const pass = document.querySelector('input[type="password"]').value;

if(user === "magnata" && pass === "goku2026"){

document.getElementById("popup").style.display = "block";

}else{

alert("Login incorreto");

}

}

function fecharPopup(){

window.location.href = "dashboard.html";

}

/* INSTALAR APP */

let deferredPrompt;

window.addEventListener("beforeinstallprompt",(e)=>{

e.preventDefault();

deferredPrompt = e;

document.getElementById("installBox").style.display = "block";

});

document.getElementById("installBtn").addEventListener("click",async()=>{

if(!deferredPrompt) return;

deferredPrompt.prompt();

await deferredPrompt.userChoice;

deferredPrompt = null;

document.getElementById("installBox").style.display = "none";

});
