let disqus = document.createElement('section');
disqus.id = 'disqus';
disqus.style = 'background-color: #2e2633; box-shadow: inset 0px 6px 15px -8px black;';
let container = document.createElement('div');
container.className = 'container';
disqus.appendChild(container);
document.getElementsByTagName('body')[0].appendChild(disqus);

let newChild = document.getElementById('disqus');
let refChild = document.getElementsByTagName('footer')[0];
document.getElementsByTagName('body')[0].insertBefore(newChild, refChild);

$(function(){
  $('#disqus').load('/autoload/disqus.html')
  $("header").load("/autoload/navbar.html");
  $("footer").load("/autoload/footer.html");
});