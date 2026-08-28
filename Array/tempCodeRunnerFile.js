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