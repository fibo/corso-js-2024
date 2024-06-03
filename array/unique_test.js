import { describe, test, it } from "node:test";
import { strict as assert } from "node:assert";
import { unique } from "./unique.js";

describe("unique", () => {
  test("se gli passo un array vuoto, restituisce un array vuoto", () => {
    assert.deepEqual(unique([]), []);
  });

  test("elimina i doppioni", () => {
    assert.deepEqual(unique([1, 2, 3]), [1, 2, 3]);
    // assert.deepEqual(unique([1, 2, 2, 3]), [1, 2, 3]);
    // assert.deepEqual(unique(['a', 1, 'b', 1]), ['a', 1, 'b']);
    // assert.deepEqual(unique(true, false, true), [true, false])
  });
});
