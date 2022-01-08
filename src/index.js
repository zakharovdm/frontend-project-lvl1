const LOWERBOUND = 0;
const UPPERBOUND = 100;

const LOWERINDEX = 0;
const UPPERINDEX = 2;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomNumber = () => {
  const randomNumber = getRandomInt(LOWERBOUND, UPPERBOUND);
  return randomNumber;
};

const getRandomIndex = () => {
  const randomIndex = getRandomInt(LOWERINDEX, UPPERINDEX);
  return randomIndex;
};

const calculating = (operator, firstValue, secondValue) => {
  let result;
  switch (operator) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    default:
  }
  return result;
};

export { getRandomNumber, getRandomIndex, calculating };
