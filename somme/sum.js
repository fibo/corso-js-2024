export function sum(a = 0, b = 0) {
  let numA = Number(a);
  let numB = Number(b);
  if (isNaN(numA)) {
    numA = 0;
  }
  if (isNaN(numB)) {
    numB = 0;
  }
  return numA + numB;
}
