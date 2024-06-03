import { describe, test, it } from "node:test";
import { strict as assert } from "node:assert";
import { sum } from "./sum.js";

describe("sum", () => {
  it("works", () => {
    assert.equal(sum(2, 3), 5);
  });

  test("arguments default to 0", () => {
    assert.equal(sum(2), 2);
  });

  test("unexpected parameters", () => {
    assert.equal(sum("a", "b"), 0);
  });

  test("number coercion", () => {
    assert.equal(sum("1.5", 2), 3.5);
    assert.equal(sum(1, "2.2"), 3.2);
    assert.equal(sum("-1", "-1"), -2);
  });
});

function codiceFiscaleValido(codiceFiscale) {
  if (codiceFiscale.lenght !== 16) {
    return false;
  }
}

describe("codiceFiscaleValido", () => {
  test("se la lunghezza non e' 16 allora non e' valido", () => {
    assert.equal(codiceFiscaleValido("xxx"), false);
  });
});
