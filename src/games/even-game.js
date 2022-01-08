import startGameLogic from '../index.js';
import getRandomNumber from '../get-random.js';

const LOWERBOUND = 0;
const UPPERBOUND = 100;

const isEven = (number) => (number % 2 === 0);

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAnswer = () => {
  const question = getRandomNumber(LOWERBOUND, UPPERBOUND);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const startGame = () => startGameLogic(rules, generateQuestionAnswer);

export default startGame;
