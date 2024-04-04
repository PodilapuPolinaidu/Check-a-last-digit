const a = parseInt(prompt("Enter a value"));
const b = parseInt(prompt("Enter b value"));
const c = parseInt(prompt("Enter c value"));

let result1 = a % 10;
let result2 = b % 10;
let result3 = c % 10;

if (result1 == result2 && result1 == result3) {
  document.write(`${a}, ${b} and ${c} have the same last digit`);
} else {
  document.write(`${a}, ${b} and ${c} does not have the same last digit`);
}
