import startGameLogic from '../index.js';
import getRandomNumber from '../get-random.js';

const rules = "Find the greatest common divisor of given numbers.";

const LOWERBOUND = 0;
const UPPERBOUND = 100;

const startGame = () => startGameLogic(rules, generateQuestionAnswer);

const findGcd = (firstValue, secondValue) => {
  if (firstValue === secondValue) {
    return firstValue;
  }

  let greaterValue = Math.max(firstValue, secondValue);
  let lesserValue = Math.min(firstValue, secondValue);

  while (greaterValue % lesserValue != 0) {
    let residue = greaterValue % lesserValue;
    greaterValue = lesserValue;
    lesserValue = residue;
  }
  let gcd = lesserValue;
  return gcd;
};
    
const generateQuestionAnswer = () => {
  const firstNumber = getRandomNumber(LOWERBOUND, UPPERBOUND);
  const secondNumber = getRandomNumber(LOWERBOUND, UPPERBOUND);
  
  const question = `${firstNumber} ${secondNumber}`;
  const answer = findGcd(firstNumber, secondNumber);
  return [question, answer];
};

export default startGame;
