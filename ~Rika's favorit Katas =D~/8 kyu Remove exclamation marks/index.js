/*
Description:

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

//My solution

function removeExclamationMarks(s) {
  return s.replace(/[!]/g,'');
}

//i like

const removeExclamationMarks = s => s.replace(/!/g,"") ;
