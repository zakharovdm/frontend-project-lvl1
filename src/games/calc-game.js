import startGameLogic from '../index.js';
import getRandomNumber from '../get-random.js';

const operators = ['+', '-', '*'];

const rules = 'What is the result of the expression?';

const MAX = operators.length - 1;
const LOWERBOUND = 0;
const UPPERBOUND = 100;

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
      throw new Error(`Operator ${operator} is not supported.`);
  }
  return result;
};

const generateQuestionAnswer = () => {
  const firstValue = getRandomNumber(LOWERBOUND, UPPERBOUND);
  const secondValue = getRandomNumber(LOWERBOUND, UPPERBOUND);
  const operator = operators[getRandomNumber(0, MAX)];

  const question = `${firstValue} ${operator} ${secondValue}`;
  const answer = calculating(operator, firstValue, secondValue);

  return [question, answer];
};

const startGame = () => startGameLogic(rules, generateQuestionAnswer);

export default startGame;
