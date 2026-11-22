import readlineSync from "readline-sync";

const ROUNDS_TO_WIN = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const isEven = (number) => number % 2 === 0;

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default function playEvenGame() {
  console.log("¡Bienvenido a Brain Games!");
  const name = readlineSync.question("¿Cual es tu nombre? ");
  console.log(`¡Hola, ${name}!`);
  console.log(
    'Responde "yes" si el número es par, de lo contrario responde "no".',
  );

  let correctAnswers = 0;

  while (correctAnswers < ROUNDS_TO_WIN) {
    const number = getRandomInt(MIN_NUMBER, MAX_NUMBER);
    const correctAnswer = isEven(number) ? "yes" : "no";

    console.log(`Pregunta: ${number}`);
    const userAnswer = readlineSync.question("Tu respuesta: ").trim();

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`,
      );
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }

    console.log("¡Correcto!");
    correctAnswers += 1;
  }

  console.log(`¡Felicidades, ${name}!`);
}
