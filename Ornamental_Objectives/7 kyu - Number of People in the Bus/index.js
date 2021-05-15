/*
Kata
Docs
Blog
Kumite

    Forum

    Leaders

    4 kyu
    893

7 kyu
Number of People in the Bus
74315690% of 6,15317,491 of 53,153aryan-firouzian
JavaScript
Train AgainNext Kata

    Details
    Solutions
    Forks (18)
    Discourse (125)
    Translations

Collect|
How satisfied are you with this kata?

    Very
    Somewhat
    None

Hide Kata Description
Description:
Number of people in the bus

There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people 
get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the 
last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.

*/

//My solution

var number = function (busStops) {
  return busStops.reduce((el, [x, y]) => el + x - y, 0);
};
