/*
Evaluate the given string with the given conditons.

The conditions will be passed in an array and will be formatted like this:

{symbol or digit}{comparison operator}{symbol or digit}

Return the results in an array.

The characters in the conditions will always be in the string. Characters in the string are chosen from ascii letters + @#$%^&*()_{}[]
Example

input string: "aab#HcCcc##l#"
conditions: ["a<b", "#==4", "c>=C", "H!=a"]

The conditions in this example array can be interpreted as:

    "a<b": The number of times "a" occurs in the string should be less than the number of times "b" occurs in the string
    "#==4": "#" should occur exactly 4 times in the string
    "c>=C": "c" should occur greater than or equal to the number of times "C" occurs
    "H!=a": The number of times "H" occurs should not equal the number of times "a" occurs

In this example condition 1 is false and 2, 3, 4 are true. So the return value will be an array as such:

[False, True, True, True]


*/

//My solution

function string_evaluation(string, condition) {
  let boos = [],
    num1,
    num2,
    operand;
  string = Object.entries(
    [...string].sort().reduce((el, i) => {
      el[i] = el[i] ? el[i] + 1 : 1;
      return el;
    }, {})
  );
  condition = condition.map((el) => [...el]);

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < condition.length; j++) {
      condition[j] = condition[j].map((el) =>
        el === string[i][0] ? `${string[i][1]}` : el
      );
    }
  }
  condition = condition
    .map((el) => el.join(""))
    .map((el) => {
      num1 = el.substring(0, 1);
      (num2 = el.substring(el.length - 1)),
        (operand = el.substring(1, el.length - 1));
      if (operand === "==") boos.push(num1 === num2);
      if (operand === "!=") boos.push(num1 !== num2);
      if (operand === "<") boos.push(num1 < num2);
      if (operand === ">") boos.push(num1 > num2);
      if (operand === "<=") boos.push(num1 <= num2);
      if (operand === ">=") boos.push(num1 >= num2);
    });
  return boos;
}
