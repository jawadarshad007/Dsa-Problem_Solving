// Time Complexity is not the actual time taken by the program to run, but amount of time taken (operations) as function of input size(n).
//  It is denoted by Big O notation(upper bond)worst case.
 

// It is used for two resons:
// 1. To compare the efficiency of two algorithms.
// To make better algorithms and build better systems.


// how we calculate tc of this fucnion 4n^2 + 3n + 2 ==> Ans O(n^2)
// i) Ignore the constants.
// ii)pick largest term.




// Space Complexity

// TIme complecity table from best to worst case
// O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(n^3) < O(2^n) < O(n!)


// Common Time Complexities------Ya pata hona chaiya ka  algorithm time complexity kaise calculate karte hai.

// O(1) - Constant Time Complexity
let n=10;
let ans = n*(n+1)/2;
console.log(ans)
// idr input size n , no of operations ko effect nai kr rha , thats ways it is constant time complexity.



// O(n) - Linear Time Complexity
let fact=1;
let n=5
for(let i=1;i<=n;i++){
    fact*=i;
}
console.log(fact)




// O(n^2) - Quadratic Time Complexity
//2 nested loops, each loop runs n times, so total operations = n*n = n^2



// O(n^3) - Cubic Time Complexity
//3 nested loops, each loop runs n times, so total operations = n*n*n = n^3



// O(log n) - Logarithmic Time Complexity   
// Example: Binary Search Algorithm, where we divide the input size by 2 in each iteration, leading to logarithmic time complexity.
// Jhan bhi ap ko lage ki apka input size half ho rha hai, next itertoin ma maeez half ho raha ha , and next iteration ma mazeed half ho raha ha , wahn tc log n hoga.
// ITs mechanism 
// write here





// O(n log n) - Linearithmic Time Complexity
// Example: Merge Sort Algorithm, where we divide the input size by 2 in each iteration and perform a linear operation on each level of recursion, leading to linearithmic time complexity.



// O(2^n) - Exponential Time Complexity
// Example: Recursive Fibonacci Algorithm, where the number of function calls doubles with each increase in input size, leading to exponential time complexity.






// -----------------------------Examples of Time Complexity-----------------------------
// for a prime number loop runs i=2 to i^2 <= n
// so loop runs 2 to sqrt(n) times, so time complexity is O(sqrt(n)).



