import runGame from "../index.js";

const DESCRIPTION = "¿Cual es el resultado de la expresión?";
const MIN_NUMBER = 1;
const MAX_NUMBER = 25;
const OPERATORS = ["+", "-", "*"];

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    default:
      throw new Error(`Operador no soportado: ${operator}`);
  }
};

const generateRound = () => {
  const firstNumber = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const operator = OPERATORS[getRandomInt(0, OPERATORS.length - 1)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = String(calculate(firstNumber, secondNumber, operator));

  return { question, correctAnswer };
};

export default function playCalcGame() {
  runGame(DESCRIPTION, generateRound);
}
