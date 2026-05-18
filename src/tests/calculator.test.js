const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require("../calculator");

// ============================================
// Unit Tests for Node.js CLI Calculator
// ============================================
// Tests cover arithmetic operations:
//   Addition (+)
//   Subtraction (-)
//   Multiplication (*)
//   Division (/)
//   Modulo (%)
//   Exponentiation (**)
//   Square Root (sqrt)
// Including edge cases and error handling
// ============================================

describe("Addition (+)", () => {
  // Basic operation from image: 2 + 3 = 5
  test("2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds two positive numbers", () => {
    expect(add(10, 20)).toBe(30);
  });

  test("adds a positive and a negative number", () => {
    expect(add(5, -3)).toBe(2);
  });

  test("adds two negative numbers", () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test("adds zero to a number", () => {
    expect(add(7, 0)).toBe(7);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });

  test("adds large numbers", () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });
});

describe("Subtraction (-)", () => {
  // Basic operation from image: 10 - 4 = 6
  test("10 - 4 = 6", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts two positive numbers", () => {
    expect(subtract(20, 5)).toBe(15);
  });

  test("subtracts a larger number from a smaller number", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracts a negative number (double negative)", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test("subtracts two negative numbers", () => {
    expect(subtract(-4, -6)).toBe(2);
  });

  test("subtracts zero from a number", () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

describe("Multiplication (*)", () => {
  // Basic operation from image: 45 * 2 = 90
  test("45 * 2 = 90", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies two positive numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(4, -5)).toBe(-20);
  });

  test("multiplies two negative numbers", () => {
    expect(multiply(-3, -8)).toBe(24);
  });

  test("multiplies by zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies by one", () => {
    expect(multiply(42, 1)).toBe(42);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });
});

describe("Division (/)", () => {
  // Basic operation from image: 20 / 5 = 4
  test("20 / 5 = 4", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides two positive numbers", () => {
    expect(divide(100, 4)).toBe(25);
  });

  test("divides with a negative divisor", () => {
    expect(divide(10, -2)).toBe(-5);
  });

  test("divides two negative numbers", () => {
    expect(divide(-12, -3)).toBe(4);
  });

  test("divides resulting in a decimal", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("divides by one", () => {
    expect(divide(15, 1)).toBe(15);
  });

  // Edge case: division by zero
  test("throws error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Division by zero is not allowed.");
  });
});

describe("Modulo (%)", () => {
  // Basic operation from image: 5 % 2 = 1
  test("5 % 2 = 1", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("returns remainder of two positive numbers", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test("handles negative dividend", () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test("handles negative divisor", () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test("handles decimal numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test("throws error when modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

describe("Exponentiation (**)", () => {
  // Basic operation from image: 2 ^ 3 = 8
  test("2 ** 3 = 8", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("raises a number to the power of 2", () => {
    expect(power(5, 2)).toBe(25);
  });

  test("raises a number to the power of 0", () => {
    expect(power(99, 0)).toBe(1);
  });

  test("raises a number to the power of 1", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("handles negative exponent", () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test("handles negative base with even exponent", () => {
    expect(power(-3, 2)).toBe(9);
  });

  test("handles negative base with odd exponent", () => {
    expect(power(-3, 3)).toBe(-27);
  });

  test("handles zero base", () => {
    expect(power(0, 5)).toBe(0);
  });
});

describe("Square Root (sqrt)", () => {
  // Basic operation from image: √16 = 4
  test("√16 = 4", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("returns square root of a perfect square", () => {
    expect(squareRoot(9)).toBe(3);
  });

  test("returns square root of a non-perfect square", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142);
  });

  test("returns zero for square root of zero", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("returns 1 for square root of 1", () => {
    expect(squareRoot(1)).toBe(1);
  });

  test("handles large numbers", () => {
    expect(squareRoot(1000000)).toBe(1000);
  });

  test("handles decimal numbers", () => {
    expect(squareRoot(2.25)).toBe(1.5);
  });

  // Edge case: negative number
  test("throws error for square root of negative number", () => {
    expect(() => squareRoot(-4)).toThrow("Square root of a negative number is not allowed.");
  });

  test("throws error for square root of -1", () => {
    expect(() => squareRoot(-1)).toThrow("Square root of a negative number is not allowed.");
  });
});

describe("calculate() dispatcher", () => {
  // Verifies the calculate function routes to correct operations
  test("routes addition correctly", () => {
    expect(calculate(2, "+", 3)).toBe(5);
  });

  test("routes subtraction correctly", () => {
    expect(calculate(10, "-", 4)).toBe(6);
  });

  test("routes multiplication correctly", () => {
    expect(calculate(45, "*", 2)).toBe(90);
  });

  test("routes division correctly", () => {
    expect(calculate(20, "/", 5)).toBe(4);
  });

  test("routes modulo correctly", () => {
    expect(calculate(5, "%", 2)).toBe(1);
  });

  test("routes exponentiation correctly", () => {
    expect(calculate(2, "**", 3)).toBe(8);
  });

  test("routes square root correctly", () => {
    expect(calculate(16, "sqrt", 0)).toBe(4);
  });

  test("throws error for unsupported operator", () => {
    expect(() => calculate(1, "abc", 2)).toThrow("Unsupported operator");
  });

  test("handles division by zero through calculate", () => {
    expect(() => calculate(10, "/", 0)).toThrow("Division by zero is not allowed.");
  });

  test("handles modulo by zero through calculate", () => {
    expect(() => calculate(10, "%", 0)).toThrow("Modulo by zero is not allowed.");
  });

  test("handles square root of negative through calculate", () => {
    expect(() => calculate(-4, "sqrt", 0)).toThrow("Square root of a negative number is not allowed.");
  });
});
