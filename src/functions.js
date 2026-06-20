const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1, string.length);
};
const reverseString = (string) => {
  const reverseArray = [];
  for (let i = string.length; i > 0; i--) {
    reverseArray.push(string.charAt(i - 1));
  }

  return reverseArray.join("");
};

const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  divide: (num1, num2) => num1 / num2,
  multiply: (num1, num2) => num1 * num2,
};

export { capitalize, reverseString, calculator };
