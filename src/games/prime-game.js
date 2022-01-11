import startGameLogic from '../index.js';
import getRandomNumber from '../get-random.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const LOWERBOUND = 0;
const UPPERBOUND = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  } return true;
};

const generateQuestionAnswer = () => {
  const question = getRandomNumber(LOWERBOUND, UPPERBOUND);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const startGame = () => startGameLogic(rules, generateQuestionAnswer);

export default startGame;
