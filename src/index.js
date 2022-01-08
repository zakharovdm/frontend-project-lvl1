import readlineSync from 'readline-sync';
import greetingsUser from './cli.js';

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

export default startGameLogic;
