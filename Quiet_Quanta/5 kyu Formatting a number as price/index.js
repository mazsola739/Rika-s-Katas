/*
Description

Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51

Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, 
in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 
2 decimal characters, the function will also evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number

*/

//My solution

var numberToPrice = function (number) {
  if (!number || isNaN((number = Number(number)))) {
    return "NaN";
  }
  number =
    number >= 0
      ? Math.floor((number * 1000) / 10) / 100
      : Math.ceil((number * 1000) / 10) / 100;
  number = number.toFixed(2);
  let num = number.toString().split(".");
  num[0] = num[0].replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",");
  return num.join(".");
};
