/*
Description:

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

//My solution

function find_average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += parseInt(array[i], 10);
  }
  return sum / array.length;
}
