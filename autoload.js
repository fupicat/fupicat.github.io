let disqus = document.createElement('section');
disqus.id = 'disqus';
let container = document.createElement('div');
container.className = 'container';
disqus.appendChild(container);
document.getElementsByTagName('body')[0].appendChild(disqus);

let newChild = document.getElementById('disqus');
let refChild = document.getElementsByTagName('footer')[0];
document.getElementsByTagName('body')[0].insertBefore(newChild, refChild);

$(function(){
  $('')

  $('#disqus').load('/autoload/disqus.html')
  $("header").load("/autoload/navbar.html");
  $("footer").load("/autoload/footer.html");
});