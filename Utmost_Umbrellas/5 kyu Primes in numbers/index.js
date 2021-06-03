/*
Description:

Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"


*/

// My solution

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}


function primeFactors(n){
  if (isPrime(n)) return `(${n})`
  let counter = {}
  let result =""
  for (let i= 2 ; i<= n ; i++) {
    if (isPrime(i) && n%i === 0) {
    counter[i] = counter[i] ? counter[i] + 1 : 1
    n=n/i
      i= i-1
    primeFactors(n)
    }
  }
  return result = `(${Object.entries(counter).map(el => el.join('**'))
    .join(')(').replace(/\*\*1/g, '')})`
}
