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

const caesarCipher = (string, jump) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const specialCharacters = /^[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;
  const cipheredString = string.split("").map((toCipherLetter) => {
    if (toCipherLetter == " " || toCipherLetter.match(specialCharacters)) {
      return toCipherLetter;
    }
    const indexOfString = alphabet.findIndex((itemAlphabet) => {
      return (
        itemAlphabet == toCipherLetter ||
        itemAlphabet.toUpperCase() == toCipherLetter
      );
    });
    let finalIndex = indexOfString + jump;
    while (finalIndex >= 25) {
      finalIndex = finalIndex - 26;
    }
    if (toCipherLetter == toCipherLetter.toUpperCase()) {
      return alphabet[finalIndex].toUpperCase();
    } else {
      return alphabet[finalIndex];
    }
  });
  return cipheredString.join("");
};

const findAverage = (arrayOfNumbers) => {
  const totalValue = arrayOfNumbers.reduce((accumulator, item) => {
    accumulator += item;
    return accumulator;
  }, 0);
  const average = totalValue / arrayOfNumbers.length;
  return average;
};

const analyzeArray = (arrayOfNumbers) => {
  const average = findAverage(arrayOfNumbers);
  const sortedArrayOfNumbers = arrayOfNumbers.sort((a, b) => a - b);
  const lowestNumber = sortedArrayOfNumbers[0];
  const largestNumber = sortedArrayOfNumbers[sortedArrayOfNumbers.length - 1];
  const arrayLength = sortedArrayOfNumbers.length;
  return {
    average: average,
    min: lowestNumber,
    max: largestNumber,
    length: arrayLength,
  };
};
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
