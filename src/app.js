/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let numeros = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1"
  ];
  let palos = ["♦", "♥", "♠", "♣"];

  let randomNumeros = numeros[Math.floor(Math.random() * numeros.length)];
  let randomPalos = palos[Math.floor(Math.random() * palos.length)];

  //console.log(randomPalos + randomNumeros);

  let cambioPalo = document.querySelector(".iconoUno");
  cambioPalo.innerHTML = randomPalos;

  let cambioPaloDos = document.querySelector(".iconoDos");
  cambioPaloDos.innerHTML = randomPalos;

  let cambioNumero = document.querySelector(".textoCentral");
  cambioNumero.innerHTML = randomNumeros;

  if (randomPalos == "♦" || randomPalos == "♥") {
    //console.log(randomPalos);
    let cambioColorPalo = document.querySelector(".iconoUno");
    cambioColorPalo.classList.add("red");
    let cambioColorPaloDos = document.querySelector(".iconoDos");
    cambioColorPaloDos.classList.add("red");
    let cambioColorNumeros = document.querySelector(".textoCentral");
    cambioColorNumeros.classList.add("red");
  }
};
