import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} from "../src/functions.js";

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

test("should encrypt a letter by 1", () => {
  expect(caesarCipher("a", 1)).toBe("b");
});

test("should encrypt any letter by 2", () => {
  expect(caesarCipher("g", 2)).toBe("i");
});

test("should encrypt a string of word", () => {
  expect(caesarCipher("aaa", 9)).toBe("jjj");
});

test("should encrypt a string of word with capital and preseve it", () => {
  expect(caesarCipher("MikaA the Cat", 2)).toBe("OkmcC vjg Ecv");
});

test("should encrypt letters that go beyond the alphabet", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("should preserve symbols and spaces", () => {
  expect(caesarCipher("$ %^?| # & () + =", 5)).toBe("$ %^?| # & () + =");
});
