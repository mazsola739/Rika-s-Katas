/*
Description:

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071

nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1

nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil

*/

//My solution

function nextBigger(n) {
  const sorted = n => `${n}`.split('').sort((a, b) => b - a)
  const max = +sorted(n).join('')
  for (let i = n + 1; i <= max; i++) {
    if (max === +sorted(i).join('')) return i
  }
 return -1
}

