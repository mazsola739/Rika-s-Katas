/*

*/

//My solution

/*old solution
var CaesarCipher = function (shift) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  this.encode = (str) => {
    return str
      .toLowerCase()
      .replace(/[a-z]/g, (v) => {
        return alphabet[Math.abs((alphabet.indexOf(v) + shift) % 26)];
      })
      .toUpperCase();
  };
  this.decode = (str) => {
    return str
      .toLowerCase()
      .replace(/[a-z]/g, (v) => {
        if (alphabet.indexOf(v) - shift < 0)
          return alphabet[26 + (alphabet.indexOf(v) - shift)];
        return alphabet[alphabet.indexOf(v) - shift];
      })
      .toUpperCase();
  };
  return this;
};

*/

var CaesarCipher = function (shift) {
  var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  this.encode = function (str) {
    return str.replace(/[a-z]/gi, function (s) {
      return a[(a.indexOf(s.toUpperCase()) + shift) % 26];
    });
  };
  this.decode = function (str) {
    return str.replace(/[a-z]/gi, function (s) {
      return a[(a.indexOf(s.toUpperCase()) + 26 - shift) % 26];
    });
  };
};
