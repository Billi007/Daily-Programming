//# 15  Implement a function that takes two sorted arrays and merges them into a
 //single sorted array without using any built-in sorting functions. 

function mergeSortedArray(arr1, arr2){
    //[1,2,3,5,9,4,6,7,8]
    for(let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i])
    }
    
    for(let i =0; i < arr1.length; i++){
        let temp;
        for(let j = i+1; i < arr1.length; j++){
           if(arr1[i] > arr1[j]){
            temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp
           }
        }
    }
    return arr1;
    }
    console.log(mergeSortedArray([1,2,3,5,9],[4,6,7,8]))


//# 16 Write a function that checks if a given string is a palindrome, 
//considering only alphanumeric characters and ignoring case. 

//method 1
const checkPalindrome1 = (str) => {
let string = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
let start = 0;
let end = string.length - 1;
let result = true;

while(end > start) {
    if(string[start] !== string[end]){
        result = false;
    }
    start++;
    end--;
}
return result;
}

console.log(checkPalindrome1("^&**("))

//method 2

const checkPalindrome = (str) => {
let string = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
return string === string.split('').reverse().join('');
}

console.log(checkPalindrome("appa"))