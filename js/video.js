let videoCaps = document.querySelector("#videoCaps");
let capsVideoPlayer = document.querySelector("#capsVideoPlayer");
let videoPhelps = document.querySelector("#videoPhelps");
let phelpsVideoPlayer = document.querySelector("#phelpsVideoPlayer");
let videoPremierMD = document.querySelector("#videoPremierMD");
let videoIDM = document.querySelector("#videoIDM");
let idmVideoPlayer = document.querySelector("#idmVideoPlayer");
let videoGD = document.querySelector("#videoGD");
let premierMDvideoPlayer = document.querySelector("#premierMDvideoPlayer");
let gdVideoPlayer = document.querySelector("#gdVideoPlayer");
let video1V = document.querySelector("#video1V");
let fvVideoPlayer = document.querySelector("#fvVideoPlayer");
let close = document.querySelector(".close");

videoCaps.onclick = function(){
    videoCaps.classList.add('active');
    capsVideoPlayer.classList.add('active');
    close.classList.add("active");
}
videoPhelps.onclick = function(){
    videoPhelps.classList.add('active');
    phelpsVideoPlayer.classList.add('active');
    close.classList.add("active");
}
videoPremierMD.onclick = function(){
    videoPremierMD.classList.add('active');
    premierMDvideoPlayer.classList.add('active');
    close.classList.add("active");
}
videoIDM.onclick = function(){
    videoIDM.classList.add('active');
    idmVideoPlayer.classList.add('active');
    close.classList.add("active");
}
videoGD.onclick = function(){
    videoGD.classList.add('active');
    gdVideoPlayer.classList.add('active');
    close.classList.add("active");
}
video1V.onclick = function(){
    video1V.classList.add('active');
    fvVideoPlayer.classList.add('active');
    close.classList.add("active");
}
close.onclick = function(){
    videoCaps.classList.remove('active');
    videoPhelps.classList.remove('active');
    videoIDM.classList.remove('active');
    videoPremierMD.classList.remove('active');
    capsVideoPlayer.classList.remove('active');
    phelpsVideoPlayer.classList.remove('active');
    premierMDvideoPlayer.classList.remove('active');
    premierMDvideoPlayer.classList.remove('active');
    videoGD.classList.remove('active');
    video1V.classList.remove('active');
    gdVideoPlayer.classList.remove('active');
    fvVideoPlayer.classList.remove('active');
    close.classList.remove("active");

}