/*
Description:

Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""


*/

//My Solution

function solution(string) {
  string = string.split("");
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      string[i] = ` ${string[i]}`;
    }
  }

  return string.join("");
}
