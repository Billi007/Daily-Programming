// //#1 Write a JavaScript function to calculate the sum of two numbers.  
// //# DAY-1

// const AddTwoNumbers = (num1, num2) => {
// return num1 + num2;
// }
// AddTwoNumbers(5,9)

// //#2. Write a JavaScript program to find the maximum number in an array. 
// //# DAY-2
// const findMaxNumber = () => {
//     const numbers = [3, 5, 2, 81, 100];
//     let max = numbers[0]

//     for(i = 1; i < numbers.length; i++){
//       if(numbers[i] > max){
//         max = numbers[i];
//       }
//     }
//     return max;
// }
// console.log(findMaxNumber());



// //# DAY-3
// //#3 Write a JavaScript program to find the minimum number in an array. 

// const findMinimumNum = () => {
//   const numbers = [3, 5, 21, 81, 100];
//   let min = numbers[0];

//   for(let i=1 ; i < numbers.length; i++){
//     if(numbers[i] < min ){
//       min = numbers[i];
//     }
//   }
//   return min;
// }

// console.log(findMinimumNum())

// //#3 Write a JavaScript function to check if a given string is a palindrome 

// //method 1
// const checkPalindrome = (str) => {
//   let newstr = str.toLowerCase();
//  return newstr === newstr.split('').reverse().join('');
// }
// console.log(checkPalindrome("Level"));

// //method 2
// const checkPalindrome2 = (str) => {
//   let start = 0;
//   let end = str.length - 1;
//   let result = true;

//   while (end > start) {
//     if(str[start] != str[end]){
//       result = false;
//     }
//     start++;
//     end--;
//   }
//   return result;
// }
// let value = 'level';
// console.log(checkPalindrome2(value))  ;


// //#4 Write a JavaScript program to reverse a given string. 
// //method 1
// const reverseString = (str) => {
//   return str.split('').reverse().join('')
// }
// console.log(reverseString("Hello"));

// //method 2
// const reverseString2 = (str) => {
// let result = '';

// for(let i = str.length - 1; i >=0; i--){
//   result += str[i]
// }
// return result;
// }
// console.log(reverseString2("Hello MY name is Tanishka Gupta"));


// //#5 Write a JavaScript function that takes an array of numbers and 
// //returns a new array with only the even numbers. 
// //method 1

// const findEvenNum = () => {
// let arr = [8,24,45,49,6]
// return arr.filter(num => num % 2 === 0)
// }
// console.log(findEvenNum())

// //method 2
// const findEvenNum1 = (arr) => {
//   let result = [];
//   for(let i =0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0){
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(findEvenNum1([1,2,3,4,5,24]));

// //#6 Write a JavaScript function that takes an array of numbers and 
// // returns a new array with only the odd numbers. 
// //method 1

// const findOddNum = () => {
//   let arr = [8,24,45,49,6]
//   return arr.filter(num => num % 2 !== 0)
//   }
//   console.log(findOddNum())
  
//   //method 2
//   const findOddNum1 = (arr) => {
//     let result = [];
//     for(let i =0; i < arr.length; i++) {
//       if(arr[i] % 2 !== 0){
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }
//   console.log(findOddNum1([1,2,3,4,5,24]));


// //#7 Write a JavaScript program to calculate the factorial of a given number. 
// //method 1
// const findFactorial = (num) => {
//   if(num === 0 || num === 1){
//     return 1;
//   }
//   else {
//     return num*findFactorial(num-1)
//   }
// }

// console.log(findFactorial(2));

// //method 2
// const findFactorial1 = (num) => {
//   if(num === 0 || num === 1){
//     return 1;
//   }
//     let factorial = 1;
//     for(let i = 1; i <= num; i++){
//      factorial *= i;
//     }
//     return factorial;
// }
// console.log(findFactorial1(10));
// //A factorial number is the product of all positive integers, which are equal to or less than the given number. = 5 = (1*2*3*4*5) = 120

// //#8. Write a JavaScript function to check if a given number is prime. 
// //method 1
// const checkPrimeNum = (num) => {
//   if(num < 2) return false;

//   for(let i = 2; i < num; i++) {
//     if (num % i === 0 ) return false;
// }
// return true;
// }
// console.log(checkPrimeNum(9))

// //#9 Write a JavaScript program to find the largest element in a nested array. 
// const findMaxNum = () => {
//   const arr = [[12,45,75], [54,45,2],[23,54,75,2]];
//   const max = Math.max(...[].concat(...arr))
//   return max;
// }
// console.log(findMaxNum());


// //#10 Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
// //0 1 1 2 3 5 8 13 21  
// const fabonacciNum = (num) => {
//   let x = 0;
//   let y = 1;
//   let func = x + y;   // 0 + 1 = 1

//   while (func < num) {
//     console.log(func);
//     x = y;      //x = 1;
//     y = func;   //y = 1;
//     func = x + y;   //func = x + y = 1 + 1 == 2
//   }
// }
// console.log(fabonacciNum(100));

// //#11 Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
// //method 1
// const titleCase = (str) => {
//   return str.replace(/\b\w/g, l => l.toUpperCase());
// }
// console.log(titleCase("hello kaise hai aap?"));


// //# 12 Write a function that takes an array of objects and a key, and returns a new array
//  //sorted based on the values of that key in ascending order. 

// //# 13 Implement a deep clone function in JavaScript that creates a copy of a
//  //nested object or array without any reference to the original.

// const obj1 = {
//     name: "foo",
//     age: 25,
//     address: {
//         street: "123 Main St"
//     }
// }

// //shortcut for copy nested objects without modifying the original object.
// const obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.address.city = "new York";

// //lodash mrthod
// // const obj3 = _.cloneDeep(obj1);
// // obj3.address.pinode = "80008"
// // console.log("obj3", obj3);

// //console.log("obj1", obj1);
// console.log("obj2", obj2);

// function deepClone(input){
//     if(input === null || typeof input !== 'object'){
//         return input;
//     }
//     const initialVal = Array.isArray(input) ? [] : {};
//     return Object.keys(input).reduce((acc, key) => {
//     acc[key] = deepClone(input[key]);
//     return acc;
//     },initialVal)
// }
// console.log(deepClone(obj1));

// //# 14 Write a recursive function to calculate the factorial of a given number. 

// //# 15  Implement a function that takes two sorted arrays and merges them into a
// //  single sorted array without using any built-in sorting functions. 

// function mergeSortedArray(arr1, arr2){
// //[1,2,3,5,9,4,6,7,8]
// for(let i = 0; i < arr2.length; i++){
//     arr1.push(arr2[i])
// }

// for(let i =0; i < arr1.length; i++){
//     let temp;
//     for(let j = i+1; i < arr1.length; j++){
//        if(arr1[i] > arr1[j]){
//         temp = arr1[i];
//         arr1[i] = arr1[j];
//         arr1[j] = temp
//        }
//     }
// }
// return arr1;
// }
// console.log(mergeSortedArray([1,2,3,5,9],[4,6,7,8]))