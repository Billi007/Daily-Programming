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

//# 16 Implement a function that flattens a nested array in JavaScript, converting it into a single-level array. 
//# method-1
const flattenArray = (arr) => { 
  return arr.flat(Infinity)
}
console.log(flattenArray([4,5,7,[2,8,4,7],[4,1,8,[5,8,1,7]]]));

//# method-2
const flat = function(arr, n){
 if(n === 0){
    return arr.slice()
 }
 let result = [];
 for(let i = 0; i <arr.length; i++) {
  if(Array.isArray(arr[i])){
   const nested = flat(arr[i],  n - 1);
   result.push(...nested)
  }
  else{
    result.push(arr[i]);
  }
 }
 return result;
}
console.log(flat([4,5,7,[2,8,4,7],[4,1,8,[5,8,1,7]]]))


//# 17 Write a function that determines if two strings are anagrams of each other.
//# method-1
const checkAnagram = (str1, str2) => {
 return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(checkAnagram("abbi", "bbaa"));

// //# method-2
const checkAnagram1 = (str1, str2) => {
let result = {};
if(str1.length !== str2.length) return false;

for (char of str1) {
    
}
}
console.log(checkAnagram1("abbi", "bbaa"));