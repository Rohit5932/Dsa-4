// // Q1
// const prompt = require('prompt-sync')();
// const input = prompt('Enter a binary array (comma-separated): ');
// const stringArray = input.split(',');
// const nums = stringArray.map(Number);

// let maxConsecutiveOnes = 0;
// let currentCount = 0;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//         currentCount++;
//         if (currentCount > maxConsecutiveOnes) {
//             maxConsecutiveOnes = currentCount;
//         }
//     } else {
//         currentCount = 0;
//     }
// }

// console.log(`The maximum number of consecutive 1's is: ${maxConsecutiveOnes}`);

//Q2
// const prompt = require('prompt-sync')();
// const input = prompt('Enter an array (comma-separated): ');
// const arr = input.split(',').map(Number);

// const frequency = {};

// for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (frequency[num]) {
//         frequency[num]++;
//     } else {
//         frequency[num] = 1;
//     }
// }

// console.log('The frequency of each element is:');
// for (let key in frequency) {
//     console.log(`${key}: ${frequency[key]}`);
// }