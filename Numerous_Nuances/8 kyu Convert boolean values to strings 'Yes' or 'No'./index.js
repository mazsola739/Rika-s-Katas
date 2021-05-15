/*
Description:

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

*/

//My solution

/* old solution
function boolToWord( bool ){
  if(bool !== true) {
    return 'No'
  } else {
    return 'Yes'
  }
}
*/

function boolToWord(bool) {
  return bool !== true ? "No" : "Yes";
}
