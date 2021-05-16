/*
Your task, is to create a NxN spiral with a given size.

For example, spiral with size 5 should look like this:

00000
....0
000.0
0...0
00000

and with the size 10:

0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000

Return value should contain array of arrays, of 0 and 1, for example for given size 5 result should be:

[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]

Because of the edge-cases for tiny spirals, the size will be at least 5.

General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.

*/

//My solution

var spiralize = function (size) {
  let arr = Array(size)
    .fill(0)
    .map((i) => Array(size));
  let oneOrZero = 1;
  for (let j = 0; j < Math.ceil(size / 2); j++) {
    for (let i = j; i < size - j; i++) {
      arr[i][j] = arr[j][i] = oneOrZero;
      arr[i][size - 1 - j] = arr[size - 1 - j][i] = oneOrZero;
    }
    oneOrZero = ++oneOrZero % 2;
    arr[j + 1][j] = arr[j + 2][j] === 1 ? 0 : oneOrZero;
  }
  return arr;
};
