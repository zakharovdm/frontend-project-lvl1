import { getRandomNumber, startGameLogic } from '../index.js';

const isEven = (number) => (number % 2 === 0);

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAnswer = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const startGame = () => startGameLogic(rules, generateQuestionAnswer);

export default startGame;
