/*
Description:

Given an array containing only zeros and ones, find the index of the zero that, if converted to one, will make the longest sequence of ones.

For instance, given the array:

[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]

replacing the zero at index 10 (counting from 0) forms a sequence of 9 ones:

[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1]
                  '------------^------------'

Your task is to complete the function that determines where to replace a zero with a one to make the maximum length subsequence.

Notes:

    If there are multiple results, return the last one:

[1, 1, 0, 1, 1, 0, 1, 1] ==> 5

    The array will always contain only zeros and ones.

Can you do this in one pass?
*/

//My solution

function replaceZero(arr) {
  let ones = arr.join``.split`0`;
  let lengthOfOnes = [];
  for (let i = 0; i < ones.length - 1; i++) {
    lengthOfOnes.push(ones[i].length + ones[i + 1].length);
  }
  let index = lengthOfOnes.lastIndexOf(Math.max(...lengthOfOnes));
  let count = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) count++;
    if (count === index) return i;
  }
  return index;
}
