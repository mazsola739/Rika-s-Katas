/*
Description:

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

//My solution

const count = (string) =>
  string.split("").reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});
