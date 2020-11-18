import { question } from 'readline-sync';

function readUsernameFromStdin() {
  return question('May I have your name? ');
}

function print(...messages) {
  console.log(...messages);
}

export default function greetUser() {
  print('Welcome to the Brain Games!');
  print(`Hello, ${readUsernameFromStdin()}!`);
}
