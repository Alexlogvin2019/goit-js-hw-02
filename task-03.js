"use strict";

const findLongestWord = function(string) {
  const stringArray = string.split(" ");
  let longestWordNumber = 0;
  let longestWord;
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > longestWordNumber) {
      longestWordNumber = stringArray[i].length;
      longestWord = stringArray[i];
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
