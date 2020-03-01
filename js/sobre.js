var howmany = 0;
var plus = new Audio('VGMenuHighlight.wav');
var select = new Audio('VGMenuSelect.wav');

function addsom(who) {
  console.log('hmm');
  howmany += 1;
  who.style.color = '#ca0f0f';
  if (howmany > 5) {
    select.pause();
    select.currentTime = 0;
    select.play();
    window.setTimeout("window.location.href = 'projetos/jogo.html'", 400);
    return
  }
  plus.pause();
  plus.currentTime = 0;
  plus.play();
}