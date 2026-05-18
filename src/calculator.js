/**
 * Calculator - A Node.js CLI calculator application
 *
 * Supported operations:
 *   - addition
 *   - subtraction
 *   - multiplication
 *   - division
 *   - modulo
 *   - power (exponentiation)
 *   - squareRoot
 */

/**
 * addition - Returns the sum of two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addition(a, b) {
  return a + b;
}

/**
 * subtraction - Returns the difference of two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtraction(a, b) {
  return a - b;
}

/**
 * multiplication - Returns the product of two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiplication(a, b) {
  return a * b;
}

/**
 * division - Returns the quotient of two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} if b is zero
 */
function division(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

/**
 * modulo - Returns the remainder of a divided by b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} if b is zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed");
  }
  return a % b;
}

/**
 * power - Returns base raised to the exponent
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * squareRoot - Returns the square root of n
 * @param {number} n
 * @returns {number}
 * @throws {Error} if n is negative
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Cannot take the square root of a negative number");
  }
  return Math.sqrt(n);
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
};
