/*
Description:

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

//My solution

function humanReadable(seconds) {
  let second = seconds;
  let minutes = ~~(second / 60);
  second -= minutes * 60;
  let hours = ~~(minutes / 60);
  minutes -= hours * 60;
  let result = [`${hours}`, `${minutes}`, `${second}`];
  return result.map((el) => (el.length === 1 ? "0" + el : el)).join(":");
}
