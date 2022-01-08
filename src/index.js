import readlineSync from 'readline-sync';
import greetingsUser from './cli.js';

const LOWERBOUND = 0;
const UPPERBOUND = 100;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomNumber = () => {
  const randomNumber = getRandomInt(LOWERBOUND, UPPERBOUND);
  return randomNumber;
};

const LOWERINDEX = 0;
const UPPERINDEX = 2;

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

const startGameLogic = (rules, generateQuestionAnswer) => {
  const numberTries = 3;
  const nameUser = greetingsUser();
  console.log(rules);

  for (let i = 0; i < numberTries; i += 1) {
    const [question, correctAnswer] = generateQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export {
  startGameLogic, getRandomNumber, getRandomIndex, calculating,
};
