import { capitalize, reverseString, calculator } from "../src/functions.js";

test("First letter should be capital", () => {
  expect(capitalize("vagoi")).toBe("Vagoi");
});

test("Should work on numbers", () => {
  expect(capitalize("1agoi")).toBe("1agoi");
});

test("Should work on symbols", () => {
  expect(capitalize("$agoi")).toBe("$agoi");
});

test("Should reverse the string", () => {
  expect(reverseString("Mikay")).toBe("yakiM");
});

test("Should reverse the string", () => {
  expect(reverseString("baho")).toBe("ohab");
});

test("object should add", () => {
  expect(calculator.add(1, 3)).toBe(4);
});

test("object should add decimals", () => {
  expect(calculator.add(0.55, 3)).toBe(3.55);
});

test("object should subtract", () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test("object should subtract decimals", () => {
  expect(calculator.subtract(10, 4.5)).toBe(5.5);
});

test("object should divide", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("object should divide decimals", () => {
  expect(calculator.divide(10, 0.5)).toBe(20);
});

test("object should multiply", () => {
  expect(calculator.multiply(10, 3)).toBe(30);
});

test("object should multiply decimals", () => {
  expect(calculator.multiply(10, 0.5)).toBe(5);
});
