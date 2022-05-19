let buttonCV = document.querySelector(".buttonCV");
let CV = document.querySelector(".CV");
let close = document.querySelector(".close");
buttonCV.onclick = function(){
    buttonCV.classList.add('active');
    CV.classList.add('active');
}
close.onclick = function(){
    buttonCV.classList.remove('active');
    CV.classList.remove('active');
}