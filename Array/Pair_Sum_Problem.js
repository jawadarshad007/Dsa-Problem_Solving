
// Pair Sum Problem | Brute to Optimal
                        // Brute Force Approach  (for sorted and unsorted array)
let array=[0, -1, 2, -3, 1]
let targetSum=-2;
let targetFound = false;
for (let i=0; i<array.length; i++){
    for (let j=i+1; j<array.length; j++){
        if (array[i]+array[j] == targetSum){
             targetFound = true;
            // console.log("Yes target sum exist, pair is",array[i],array[j])
        }
    }
}
if (targetFound){
    console.log("Found")
}
else{
    console.log("Not Found")
}
// TIme complexity of Brute Force Approach is O(n^2)






                          // Optimal Approach(for sorted array)
let array=[2,7,11,15];
let targetSum=26;
let currSum=0;
let i=0 , j=array.length-1
while(i<j){
    currSum=array[i]+array[j];
    if(currSum>targetSum){
        j--;
    }
    else if(currSum<targetSum){
        i++
    }
    else{
        console.log(`Found at indexes: ${i} ${j}`)
        break
    }
}
//Here Time complexity is O(n)
