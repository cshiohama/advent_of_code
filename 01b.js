const {readFileSync} = require('fs');
let arr = readFileSync('./input/01.txt', 'utf-8').split(/\r?\n/);
let words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let nums = '0123456789';
let substr;
let total = 0;

function findFirst(str) {
  for (let i = 0 ; i < str.length ; i++) {
    if (nums.includes(str[i])) {
      return str[i];
    } else {
      substr = str.slice(i);

      for (let word of words) {
        if (substr.startsWith(word))
          return String(words.indexOf(word) + 1);
      }
    }
  }
}

function findLast(str) {
  while (str) {
    if (nums.includes(str[str.length - 1])) {
      return str[str.length -1];
    } else {
      for (let word of words) {
        if (str.endsWith(word)) {
          return String(words.indexOf(word) + 1);
        }
      }
    }
    str = str.slice(0, -1);
  }
}

for (let line of arr) {
  total += Number(findFirst(line) + findLast(line));
}

console.log(total); // 53894