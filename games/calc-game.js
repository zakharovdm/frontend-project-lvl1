import readlineSync from 'readline-sync';
import greetingsUser from '../src/cli.js';
import { getRandomNumber, getRandomIndex, calculating } from '../src/index.js';

const operators = ['+', '-', '*'];

const checkAnswer = (answer, result, name) => {
  let isCorrect = true;
  if (answer === result) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
    console.log(`Let's try again, ${name}!`);
    isCorrect = false;
  }

  return isCorrect;
};

const startGame = () => {
  let numberTries = 3;
  const nameUser = greetingsUser();
  console.log('What is the result of the expression?');

  while (numberTries > 0) {
    const firstValue = getRandomNumber();
    const secondValue = getRandomNumber();
    const operator = operators[getRandomIndex()];

    const result = calculating(operator, firstValue, secondValue);
    console.log(`Question: ${firstValue} ${operator} ${secondValue}`);
    const answer = Number(readlineSync.question('Your answer: '));

    if (!checkAnswer(answer, result, nameUser)) {
      break;
    }
    numberTries -= 1;
  }

  if (numberTries === 0) {
    console.log(`Congratulations, ${nameUser}!`);
  }
};

export default startGame;
