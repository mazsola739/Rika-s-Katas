/*
Description:

At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 should be in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears

*/

//My solution

function isMerge(s, part1, part2) {
  let stack = [[s, part1, part2]];
  if (s.length !== part1.length + part2.length) {
    return false;
  }
  while (stack.length) {
    [s, part1, part2] = stack.shift();
    if (!s.length) {
      return true;
    }
    if (part1[0] === s[0]) {
      stack.push([s.slice(1), part1.slice(1), part2]);
    }
    if (part2[0] === s[0]) {
      stack.push([s.slice(1), part1, part2.slice(1)]);
    }
  }
  return false;
}
