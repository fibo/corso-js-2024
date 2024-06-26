"use strict";
class Animale {
  nome;
  constructor(nome) {
    if (!nome || typeof nome !== "string") {
      throw new Error("Un animale deve avere un nome! Mi hai passato " + nome);
    }
    this.nome = nome;
  }
  verso() {}
}
class Cane extends Animale {
  razza;
  haLaCoda;
  constructor(nome, razza = undefined) {
    super(nome);
    this.razza = razza;
    this.haLaCoda = true;
  }
  verso() {
    return "Bau!";
  }
}
class Gatto extends Animale {
  constructor(nome) {
    super(nome);
  }
  verso() {
    return "Miao!";
  }
}
class Persona extends Animale {
  animali;
  constructor(nome, animali = []) {
    super(nome);
    if (!Array.isArray(animali)) {
      throw new Error("Mi devi dare una lista di animali!");
    }
    if (
      animali.every(function (element) {
        if (!element || typeof element !== "object") {
          return false;
        }
        if (element instanceof Persona) {
          return false;
        } else {
          return element instanceof Animale;
        }
      })
    ) {
      this.animali = animali;
    } else {
      throw new Error("Devono essere tutti animali!!");
    }
  }
  richiamoAnimali() {
    for (let animale of this.animali) {
      console.log(animale.nome, "Vieni qui!");
    }
  }
}
const cane1 = new Cane("Fido", "Chiwawa");
const cane2 = new Cane("Ugo", "Golden");
const gatto1 = new Gatto("Pippo");
const persona1 = new Persona("Alex", [cane1, gatto1]);
const persona2 = new Persona("Giorgia", [cane2]);
console.log(cane1.nome, cane1.razza, cane1.verso());
console.log(cane2);
console.log(gatto1, gatto1.verso());
console.log(persona1);
console.log(
  cane1 instanceof Animale,
  cane1 instanceof Cane,
  cane2 instanceof Gatto,
);
persona1.richiamoAnimali();
