let buttonVideo = document.querySelector(".animatedButton");
let videoProject = document.querySelector(".videoProject");
let close = document.querySelector(".close");
buttonVideo.onclick = function(){
    buttonVideo.classList.add('active');
    videoProject.classList.add('active');
    close.classList.add("active");
}
close.onclick = function(){
    buttonVideo.classList.remove('active');
    videoProject.classList.remove('active');
    close.classList.remove("active");

}