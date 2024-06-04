import { unique } from "./unique.js";

console.log("qua mettiamo gli esempi sugli array");

//metto in una variabile l'oggetto DOM
const button = document.getElementById("unique");
console.log(button);

const inputLista = document.getElementById("lista");

const output = document.getElementById("output");

//definisco la funzione
function clickButton(event) {
  console.log("click");
  console.log(typeof inputLista.value);

  const lista = inputLista.value.split(" ");

  output.innerHTML = unique(lista).join(" ");
  // console.log(event);
  // event.target.innerHTML = "ok";
}

//associo l'evento all'input
button.addEventListener("click", clickButton);
//button.onclick = clickButton;

unique();
