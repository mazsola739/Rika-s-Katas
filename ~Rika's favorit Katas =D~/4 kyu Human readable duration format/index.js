/*
Description:

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"

For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.
Detailed rules

The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

*/

//My solution

function formatDuration(seconds) {
  if ( seconds === 0) return "now"
  let time = {y: 0, d: 0, h: 0, m: 0, s: 0},
      second = ~~(seconds), minutes, hours, days, years,
      s = " second", m = " minute", h = " hour", d = " day", y = " year",
      needS = "s", result

    minutes = ~~(second / 60)
    second -= minutes*60
    hours = ~~(minutes / 60)
    minutes -= hours*60
    days = ~~(hours / 24)
    hours -= days*24
    years = ~~(days / 365)
    days -= years*365
    
    time.s =+ second
    time.m =+ minutes
    time.h =+ hours
    time.d =+ days
    time.y =+ years
    
    if (time.s ===0) {s= ""} else if (time.s <= 1) {s =`${time.s}`+s } else {s =`${time.s}` + s + needS}
    if (time.m ===0) {m= ""} else if (time.m <= 1) {m =`${time.m}`+m } else {m =`${time.m}` + m + needS}
    if (time.h ===0) {h= ""} else if (time.h <= 1) {h =`${time.h}`+h } else {h =`${time.h}` + h + needS}
    if (time.d ===0) {d= ""} else if (time.d <= 1) {d =`${time.d}`+d } else {d =`${time.d}` + d + needS}
    if (time.y ===0) {y= ""} else if (time.y <= 1) {y =`${time.y}`+y } else {y =`${time.y}` + y + needS}
    
    result = `${y},${d},${h},${m},${s}`.split(',').filter(el => (el.length !==0))
  
    if (result.length === 1) {
      return `${result}`
    }
    if (result.length === 2) {
      return `${result[0]} and ${result[1]}`
    }
  for (let i = 0; i < result.length ; i++) {
    if (result[i] === result[result.length-1]) {
      result[result.length-1] = result[result.length-1]
    } else if (result[i] === result[result.length-2]) {
      result[result.length-2] = `${result[result.length-2]} and `
    } else {
      result[i] = `${result[i]}, `
    }
  }
 //console.log(time, result)
  return result.join('')
}
