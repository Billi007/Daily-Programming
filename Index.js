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