/*

*/

//My solution

function whoIsPaying(name){
 return  name.length <= 2 ? [name] : [name, name.substr(0, 2)];
}
