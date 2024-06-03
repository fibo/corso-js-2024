const MAX = 10;

function somma(a: number, b: number) {
  return a + b;
}

console.log(somma(3, 2));
console.log(somma(MAX, 2));

const sum = (a: number, b: number) => {
  console.log("sum", a, b);
  return a + b;
};

const sum2 = (a: number, b: number) => a + b;

const twice3 = (num: number) => num * 2;
