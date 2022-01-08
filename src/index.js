import _ from 'lodash';

const LOWERBOUND = 0;
const UPPERBOUND = 100;

const LOWERINDEX = 0;
const UPPERINDEX = 2;

const getRandomNumber = () => {
  const randomNumber = _.random(LOWERBOUND, UPPERBOUND);
  return randomNumber;
};

const getRandomIndex = () => {
  const randomIndex = _.random(LOWERINDEX, UPPERINDEX);
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
