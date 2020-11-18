export const isEven = (number) => !(number % 2);
export const random = (max) => Math.floor(Math.random() * Math.floor(max));
export const gcd = (numberA, numberB) => (numberB ? gcd(numberB, numberA % numberB) : numberA);
