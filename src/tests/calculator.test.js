const test = require('node:test');
const assert = require('node:assert/strict');

const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
  calculate,
} = require('../calculator');

test('basic arithmetic operations', () => {
  assert.equal(addition(2, 3), 5);
  assert.equal(subtraction(7, 4), 3);
  assert.equal(multiplication(6, 7), 42);
  assert.equal(division(8, 2), 4);
});

test('modulo returns the remainder and rejects a zero divisor', () => {
  assert.equal(modulo(10, 3), 1);
  assert.throws(() => modulo(10, 0), /Modulo by zero/);
});

test('power raises a base to an exponent', () => {
  assert.equal(power(2, 5), 32);
  assert.equal(power(5, 0), 1);
});

test('square root returns real roots and rejects negative values', () => {
  assert.equal(squareRoot(81), 9);
  assert.throws(() => squareRoot(-1), /negative/);
});

test('calculate dispatches extended operations', () => {
  assert.equal(calculate('modulo', 10, 4), 2);
  assert.equal(calculate('power', 3, 3), 27);
  assert.equal(calculate('sqrt', 49), 7);
});
