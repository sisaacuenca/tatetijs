"use strict";
var turno = 0;
function init() {
  //variables

  var btn1 = document.querySelector("#btn1");
  var btn2 = document.querySelector("#btn2");
  var btn3 = document.querySelector("#btn3");
  var btn4 = document.querySelector("#btn4");
  var btn5 = document.querySelector("#btn5");
  var btn6 = document.querySelector("#btn6");
  var btn7 = document.querySelector("#btn7");
  var btn8 = document.querySelector("#btn8");
  var btn9 = document.querySelector("#btn9");
  var turnode = document.querySelector("#turnoDe");

  function validarTurno() {
    if (turno % 2 == 0) {
      turnode.textContent = "es turno de X";
      return "O";
    } else {
      turnode.textContent = "es turno de O";
      return "X";
    }
  }

  btn1.onclick = function (e) {
    btn1.textContent = validarTurno();
    turno++;
  };
  btn2.onclick = function (e) {
    btn2.textContent = validarTurno();
    turno++;
  };
  btn3.onclick = function (e) {
    btn3.textContent = validarTurno();
    turno++;
  };
  btn4.onclick = function (e) {
    btn4.textContent = validarTurno();
    turno++;
  };
  btn5.onclick = function (e) {
    btn5.textContent = validarTurno();
    turno++;
  };
  btn6.onclick = function (e) {
    btn6.textContent = validarTurno();
    turno++;
  };
  btn7.onclick = function (e) {
    btn7.textContent = validarTurno();
    turno++;
  };
  btn8.onclick = function (e) {
    btn8.textContent = validarTurno();
    turno++;
  };
  btn9.onclick = function (e) {
    btn9.textContent = validarTurno();
    turno++;
  };
}
