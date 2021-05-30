/*
Description:

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= input.length <= 100

*/

//My solution

function validParentheses(parens) {
  parens = [...parens];
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(" && parens[i + 1] === ")") {
      parens.splice(i, 2);
      i = -1;
    }
  }
  return !parens.length;
}
