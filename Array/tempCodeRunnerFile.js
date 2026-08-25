let array =[-2, 1, -3, 4, -1, 2, 1, -5, 4];
let currSum =0;  maxSum = -Infinity;
for (let i=0; i<array.length; i++){
    currSum += array[i]
    maxSum = Math.max(currSum,maxSum)
    if(currSum<0){
        currSum=0;
    }
}
console.log(`Maximum Subarray sum :${maxSum}`)

