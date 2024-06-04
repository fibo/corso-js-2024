const pacchetto = require("../package.json");

console.log(typeof pacchetto.license);

if (pacchetto.private) {
  console.log("Il package è privato");
}

mostraDipendenze(pacchetto.devDependencies);

const obj = {
  nome: "primo oggetto",
};

obj.cognome = "cognome";

console.log("chiavi dell'oggetto", Object.keys(obj));
console.log("valori dell'oggetto", Object.values(obj));

/**
 *  @param {object} dipendenze
 */
function mostraDipendenze(dipendenze) {
  const numeroDipendenze = Object.keys(dipendenze).length;

  console.log("Le dipendenze del pacchetto sono", numeroDipendenze);
  for (let [nome, versione] of Object.entries(dipendenze)) {
    //  console.log("nome:", nome, "versione:", versione);
    console.log(`nome: ${nome} versione: ${versione}`);
  }
}
