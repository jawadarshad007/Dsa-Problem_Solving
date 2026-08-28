// Pow(X,N) Power exponential Problem




                        // Brute Force Approach
function mypow(x,n){
    let ans = 1;
    for (let i=1; i<=n; i++){
    ans *= x;
}
return ans;
}
console.log(mypow(3,5))
// Here TC = O(n)








// For most optimization, we solve it with binary exponentiation , which is O(logN) time complexity.



// 1) First convert the exponent N to binary representation.
// 2) Then we assiocate specific number to each binary number. 

// for example....Calculte 3^5
//  5 -----> binary = 101
// last sa read krn ga 1 = x^1
// than 0 = x^2
// than 1 = x^4
// final x^1 * x^4 = x^5 (ignore the 0 terms)






function mypow(x,n){
    let binaryForm = n;
    let ans = 1;
    
    while(binaryForm>0){
        if(binaryForm % 2 == 1){
            ans *= x
        }
        x *= x;
        binaryForm = Math.floor(binaryForm / 2);
    }
    return ans;
}
console.log(mypow(3,5))
