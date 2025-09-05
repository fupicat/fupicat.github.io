localStorage.setItem("redirect", false);

var tema = localStorage.getItem("tema");
var butt = document.getElementById("themebtn");

if (tema == undefined) {
  localStorage.setItem("tema", 0);
  tema = localStorage.getItem("tema");
}
console.log(tema);

var style = document.createElement("link");
style.rel = "stylesheet";
style.id = "tema";

if (tema == 0) {
  style.href = "/css/padrao.css";
} else if (tema == 1) {
  style.href = "/css/escuro.css";
  butt.textContent = "Tema: Escuro";
}

document.getElementsByTagName("head")[0].appendChild(style);

function changetheme() {
  tema = localStorage.getItem("tema");

  if (tema == 0) {
    localStorage.setItem("tema", 1);
    document.getElementById("tema").href = "/css/escuro.css";
    butt.textContent = "Tema: Escuro";
    return;
  }
  if (tema == 1) {
    localStorage.setItem("tema", 0);
    document.getElementById("tema").href = "/css/padrao.css";
    butt.textContent = "Tema: Padrão";
    return;
  }
}
