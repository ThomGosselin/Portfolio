let dtz = document.getElementById("progDTZ");
let dtzproject = document.getElementById('dtzproject');
let close = document.querySelector('.close');

dtz.onclick = function(){
 dtz.classList.add('active');
 dtzproject.classList.add('active');
 close.classList.add('active');
}

close.onclick = function(){
dtz.classList.remove('active');
dtzproject.classList.remove('active');
close.classList.remove('active');
}