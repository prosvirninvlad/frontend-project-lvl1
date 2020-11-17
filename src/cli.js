import { question } from 'readline-sync';

export function greetUser() {
  print('Welcome to the Brain Games!');
  print(`Hello, ${readUsernameFromStdin()}!`);
}

function readUsernameFromStdin() {
  return question('May I have your name? ');
}

function print(...messages) {
  console.log.apply(console, messages);
}
