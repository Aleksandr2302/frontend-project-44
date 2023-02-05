import * as readlineSync from "readline-sync";

// Объявление глобальных переменных
let userName;
let resultOfCorrectAnswer = "";
let getRandomNumber;
let isGameOver;

// Приветствие
const greetings = () => {
  userName = readlineSync.question(
    "Welcome to the Brain Games! \nMay I have your name? "
  );
  console.log(`${"Hello,"} ${userName}${"!"}`);
};
greetings();

// Правила игры
const rulesOfGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
rulesOfGame();

// функция вывода рандомного числа
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Вопрос юзеру
const question = () => {
  getRandomNumber = getRandom(1, 100);
  console.log(`${"Question:"} ${getRandomNumber}`);
};

// Критерии правильного ответа
const correctAnswer = () => {
  if (getRandomNumber % 2 === 0) {
    resultOfCorrectAnswer = "yes";
  } else if (getRandomNumber % 2 !== 0) {
    resultOfCorrectAnswer = "no";
  }
};

// функция сравнения корректного ответа с  ответом юзера
const compareOfAnswer = () => {
  const answer = readlineSync.question("Your answer:");
  if (resultOfCorrectAnswer === answer) {
    console.log("Correct!");
  } else if (resultOfCorrectAnswer !== answer) {
    console.log(
      `${answer} ${"is wrong answer ;(. Correct answer was"} ${resultOfCorrectAnswer}.\n${"Let's try again,"} ${userName}!`
    );
    isGameOver = "true";
  }
};

// Счетчик запуска игры
const runGameThreeTimes = () => {
  const count = 3;
  let i = 0;
  while (i < count && isGameOver !== "true") {
    question();
    correctAnswer();
    compareOfAnswer();
    i += 1;
  }
  if (i === 3 && isGameOver !== "true") {
    console.log(`${"Congratulations,"} ${userName}!`);
  } else {
    return;
  }
};

runGameThreeTimes();
