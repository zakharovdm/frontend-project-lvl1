import startGameLogic from '../index.js';
import getRandomNumber from '../get-random.js';

const rules = 'What number is missing in the progression?';

const MINLENGTHPROGRESSION = 5;
const MAXLENGTHPROGRESION = 10;

const MINSTEPPROGRESSION = 2;
const MAXSTEPPROGRESSION = 15;

const LOWERBOUND = 0;
const UPPERBOUND = 100;

const generateProgression = () => {
  const progression = [];
  const lengthProgression = getRandomNumber(MINLENGTHPROGRESSION, MAXLENGTHPROGRESION);
  const stepProgression = getRandomNumber(MINSTEPPROGRESSION, MAXSTEPPROGRESSION);
  let startPoint = getRandomNumber(LOWERBOUND, UPPERBOUND);

  for (let i = 0; i !== lengthProgression; i += 1) {
    progression.push(startPoint);
    startPoint += stepProgression;
  }

  return progression;
};

const generateQuestionAnswer = () => {
  const progression = generateProgression();
  const hideIndex = getRandomNumber(0, progression.length - 1);

  const answer = progression.splice(hideIndex, 1, '..');
  const question = progression.join(' ');

  return [question, answer];
};

const startGame = () => startGameLogic(rules, generateQuestionAnswer);

export default startGame;
