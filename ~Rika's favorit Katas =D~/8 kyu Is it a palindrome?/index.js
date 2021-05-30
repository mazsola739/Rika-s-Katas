/*
Description:

Write function that checks if a given string (case insensitive) is a palindrome.

*/

//My solution

function isPalindrome(x) {
  let reverse = x.split('').reverse().join('').toLowerCase()
  return x.toLowerCase() === reverse
}

//i like it

/ 4 variants of solution

let isPalindrome = x => RegExp(x, 'i').test([...x].reverse``.join``)

    isPalindrome = (x, X = x.toUpperCase``) => X == [...X].reverse``.join``

    isPalindrome = x => x.toLowerCase`` == [...x].reverse``.join``.toLowerCase``

    isPalindrome = (x, X = x.toUpperCase``) => `${[...X]}` == `${[...X].reverse``}`
