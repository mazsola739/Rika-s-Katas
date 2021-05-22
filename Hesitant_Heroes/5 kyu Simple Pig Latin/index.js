/*
Description:

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

//My solution

function pigIt(str) {
  return str
    .split(" ")
    .map((el) =>
      el.match(/[a-z]/gim) ? el.substring(1) + el.substring(0, 1) + "ay" : el
    )
    .join(" ");
}
