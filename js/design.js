let projectIF = document.getElementById("projectIF");
let ifProject = document.getElementById("ifProject");
let projectME = document.getElementById("projectME");
let meProject = document.getElementById("meProject");
let projectTZ = document.getElementById("projectTZ");
let tzProject = document.getElementById("tzProject");
let projectMS = document.getElementById("projectMS");
let msProject = document.getElementById("msProject");
let projectJDQ = document.getElementById("projectJDQ");
let jdqProject = document.getElementById("jdqProject");
let projectIA = document.getElementById("projectIA");
let iaProject = document.getElementById("iaProject");
let projectSG = document.getElementById("projectSG");
let sgProject = document.getElementById("sgProject");
let projectBG = document.getElementById("projectBG");
let bgProject = document.getElementById("bgProject");
let close = document.querySelector(".close");

projectIF.onclick = function(){
    projectIF.classList.add('active');
    ifProject.classList.add('active');
    close.classList.add('active');
}
projectME.onclick = function(){
    projectME.classList.add('active');
    meProject.classList.add('active');
    close.classList.add('active');
}
projectTZ.onclick = function(){
    projectTZ.classList.add('active');
    tzProject.classList.add('active');
    close.classList.add('active');
}
projectMS.onclick = function(){
    projectMS.classList.add('active');
    msProject.classList.add('active');
    close.classList.add('active');
}
projectJDQ.onclick = function(){
    projectJDQ.classList.add('active');
    jdqProject.classList.add('active');
    close.classList.add('active');
}
projectIA.onclick = function(){
    projectIA.classList.add('active');
    iaProject.classList.add('active');
    close.classList.add('active');
}
projectSG.onclick = function(){
    projectSG.classList.add('active');
    sgProject.classList.add('active');
    close.classList.add('active');
}
projectBG.onclick = function(){
    projectBG.classList.add('active');
    bgProject.classList.add('active');
    close.classList.add('active');
}

close.onclick = function(){
    projectIF.classList.remove('active');
    ifProject.classList.remove('active');
    projectME.classList.remove('active');
    meProject.classList.remove('active');
    projectTZ.classList.remove('active');
    tzProject.classList.remove('active');
    projectMS.classList.remove('active');
    msProject.classList.remove('active');
    projectJDQ.classList.remove('active');
    jdqProject.classList.remove('active');
    projectIA.classList.remove('active');
    iaProject.classList.remove('active');
    projectSG.classList.remove('active');
    sgProject.classList.remove('active');
    projectBG.classList.remove('active');
    bgProject.classList.remove('active');
    close.classList.remove('active');
}