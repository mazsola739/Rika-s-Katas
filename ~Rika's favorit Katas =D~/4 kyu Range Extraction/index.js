/*
A format for expressing an ordered list of integers is to use a comma separated list of either

    individual integers
    or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

Courtesy of rosettacode.org

*/

//My solution

function converting(array){
  let array2 = [array[0], array[array.length-1]]
  return [array2.join("-")]
}

function solution(list){
 let result = [], temp = []
 for (let i = 0; i<list.length; i++ ){
   if (list[i]+1 === list[i+1]) {
     temp.push(list[i])
   } else {
     temp.push(list[i])
     result.push(temp)
     temp=[]
   }
 }
  result = result.map(el => el.length<3 ? el : converting(el))
  console.log(result)
  return result.join(",")
}

//clever

function solution(list){
   for(var i = 0; i < list.length; i++){
      var j = i;
      while(list[j] - list[j+1] == -1) j++;
      if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
  return list.join();
}
