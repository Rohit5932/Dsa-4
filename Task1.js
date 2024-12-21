//Q1
// const name = prompt('Name: ');
// const age = prompt('Age: ');
// const color = prompt('Favorite Color: ');
// const city = prompt('City: ');

// console.log(`Hello ${name}, you are ${age} years old, your favorite color is ${color}, and you live in ${city}.`);

//Q2
// const minutes = prompt('Enter minutes: ');
// const hours = Math.floor(minutes / 60);
// const remainingMinutes = minutes % 60;

// console.log(`${minutes} minutes is equal to ${hours} hour(s) and ${remainingMinutes} minute(s).`);

//Q3
// const score = prompt('Enter the score: ');

// let grade;
// if (score >= 90 && score <= 100) {
//     grade = 'A';
// } else if (score >= 75 && score < 90) {
//     grade = 'B';
// } else if (score >= 60 && score < 75) {
//     grade = 'C';
// } else if (score >= 50 && score < 60) {
//     grade = 'D';
// } else if (score >= 35 && score < 50) {
//     grade = 'E';
// } else {
//     grade = 'Fail';
// }

// console.log(`The grade is: ${grade}`);

//Q4
// const num1 = parseFloat(prompt('Enter first number: '));
// const num2 = parseFloat(prompt('Enter second number: '));
// const operation = prompt('Enter an operation (+, -, *, /, %): ');

// let result;
// switch (operation) {
//     case '+':
//         result = num1 + num2;
//         break;
//     case '-':
//         result = num1 - num2;
//         break;
//     case '*':
//         result = num1 * num2;
//         break;
//     case '/':
//         result = num1 / num2;
//         break;
//     case '%':
//         result = num1 % num2;
//         break;
//     default:
//         result = 'Invalid operation';
// }

// console.log(`The result is: ${result}`);

//Q5
// const n = parseInt(prompt('Enter an integer: '));

// let answer;
// if (n % 3 === 0 && n % 5 === 0) {
//     answer = 'FizzBuzz';
// } else if (n % 3 === 0) {
//     answer = 'Fizz';
// } else if (n % 5 === 0) {
//     answer = 'Buzz';
// } else {
//     answer = String(n);
// }
// console.log(answer);

