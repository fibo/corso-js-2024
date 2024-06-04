const account1 = {
  nickname: "jonh",
  password: "password",
  role: "admin",
  whenCreated: "2024-06-04",
  location: "milano",
  age: 20,
  "e-mail": "jonh@aa..aa",
};

const account2 = {
  nickname: "red",
  password: "password",
  role: "admin2",
  whenCreated: "2024-08-04",
  location: " roma",
  age: 21,
};

const account3 = {
  nickname: "reddd",
  password: "password",
  role: "admin3",
  whenCreated: "2024-08-04",
  location: "Roma",
  age: 24,
};

console.log(account1);
console.log(account2);

const contaLocation = {};

/**
 * normalizza le location
 * @param {string} input
 * @return {string}
 */

function normalizeLocation(input) {
  let output = input;
  output = output.toLowerCase();
  output = output.trim();
  return output;
}

/**
 * media
 * @param {Array} lista
 * @return {number}
 */

function media(lista) {
  let somma = 0;
  const numeroElementi = lista.length;
  for (let num of lista) {
    somma = somma + num;
  }
  return Math.floor(somma / numeroElementi);
}

const ages = [];

console.log(media([10, 20, 30]));

const accounts = [account1, account2, account3];
for (let account of accounts) {
  const location = normalizeLocation(account.location);
  const numero = contaLocation[location];
  if (typeof numero == "undefined") {
    contaLocation[location] = 1;
  } else {
    contaLocation[location] = numero + 1;
  }

  ages.push(account.age);
}

console.log(contaLocation);
console.log("l'eta media è:", media(ages));
console.log(JSON.stringify(account1, null, 6));
