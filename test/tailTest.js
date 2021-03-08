const assert = require('chai').assert;
const tail   = require('../tail');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5');
  });
});