import readlineSync from "readline-sync";

const ROUNDS_TO_WIN = 3;

export default function runGame(description, generateRound) {
  console.log("¡Bienvenido a Brain Games!");
  const name = readlineSync.question("¿Cual es tu nombre? ");
  console.log(`¡Hola, ${name}!`);
  console.log(description);

  let correctAnswers = 0;

  while (correctAnswers < ROUNDS_TO_WIN) {
    const { question, correctAnswer } = generateRound();
    console.log(`Pregunta: ${question}`);
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
