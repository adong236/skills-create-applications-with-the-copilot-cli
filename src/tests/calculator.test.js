const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require("../calculator");

// Basic operations

describe("addition", () => {
  test("adds two positive numbers", () => {
    expect(addition(2, 3)).toBe(5);
  });

  test("adds a positive and a negative number", () => {
    expect(addition(5, -3)).toBe(2);
  });

  test("adds two negative numbers", () => {
    expect(addition(-4, -6)).toBe(-10);
  });
});

describe("subtraction", () => {
  test("subtracts two positive numbers", () => {
    expect(subtraction(10, 4)).toBe(6);
  });

  test("subtracts a larger number from a smaller one", () => {
    expect(subtraction(3, 7)).toBe(-4);
  });
});

describe("multiplication", () => {
  test("multiplies two positive numbers", () => {
    expect(multiplication(3, 4)).toBe(12);
  });

  test("multiplies by zero", () => {
    expect(multiplication(5, 0)).toBe(0);
  });

  test("multiplies two negative numbers", () => {
    expect(multiplication(-3, -4)).toBe(12);
  });
});

describe("division", () => {
  test("divides two positive numbers", () => {
    expect(division(10, 2)).toBe(5);
  });

  test("divides resulting in a decimal", () => {
    expect(division(7, 2)).toBe(3.5);
  });

  test("throws an error on division by zero", () => {
    expect(() => division(5, 0)).toThrow("Division by zero is not allowed");
  });
});

// Extended operations

describe("modulo", () => {
  test("modulo returns remainder of division", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("modulo returns 0 when evenly divisible", () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test("modulo works with negative dividend", () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test("throws an error on modulo by zero", () => {
    expect(() => modulo(5, 0)).toThrow("Modulo by zero is not allowed");
  });
});

describe("power (exponentiation)", () => {
  test("power raises base to a positive exponent", () => {
    expect(power(2, 10)).toBe(1024);
  });

  test("power returns 1 for exponent 0", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("power handles negative exponent", () => {
    expect(power(2, -1)).toBe(0.5);
  });

  test("power handles fractional exponent (square root equivalent)", () => {
    expect(power(9, 0.5)).toBe(3);
  });
});

describe("squareRoot", () => {
  test("square root of a perfect square", () => {
    expect(squareRoot(25)).toBe(5);
  });

  test("square root of zero is zero", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("square root of a non-perfect square", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  test("throws an error for square root of a negative number", () => {
    expect(() => squareRoot(-9)).toThrow(
      "Cannot take the square root of a negative number"
    );
  });
});
