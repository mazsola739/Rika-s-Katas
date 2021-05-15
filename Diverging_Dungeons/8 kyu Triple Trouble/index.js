/*
Description:
Triple Trouble

Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.

*/

//My solution

function tripleTrouble(one, two, three) {
  one = one.split("");
  two = two.split("");
  three = three.split("");
  return one.map((v, i) => v + two[i] + three[i]).join("");
}
