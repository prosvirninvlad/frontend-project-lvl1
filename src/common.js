export const isEven = (number) => !(number % 2);
export const random = (max) => Math.floor(Math.random() * Math.floor(max));
export const gcd = (numberA, numberB) => (numberB ? gcd(numberB, numberA % numberB) : numberA);
export const dividesBy = (number, divider) => !(number % divider);
export const isPrime = (number) => {
  if (number <= 3) {
    return number > 1;
  }
  if (dividesBy(number, 2) || dividesBy(number, 3)) {
    return false;
  }
  for (let i = 5; i * i <= number; i += 6) {
    if (dividesBy(number, i) || dividesBy(number, i + 2)) {
      return false;
    }
  }
  return true;
};
export const isNumber = (candidate) => typeof candidate === 'number';
