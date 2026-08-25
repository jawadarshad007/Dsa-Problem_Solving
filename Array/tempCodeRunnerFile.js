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
