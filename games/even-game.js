import readlineSync from 'readline-sync';
import greetingsUser from '../src/cli.js';
import getRandomNumber from '../src/index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } return false;
};

const checkAnswer = (answer, number, name) => {
  let isCorrect = true;
  if ((answer === 'yes' && isEven(number)) || (answer === 'no' && !isEven(number))) {
    console.log('Correct!');
  } else {
    const correctAnswer = answer === 'yes' ? 'no' : 'yes';
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${name}!`);
    isCorrect = false;
  }

  return isCorrect;
};

const startGame = () => {
  let numberTries = 3;
  const nameUser = greetingsUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (numberTries > 0) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (!checkAnswer(answer, randomNumber, nameUser)) {
      break;
    }
    numberTries -= 1;
  }

  if (numberTries === 0) {
    console.log(`Congratulations, ${nameUser}!`);
  }
};

export default startGame;
