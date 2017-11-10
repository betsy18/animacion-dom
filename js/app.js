// se ejecuta cuando el obj, este totalmente cargado la pag. web
window.onload = function() {
    //escoger solo el td de nro 6
    var oneElement = document.getElementsByTagName('td')[6];
    oneElement.addEventListener('click', addBgc);

    var oneColor = document.getElementsByTagName('td');
    //oneColor.addEventListener('onekeydown', press);
};
   
function addBgc(event){
    event.target.style.backgroundColor='red';
}

//onkeydown

function press() {
    event.target.style.backgroundColor = "blue";
}