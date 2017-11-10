// keyup

window.addEventListener('keyup', function(press) {

  var ascii = press.keyCode;
  var oneElement = document.getElementsByTagName('td')[6];
  var moveElement = document.getElementsByTagName('td');
  // Se ejecuta al presionar la tecla intro
  if (ascii === 13) {
    oneElement.classList.add('red');
    moveElement[2].classList.remove('red');
    moveElement[10].classList.remove('red');
    moveElement[5].classList.remove('red');
    moveElement[7].classList.remove('red');
  }
  // flecha arriba
  if (ascii === 38) {
    moveElement[2].classList.add('red');
    moveElement[6].classList.remove('red');
    moveElement[10].classList.remove('red');
    moveElement[5].classList.remove('red');
    moveElement[7].classList.remove('red');
  }
  // flecha abajo
  if (ascii === 40) {
    moveElement[10].classList.add('red');
    moveElement[2].classList.remove('red');
    moveElement[6].classList.remove('red');
    moveElement[5].classList.remove('red');
    moveElement[7].classList.remove('red');
  }
  // flecha izquierda
  if (ascii === 37) {
    moveElement[5].classList.add('red');
    moveElement[10].classList.remove('red');
    moveElement[2].classList.remove('red');
    moveElement[6].classList.remove('red');
    moveElement[7].classList.remove('red');
  }
  // flecha derecha
  if (ascii === 39) {
    moveElement[7].classList.add('red');
    moveElement[5].classList.remove('red');
    moveElement[2].classList.remove('red');
    moveElement[6].classList.remove('red');
    moveElement[10].classList.remove('red');
  }
});
  