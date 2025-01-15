//#1 Write a JavaScript function to calculate the sum of two numbers.  
//# DAY-1

const AddTwoNumbers = (num1, num2) => {
return num1 + num2;
}
AddTwoNumbers(5,9)

//#2. Write a JavaScript program to find the maximum number in an array. 
//# DAY-2
const findMaxNumber = () => {
    const numbers = [3, 5, 2, 81, 100];
    let max = numbers[0]

    for(i = 1; i < numbers.length; i++){
      if(numbers[i] > max){
        max = numbers[i];
      }
    }
    return max;
}
console.log(findMaxNumber());



//# DAY-3
//#3 Write a JavaScript program to find the minimum number in an array. 

const findMinimumNum = () => {
  const numbers = [3, 5, 21, 81, 100];
  let min = numbers[0];

  for(let i=1 ; i < numbers.length; i++){
    if(numbers[i] < min ){
      min = numbers[i];
    }
  }
  return min;
}

console.log(findMinimumNum())

//#3 Write a JavaScript function to check if a given string is a palindrome 

//method 1
const checkPalindrome = (str) => {
  let newstr = str.toLowerCase();
 return newstr === newstr.split('').reverse().join('');
}
console.log(checkPalindrome("Level"));

//method 2
const checkPalindrome2 = (str) => {
  let start = 0;
  let end = str.length - 1;
  let result = true;

  while (end > start) {
    if(str[start] != str[end]){
      result = false;
    }
    start++;
    end--;
  }
  return result;
}
let value = 'level';
console.log(checkPalindrome2(value))  ;


//#4 Write a JavaScript program to reverse a given string. 
//method 1
const reverseString = (str) => {
  return str.split('').reverse().join('')
}
console.log(reverseString("Hello"));

//method 2
const reverseString2 = (str) => {
let result = '';

for(let i = str.length - 1; i >=0; i--){
  result += str[i]
}
return result;
}
console.log(reverseString2("Hello MY name is Tanishka Gupta"));


//#5 Write a JavaScript function that takes an array of numbers and 
//returns a new array with only the even numbers. 
//method 1

const findEvenNum = () => {
let arr = [8,24,45,49,6]
return arr.filter(num => num % 2 === 0)
}
console.log(findEvenNum())

//method 2
const findEvenNum1 = (arr) => {
  let result = [];
  for(let i =0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(findEvenNum1([1,2,3,4,5,24]));

//#6 Write a JavaScript function that takes an array of numbers and 
// returns a new array with only the odd numbers. 
//method 1

const findOddNum = () => {
  let arr = [8,24,45,49,6]
  return arr.filter(num => num % 2 !== 0)
  }
  console.log(findOddNum())
  
  //method 2
  const findOddNum1 = (arr) => {
    let result = [];
    for(let i =0; i < arr.length; i++) {
      if(arr[i] % 2 !== 0){
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(findOddNum1([1,2,3,4,5,24]));


//#7 Write a JavaScript program to calculate the factorial of a given number. 
//method 1
const findFactorial = (num) => {
  if(num === 0 || num === 1){
    return 1;
  }
  else {
    return num*findFactorial(num-1)
  }
}

console.log(findFactorial(2));

//method 2
const findFactorial1 = (num) => {
  if(num === 0 || num === 1){
    return 1;
  }
    let factorial = 1;
    for(let i = 1; i <= num; i++){
     factorial *= i;
    }
    return factorial;
}
console.log(findFactorial1(10));
//A factorial number is the product of all positive integers, which are equal to or less than the given number. = 5 = (1*2*3*4*5) = 120

//#8. Write a JavaScript function to check if a given number is prime. 
//method 1
const checkPrimeNum = (num) => {
  if(num < 2) return false;

  for(let i = 2; i < num; i++) {
    if (num % i === 0 ) return false;
}
return true;
}
console.log(checkPrimeNum(9))

//#9 Write a JavaScript program to find the largest element in a nested array. 
const findMaxNum = () => {
  const arr = [[12,45,75], [54,45,2],[23,54,75,2]];
  const max = Math.max(...[].concat(...arr))
  return max;
}
console.log(findMaxNum());
