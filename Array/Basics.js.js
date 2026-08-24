//traversing
let array = [2,4,65,9,12,87,90]
for (let i=0; i<array.length; i++){
    console.log(array[i])
}


// Insertion in an array
let array = [2,4,65,9,12,87,90]
array.push(100) // it will add 100 at the end of the array
console.log(array)



// Deletion in an array
let array = [2,4,65,9,12,87,90]
array.pop() // it will delete last element of the array
console.log(array)





// updating an element in an array
let array = [2,4,65,9,12,87,90]
array[3] = 100 // it will update 3rd index value to 100
console.log(array)





// Searching in an array (linear search)
function linearSearch(arr, target) {
  // Loop through every element in the array sequentially
  for (let i = 0; i < arr.length; i++) {
    // If the current element matches the target, return its index
    if (arr[i] === target) {
      return i;
    }
  }
  // Return -1 if the target is not found in the entire array
  return -1;
}
const numbers = [10, 50, 30, 70, 80, 20];
let index = linearSearch(numbers, 70)
console.log(`Element found at index: ${index}`) // Output: 3
console.log(linearSearch(numbers, 99)); // Output: -1
// TIme complexity of Linear Search is O(n)





// Element find at given index
function findElementAtIndex(arr, index) {
    if (index>=0 && index<arr.length){
        return arr[index]
    }
    else {
        console.log("Invalid INdex")
    }

}
const fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log(findElementAtIndex(fruits, 0));





// Find minimum number in an array 
let arr = [12,5,6,23,89,-65,9];
let smallest = arr[0];
for (let i =0; i<arr.length; i++){
    if (arr[i] < smallest){
        smallest = arr[i]
    }
}
console.log(`Smallest number ${smallest} `)




// Find maximum number in an array
let arr = [12,5,196,23,89,-65,9];
let largest = arr[0];
for (let i =0; i<arr.length; i++){
    if (arr[i] > largest){
        largest = arr[i]
    }
}
console.log(`Largest number ${largest} `)




// Find Second largest number in an array
let array3 = [10,5,10];
let largest = -Infinity; // Initialize largest to the smallest possible value
for (let i=0; i<array3.length; i++){
    if (array3[i] > largest){
        largest = array3[i]
    }
}
let secondLargest = -Infinity; // Initialize secondLargest to the smallest possible value
for (let i=0; i<array3.length; i++){
    if(array3[i] != largest){
        if(array3[i] > secondLargest){
            secondLargest = array3[i]
        }
    }
}
console.log(`Second largest number is ${secondLargest}`)








//reverse oringinal array
let array3 = [10,5,20,8,89];
let lastElement = array3.length-1
for (let i=0; i<array3.length/2; i++){
    let catchElement= array3[i]
    array3[i] =  array3[lastElement]
    array3[lastElement] = catchElement
    lastElement--;
}
console.log(array3)













// Find array is sorted or not
let arr = [ 2,3,6,33,77]
let isSorted = true;
for (let i=1; i<arr.length; i++){
    if (arr[i] >= arr[i-1]){
        isSorted = true;
    }
    else{
        isSorted = false;
        break;
    }
}
if (isSorted){
    console.log("true")
}
else{
    console.log("not")
}






//Remove duplicates from sorted array
let arr = [5,5,7,8,8,9,9,10,10]
let newArr = []
newArr[0] = arr[0];
let x = 0;
for (let i=1; i<arr.length; i++){
    if(arr[i] != newArr[x]){
        x++;
        newArr[x] = arr[i]
    } 
}
console.log(newArr)













// Find Duplicates from Sorted-Array
let arr = [5,5,7,8,8,9,9,10,10,32,11]
let newArr = []
let x=0
for (let i=1; i<arr.length; i++){
    if(arr[i] == arr[i-1]){
        newArr[x] = arr[i]
        x++
    }
}
console.log(newArr)







// Find Mising number in an array (Size)
let arr = [1,5,4,3]
let n =  5;
// Sum of n numbres
let sumOfnNumbers = (n*(n+1))/2;
// Sum of Array
let sumOfArray = 0;
for (let i=0; i<arr.length; i++){
    sumOfArray += arr[i]
}
console.log(`Missing number is ${sumOfnNumbers-sumOfArray}`)










// Rotate array by 1 
let arr = [9, 8, 7, 6, 4, 2, 1, 3]
let newArr= [];
let x=1;
for (let i=0; i<arr.length; i++){
    if (i== arr.length-1){
        newArr[0] = arr[i]
    }
    else{
        newArr[x]  = arr[i]
     x++;
    }
     
}
console.log(newArr)








// Rotate orignal array by 1
let arr = [9, 8, 7, 6, 4, 2, 1, 3]
let lastElement = arr[arr.length-1]
for(let i=arr.length-2; i>=0; i--){
    arr[i+1] = arr[i]
}
arr[0] = lastElement
console.log(arr)










// Move all zeros to end of array
let arr = [1, 0, 2, 0, 3, 0, 4, 5]
let x = 0;
for (let i=0; i<arr.length; i++){
    if (arr[i] != 0){
        arr[x] = arr[i]
        x++;
    }
}
for (let i=x; i<arr.length; i++){
    arr[i] = 0
}
console.log(arr)











                 