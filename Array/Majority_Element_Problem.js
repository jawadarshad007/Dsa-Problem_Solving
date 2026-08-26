// Majority element is the element that appears more than n/2 times in an array of size n.

                        //Brute Force Approach
let array=[1,2,2,1,1];
let majorityElement = Math.floor(array.length/2)
for (let i=0; i<array.length; i++){
    let count=0;
    for (let j=i; j<array.length; j++){
        if (array[i]==array[j]){
            count++;
        }
        if(count>majorityElement){
            console.log("Majority Element is:",array[i])
            
        }
    }
}
// TC = O(n^2)








                           // Moores Voting Algorithm(Most Efficient Approach)
function findMajorityElement(arr) {
    let count=0; 
    let ans =0;
    for (let i=0; i<arr.length; i++){
        if(count==0){
            ans = arr[i]
        }
        if(ans==arr[i]){
            count++
        }
        else{
            count--;
        }
    }
    return ans;
}
arr = [1, 2, 2, 1, 1];
let ans = findMajorityElement(arr)
console.log(ans)