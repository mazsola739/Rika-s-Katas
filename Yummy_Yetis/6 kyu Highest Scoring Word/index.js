/*
Description:

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

//My solution

function high(x) {
  x = x.split(" ");
  let cx = [...x];
  for (let i = 0; i < x.length; i++) {
    if (x[i].length === 1) {
      x[i] = x[i].charCodeAt(0) - 96;
    } else {
      x[i] = x[i].split("");
      for (let j = 0; j < x[i].length; j++) {
        x[i][j] = x[i][j].charCodeAt(0) - 96;
      }
      x[i] = x[i].reduce((a, b) => a + b, 0);
    }
  }
  let k = x.indexOf(Math.max(...x));
  return cx[k];
}
