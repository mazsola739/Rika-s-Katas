/*
Description:

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered

Input strings s1 and s2 are null terminated.

Examples

scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False


*/

//My solution

function scramble(str1, str2) {
  let occurencesofStr1 = str1.split("").reduce((object, key) => {
    object[key] ? object[key]++ : (object[key] = 1);
    return object;
  }, {});
  console.log(occurencesofStr1);
  return str2
    .split("")
    .every((character) => --occurencesofStr1[character] >= 0);
}

/*function scramble(str1, str2) {
  str1 = str1;
  str2 = str2.split('');
  let boo = true;
  str2.map(function(letter){
    if(str1.indexOf(letter) === -1){
      boo = false;
    }
  });
  return boo;
}*/
