/*
Description:

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

*/

//My solution

function abbrevName(name) {
  name = name.split(" ");
  let firstLetters = name.map((x) => x[0]);
  return firstLetters.join(".").toUpperCase();
}

//refactor

const abbrevName = name => name.split(' ').map(el => el[0].toUpperCase()).join('.')
