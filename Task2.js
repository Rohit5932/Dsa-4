//Q1
// const N = parseInt(prompt('Enter the number of terms for the Fibonacci series: '));

// let fibSeries = [];
// let a = 0, b = 1, nextTerm;

// for (let i = 1; i <= N; i++) {
//     fibSeries.push(a);
//     nextTerm = a + b;
//     a = b;
//     b = nextTerm;
// }

// console.log(`The first ${N} terms of the Fibonacci series are: ${fibSeries.join(', ')}`);

//Q2
// const num1 = parseInt(prompt('Enter the first number: '));
// const num2 = parseInt(prompt('Enter the second number: '));

// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// function lcm(a, b) {
//     return (a * b) / gcd(a, b);
// }

// const result = lcm(num1, num2);
// console.log(`The LCM of ${num1} and ${num2} is: ${result}`);

//Q3
// const num1 = parseInt(prompt('Enter the first number: '));
// const num2 = parseInt(prompt('Enter the second number: '));

// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// const result = gcd(num1, num2);
// console.log(`The HCF or GCD of ${num1} and ${num2} is: ${result}`);

//Q4
// const n = parseInt(prompt('Enter a positive integer: '));

// let hailstoneSequence = [];
// let current = n;

// while (current !== 1) {
//     hailstoneSequence.push(current);
//     if (current % 2 === 0) {
//         current = current / 2;
//     } else {
//         current = 3 * current + 1;
//     }
// }
// hailstoneSequence.push(1);

// console.log(`The hailstone sequence starting from ${n} is: ${hailstoneSequence.join(', ')}`);

//Q5
// console.log('Choose an operation:');
// console.log('1. Addition');
// console.log('2. Subtraction');
// console.log('3. Multiplication');
// console.log('4. Division');

// const choice = parseInt(prompt('Enter your choice (1-4): '));
// const num1 = parseFloat(prompt('Enter the first number: '));
// const num2 = parseFloat(prompt('Enter the second number: '));

// let result;
// switch (choice) {
//     case 1:
//         result = num1 + num2;
//         console.log(`The result of addition is: ${result}`);
//         break;
//     case 2:
//         result = num1 - num2;
//         console.log(`The result of subtraction is: ${result}`);
//         break;
//     case 3:
//         result = num1 * num2;
//         console.log(`The result of multiplication is: ${result}`);
//         break;
//     case 4:
//         result = num1 / num2;
//         console.log(`The result of division is: ${result}`);
//         break;
//     default:
//         console.log('Invalid choice');
// }