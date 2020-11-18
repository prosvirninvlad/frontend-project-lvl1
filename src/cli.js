import { question } from 'readline-sync';

export const read = (prompt) => question(prompt && `${prompt} `);
export const print = (...messages) => console.log(...messages);

export default { print, read };
