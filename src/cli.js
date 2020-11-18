import promptly from 'promptly';

export const read = (prompt) => promptly.prompt(prompt && `${prompt} `);
export const print = (message) => console.log(message);
export async function readInt(prompt) {
  return parseInt(await read(prompt), 10);
}
export default { print, read };
