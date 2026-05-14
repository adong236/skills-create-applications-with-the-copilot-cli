const { add, subtract, multiply, divide, calculate } = require("../calculator");

// ============================================
// Unit Tests for Node.js CLI Calculator
// ============================================
// Tests cover the four basic arithmetic operations:
//   Addition (+)
//   Subtraction (-)
//   Multiplication (*)
//   Division (/)
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

  test("throws error for unsupported operator", () => {
    expect(() => calculate(1, "%", 2)).toThrow("Unsupported operator '%'");
  });

  test("throws error for invalid operator string", () => {
    expect(() => calculate(1, "abc", 2)).toThrow("Unsupported operator");
  });

  test("handles division by zero through calculate", () => {
    expect(() => calculate(10, "/", 0)).toThrow("Division by zero is not allowed.");
  });
});
