/*
Description:

Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"

*/

//My solution

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

//refactor

const nameShuffler = str => str.split(' ').reverse().join(' ');
