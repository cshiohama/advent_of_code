const {readFileSync} = require('fs');
let arr = readFileSync('./input/01.txt', 'utf-8').split(/\r?\n/);
let nums = '0123456789';
let first, last;
let total = 0;

for (let str of arr) {
  for (let i = 0 ; i < str.length ; i++) {
    if (nums.includes(str[i])) {
      first = str[i];
      break;
    }
  }

  for (let i = str.length - 1 ; i >= 0 ; i--) {
    if (nums.includes(str[i])) {
      last = str[i];
      break;
    }
  }

  total += Number(first + last);
}

console.log(total);