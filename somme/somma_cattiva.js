function somma_cattiva(a, b) {
  return a + b;
}

console.log(somma_cattiva());
console.log(somma_cattiva(2, 3));
console.log(somma_cattiva("a", "b"));
console.log(somma_cattiva("1", 1));
console.log(somma_cattiva([], "xx"));

function twice(num) {
  return num * 2;
}

const twice2 = (num) => num * 2;

function sommaUnNumero2(a) {
  return function (b) {
    return a + b;
  };
}

const sommaUnNumero = (a) => (b) => a + b;

const somma10 = sommaUnNumero(10);

console.log(somma10(5));

function quadrato(num) {
  // if (num == undefined) {
  //  num = 0;
  // }
  return num * num;
}

console.log("quadrato di 5", quadrato(5));
console.log("quadrato senza argomento", quadrato());
