#!/usr/bin/env node

/**
 * Arithmetic operations supported by the calculator CLI.
 */
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }
  return a % b;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed.');
  }
  return Math.sqrt(n);
}

const operations = {
  add: addition,
  subtract: subtraction,
  multiply: multiplication,
  divide: division,
  modulo,
  power,
  sqrt: squareRoot,
};

const unaryOperations = new Set(['sqrt']);

function calculate(operation, a, b) {
  const fn = operations[operation];
  if (!fn) {
    throw new Error(`Unsupported operation: ${operation}`);
  }

  if (!Number.isFinite(a)) {
    throw new Error('Operands must be finite numbers.');
  }

  if (unaryOperations.has(operation)) {
    return fn(a);
  }

  if (!Number.isFinite(b)) {
    throw new Error('Operands must be finite numbers.');
  }

  return fn(a, b);
}

if (require.main === module) {
  const [operation, left, right] = process.argv.slice(2);
  const a = Number(left);
  const b = Number(right);

  try {
    const result = calculate(operation, a, b);
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
  calculate,
};
