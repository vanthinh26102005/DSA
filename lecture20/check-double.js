const checkDouble = (arr) =>{
    arr.sort((a,b) => a-b) // ascending  
    // pick 1st number for comparing 
    for(let i=0; i< arr.length; i++){

        // variable for comparing
        // find double or half -> if found return true;
        const double = arr[i]*2;

        let left = i+1;
        let right = arr.length-1;

        while(left < right){
            let mid = Math.ceil((left+right)/2);

            console.log('left: ', left, ', mid: ', mid, ', right: ', right );
            console.log(arr[left], arr[mid], arr[right])

            if(arr[mid] === double){
                return true;
            }
            else if(arr[mid] <= double){
                left = mid + 1;
            }
            else if(arr[mid] >= double){
                right = mid -1;
            }

        }
        
    }
    return false;
};

console.log(checkDouble([10, 2, 5, 3, 7]))
console.log(checkDouble([9, 2, 5, 3, 7]))