

// Maximum Subarray sum (Kadane's Algorithm)

                                  // Frist print all Maximum subarry
let array = [1,2,3,4,5]
for (let start=0; start<array.length; start++ ){
    for(let end=start; end<array.length; end++){
        for (let i=start; i<=end; i++){
            console.log(array[i])
        }
       console.log("\n");
    }
}
// Here TimeComplexity is O(n^3)

                                  // Print mnaximum subarray Sum BY (Brute Force Approach)
let array =[-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSum = -Infinity;
for (let start=0; start<array.length; start++){
    let currSum=0;
    for (let end=start; end<array.length; end++ ){
        currSum += array[end];
        maxSum = Math.max(currSum,maxSum)
    }
}
console.log(`Maximum Subarray sum :${maxSum}`)
// Here TimeComplexity is O(n^2)






                            // Print mnaximum subarray Sum BY most optimized (kadane's 
                            //Algorithm)
                        
let array =[-2, 1, -3, 4, -1, 2, 1, -5, 4];
let currSum =0; 
let  maxSum = -Infinity;
for (let i=0; i<array.length; i++){
    currSum += array[i]
    maxSum = Math.max(currSum,maxSum)
    if(currSum<0){
        currSum=0;
    }
}
console.log(`Maximum Subarray sum :${maxSum}`)
// Here TimeComplexity is O(n) linear 


