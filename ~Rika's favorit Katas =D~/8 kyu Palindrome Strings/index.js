/*Description:
Palindrome strings

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome.
Examples

isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false

*/

//My solution

function isPalindrome(line) {
  if (typeof line == "number"){
    return line === parseFloat(line.toString().split('').reverse().join(''))
  }
  return line === line.split('').reverse().join('')
}

// i like

const isPalindrome = line =>
  [...`${line}`].reverse().join(``) == line;
