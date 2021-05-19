/*
Description:

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it 
should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']

*/

//My Solution

function solution(str) {
  let array = [];
  for (let i = 0; i < str.length; i += 2) {
    if (str.length % 2 === 1) {
      str = str + "_";
      array.push(str.slice(i, i + 2));
    } else {
      array.push(str.slice(i, i + 2));
    }
  }
  return array;
}
