/*
The makeLooper() function (make_looper in Python) takes a string (of non-zero length) as an argument. It returns a function. The function it 
returns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.

For example:

var abc = makeLooper('abc');
abc(); // should return 'a' on this first call
abc(); // should return 'b' on this second call
abc(); // should return 'c' on this third call
abc(); // should return 'a' again on this fourth call

*/

//My solution

