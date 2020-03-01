var tema = Cookies.get('tema');
var butt = document.getElementById('themebtn');

if (tema == undefined) {
  Cookies.set('tema', 0);
  tema = Cookies.get('tema');
}
console.log(tema);

var style = document.createElement('link');
style.rel = 'stylesheet';
style.id = 'tema';

if (tema == 0) {
  style.href = '/css/padrao.css';
} else if (tema == 1) {
  style.href = '/css/escuro.css';
  butt.textContent = 'Tema: Escuro';
}

document.getElementsByTagName('head')[0].appendChild(style);

function changetheme() {
  
  tema = Cookies.get('tema');

  if (tema == 0) {
    Cookies.set('tema', 1);
    document.getElementById('tema').href = '/css/escuro.css'
    butt.textContent = 'Tema: Escuro';
    return;
  }
  if (tema == 1) {
    Cookies.set('tema', 0);
    document.getElementById('tema').href = '/css/padrao.css'
    butt.textContent = 'Tema: Padrão';
    return;
  }
}