import promptly from 'promptly';

export const read = (prompt) => promptly.prompt(prompt && `${prompt} `);
export const print = (message) => console.log(message);

export default { print, read };
