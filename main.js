// ex. mode([1,1,1,3,3,3]) === 3 // true, because 3 and 1 are tied as the mode, but 3 > 1 and the mode function will return the greater of the mode values
function mode(array) {
  let mode1;
  const obj = array.reduce((acc, el) => {
    let key = el;
    if (key in acc) acc[el] += 1;
    else acc[key] = 1;
    return acc;
  }, {});
  for (const key in obj) {
    if (Math.max(...Object.values(obj)) === obj[key]) mode1 = key;
    break;
  }
  return mode1;
}

// Extension: solve this in 0(n) time

function modeTests() {
  console.log(mode([1, 2, 2, 1, 1, 3, 7, 3]), " -> 1");
  console.log(mode([1]), "1");
  console.log(mode([2, 2, 2, 2, 3, 3, 3]), " -> 2");
}

modeTests(); // uncomment to test!

////////////////////////////
//     Challenge 2
////////////////////////////

// FIND MEDIAN

// Given an array, return its median (the element whose value falls in the middle of all other values in the array)
// Ex: [1, 2, 3, 4, 5], median is 3
// Ex: [10, 4, 7, 6, 1], median is 6

function median(array) {}

function medianTests() {
  console.log(median([1, 2, 3, 4, 5]), " -> 3");
  console.log(median([10, 4, 7, 6, 1]), " -> 6");
  console.log(median([2, 2, 2, 2, 3, 3, 3]), " -> 2");
}

// medianTests() // uncomment to test!

////////////////////////////
//     Challenge 3
////////////////////////////

// IS PRIME

// Modify the function so that it return whether a number is prime

function isPrime(num) {
  if (num === 1) return false;
  if (num % num === 0 && num % 1 === 0) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  } else return false;
}

// Extension: solve this in 0(logn) time

function primeTests() {
  console.log(isPrime(1), " -> false");
  console.log(isPrime(2), " -> true");
  console.log(isPrime(3), " -> true");
  console.log(isPrime(4), " -> false");
}

// primeTests() // Uncomment to check code!

////////////////////////////
//     Challenge 4
////////////////////////////

// RANSOM NOTE

// Given two strings, write a function that determines if you can build the second string with the characters of the first
// If you have more than one of a certain character in the second string, you must have at least as many of those characters in the first
// Imagine a ransom note (second string) constructed from cut-out letters from a magazine (first string). Except you also need to cut out spaces for some reason.
// Capitalization matters!

function ransomNote(magazine, message) {
  const msg = message.split(" ");
  const mgz = magazine.split(" ");
  const regex = /^[A-Z]/; // if a letter is uppercase
  if (
    message.length <= magazine.length &&
    regex.test(message) === regex.test(magazine) // test if both true
  ) {
    msg.forEach((el, i) => {
      if (mgz.includes(el)) mgz.splice(i, 1);
      else return false;
    });
    return true;
  } else return false;
}

function ransomTests() {
  console.log(
    ransomNote("this is a string!!!", "is this a string!!"),
    " -> true"
  );
  console.log(
    ransomNote("this is a string!!", "this is a string!!!"),
    " -> false"
  );
  console.log(ransomNote("THIS IS A STRING", "this is a string"), " -> false");
  console.log(ransomNote("this is a string", ""), " -> true");
  console.log(ransomNote("this is a a", "this is a string"), " -> false");
}

// ransomTests() // Uncomment to check code!

////////////////////////////
//     Challenge 5
////////////////////////////

// DELETE DUPS

// Write a function that takes in an array and returns a new array with duplicates removed

function deleteDups(arr) {
  const newArr = arr.filter((el, idx) => {
    if (arr.indexOf(el) === idx) return el;
  });
  return newArr;
}
// duplicates with new Set
// write a function that takes a number of arrays and returns an array with no duplicates
function uniteUnique(...arr) {
  const array = arr.flat();
  return [...new Set(array)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Extension: solve in 0(n) time

function dupsTests() {
  console.log(deleteDups(["a", "a", "a", "a", "a"]), " -> [a]");
  console.log(deleteDups(["a", "b", "c", "d"]), " -> [a, b, c, d]");
  console.log(
    deleteDups(["a", "b", "c", "d", "a", "b", "c", "d"]),
    " -> [a, b, c, d]"
  );
}

// dupsTests() // Uncomment to check code!

////////////////////////////
//     Challenge 6
////////////////////////////

// FIND UNIQUE

// Write a function that takes in array in which every number appears exactly twice,
// except for one number which appears exactly once.
// The function should return the number that appears exactly once.
// ex. uniqueNumber([1,1,4,2,3,2,3]) should return the number 4 since it is the number that appears exactly once in the array

function uniqueNumber(array) {
  const arr = array.filter((el, idx) => {
    if (array.indexOf(el) !== idx) return el;
  });
  const once = array.filter((el) => {
    if (!arr.includes(el)) return el;
  });
  return once.join();
}

function uniqueNumberTests() {
  console.log(uniqueNumber([1, 2, 2, 1, 3, 7, 3]), " -> 7");
  console.log(uniqueNumber([1, 2, 2, 1, 3]), " -> 3");
  console.log(
    uniqueNumber([1, 2, 2, 1, 3, 7, 3, 5, 5, 6, 6, 7, 9, 8, 9]),
    " -> 8"
  );
}

// uniqueNumberTests() // uncomment to test!

////////////////////////////
//     Challenge 7
////////////////////////////

// PALINDROME

// Modify the function so that it returns true if string is a palindrome (the string is the same forward and backwards)
// Otherwise, should return false
// The parameters entered may have puncutations and symbols, but they should not affect whether the string is a palindrome
// Ignore capitalization

// Hint: look up how to use regex in JS - specifically how to rip away all characters that aren't letters

function palindrome(string) {
  const arr = string
    .toLowerCase()
    .replace(/[^a-z0-9+]+/gi, "")
    .split("");
  while (arr.length > 0) {
    if (arr[0] === arr[arr.length - 1]) {
      arr.splice(0, 1);
      arr.splice(arr.length - 1, 1);
    } else return false;
  }
  return true;
}

function palindromeTests() {
  console.log(
    palindrome("Anne, I vote more cars race Rome-to-Vienna"),
    " -> true"
  );
  console.log(palindrome("llama mall"), " -> true");
  console.log(palindrome("jmoney"), " -> false");
}

// palindromeTests() // uncomment to check code!

// Extension: solve in 0(n) time

// codewars duplicates
const removeDuplicateIds = (obj) => {
  // sort the object in a ascending order for the keys store it in a new obj
  const objKeys = Object.keys(obj).sort((a, b) => a - b);
  // sort the keys of the obj to iterate thru it later
  const objKeys2 = Object.keys(obj).sort((a, b) => a - b);
  const newObj = objKeys.reduce((acc, el) => {
    acc[el] = obj[el];
    return acc;
  }, {});
  // iterate thru the keys of newObj
  const outputObj = objKeys.reduce((object, key) => {
    // create a var array output
    // iterate thru each value arr of each key
    let outputArr = newObj[key].filter((el, idx) => {
      // initialize a var that tells to return the el into the outputArr
      let shouldPush = true;
      // check if each el does not have duplicates in the same arr
      if (newObj[key].indexOf(el) === idx) {
        //iterate thru each key value of the newObj using the second array keys
        objKeys2.forEach((keys) => {
          // check in each array value of each key if el is found
          // if found do not return the el
          if (keys !== key && newObj[keys].includes(el)) shouldPush = false;
        });
        // if not found return the el to the outputArr
        if (shouldPush) return el;
      }
    });
    // pop off the first key of the arr so we check only the next arrays
    objKeys2.shift();
    // assign each arr output to each key to the object
    object[key] = outputArr;
    return object;
  }, {});
  return outputObj;
};

const input = {
  "11": ["P", "R", "S", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "432": ["A", "A", "B", "D"],
};
/* output = {
"11": ["P", "R", "S"],
"53": ["C"],
"236": ["L", "X", "G", "H"],
"432": ["A", "B", "D"],
} */
console.log(removeDuplicateIds(input));

// mock interview Richie

/* 3. Write a function that will accept an array of objects where each object represents 
a student. This function will return a function that when provided with a student id AND 
the student's pin, their GPA is returned. Return "failed login" if any information is incorrect.

example student object:
[{id: 1, firstName: "Paul", lastName: "George", pin: 123, GPA: 4.0}, {id: 2, firstName: 
  "Mia", lastName: "Smith", pin: 456, GPA: 3.6}, {id: 3, firstName: "James", lastName: "Jones", pin: 789, GPA: 3.1}] */

const studentsGPA = (array) => {
  return (ID, PIN) => {
    return array.reduce((acc, el) => {
      if (el.id === ID && el.pin === PIN) acc = el.GPA;
      return acc;
    }, "failed login");
  };
};

const studentGPA = studentsGPA([
  { id: 1, firstName: "Paul", lastName: "George", pin: 123, GPA: 4.0 },
  { id: 2, firstName: "Mia", lastName: "Smith", pin: 456, GPA: 3.6 },
  { id: 3, firstName: "James", lastName: "Jones", pin: 789, GPA: 3.1 },
]);

console.log(studentGPA(3, 789));
console.log(studentGPA(1, 766));

/* 4. Write a function called "highestGPA" that returns the object representing the 
student with the highest GPA. Use the student object array from the previous question as your input.
 */

const highestGPA = (array) => {
  return array.reduce((acc, el, idx) => {
    if (el.GPA > array[idx - 1].GPA) acc = el;
    return acc;
  });
};

console.log(
  highestGPA([
    { id: 1, firstName: "Paul", lastName: "George", pin: 123, GPA: 4.0 },
    { id: 2, firstName: "Mia", lastName: "Smith", pin: 456, GPA: 3.6 },
    { id: 3, firstName: "James", lastName: "Jones", pin: 789, GPA: 3.1 },
  ])
);
/* 5. Write a function that returns the number of times a specific number is 
found in an array. The function will accept this number and the array. Note: use recursion.


getCount([3, 1, 56, 67, 22, 98, 22, 22], 22) // expected: 3

*/
const numberTimes = (array, num, idx = 0, count = 0) => {
  // add to the arguments an idx starting at 0 / count starting at 0
  // base case the be when the idx is at the end of the array
  // return the count of how many time the num was found
  if (!array[idx]) return count;
  // check if the el is equal to the num
  if (array[idx] === num) {
    // increment the count
    count++;
  }
  // increment the idx
  // return the invocation of the same function
  return numberTimes(array, num, ++idx, count);
};

console.log(numberTimes([3, 1, 56, 67, 22, 98, 22, 22], 22));
console.log(numberTimes([3, 1, 3, 67, 3, 98, 3, 22], 3));

/* Find the smallest common multiple of the provided parameters that can
 be evenly divided by both, as well as by all sequential numbers in the range between these parameters. */

function smallestCommons(arr) {
  // sort arr in an ascending order
  arr = arr.sort((a, b) => a - b);
  // create an arr that holds all number between the two nums
  const newArr = [];
  for (let i = arr[0]; i <= arr[1]; i++) newArr.push(i);
  // iterate thru the 2nd arr
  for (let num = arr[0]; num < Infinity; num++) {
    // check if the num is divisible by all num in arr
    let isDivisible = newArr.every((el) => num % el === 0);
    // return the num
    if (isDivisible) return num;
  }
}
console.log(smallestCommons([1, 5]));

// Declare a variable 'number' and set it to the value 10.

const number = 10;
/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/
// const addNumbers = (num) => {
//   // initiliaze a var sum and set to 0
//   let sum = 0;
//    // iterate from 1 to the number num
//   for (let i = 0; i<= num; i++){
//  // add the number to sum
//   sum += i;
//   }
//   // return the sum
//   return sum
// }

const addNumbers = (num, sum = 0, counter = 0) => {
  if (counter === num) return sum;
  return sum + addNumbers(num, ++sum, ++counter);
};

// Check that your 'addNumbers' function is working correctly by passing your variable 'number' to the 'addNumbers' function

console.log(addNumbers(number));
console.log(addNumbers(4));

// Construct your own reduce function that accepts an array, a callback, and an initial value and returns a single value.
const reduce = (cb, array, initV) => {
  // initiliaze an acc var
  let acc;
  // check if initiV is undefined
  // if true acc equal to first el of the array
  if (initV === undefined) acc = array[0];
  // if false acc = initiV
  else acc = initV;
  // iterate thru the array
  for (let i = 0; i < array.length; i++) {
    // reassign the acc to the output of calling the cb with each el of the arr and the acc as arguments

    acc = cb(acc, array[i]);
  }
  // return acc value
  return acc;
};

const numbers = [4, 10, 5];
const addTwo = (a, b) => a + b;
console.log(reduce(addTwo, numbers, 0));

//Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
//(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")

const isPalindrome = (str) => {
  const arr = str.split("");
  // iterate thru the str
  while (arr[0] !== undefined) {
    // check if the first and the last letters of the str are the same
    if (arr[0] === arr[arr.length - 1]) {
      // if true delete both letters and keep the iteration
      arr.splice(0, 1);
      arr.splice(arr.length - 1, 1);
      // if false return false
    } else return false;
  }
  // return true
  return true;
};

// console.log(isPalindrome("RACECAR")) // true
// console.log(isPalindrome("hello")) // false
/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/
const between50And500 = (num) => {
  // check if the num is greater than 45 AND less than 500
  // if true return true
  if (num < 500 && num > 45) return true;
  // if false return false
  else return false;
};

// console.log(between50And500(45)) // false
// console.log(between50And500(472)) // true
/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/
const divBy100 = (num) => {
  if (num % 100 === 0) return true;
  else return false;
};

console.log(divBy100(120)); //false
console.log(divBy100(600)); // true

/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/
const negativeOrEven = (num) => {
  if (num < 0 || num % 2 === 0) return true;
  else return false;
};

console.log(negativeOrEven(7)); // false
console.log(negativeOrEven(-3)); //true

/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
"passAllTests" should pass your value argument to each function in array. If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false.
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500, divisible by 100, and a negative number OR even. Then test the number 250.
*/
const passAllTests = (arr, num) => {
  // loop over the arr of func
  for (let i = 0; i < arr.length; i++) {
    // check if the output of calling each func is false
    // break out the loop and return false
    if (!arr[i](num)) return false;
  }
  // after the loop ends return true
  return true;
};

const tests = [between50And500, divBy100, negativeOrEven];
console.log(passAllTests(tests, 300)); //true
console.log(passAllTests(tests, 250)); //false

// Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.
const getLength = (str, idx = 0) => {
  // initiliaze an idx as a para
  // base case: when the el of the arr is undefined
  // return the idx adding one
  if (!str[idx]) return idx;
  // recursive call with incrimenting the idx
  return getLength(str, ++idx);
};

// console.log(getLength('barbara')) // 7
// console.log(getLength('')) //0

// Define a function "memoize" that takes one argument, a function, and returns a function. When invoked, memoize creates an object that tracks calls to the returned function, where each input is associated with its output every subsequent call to that return fxn w/ the same arg will return the output direct to the obj, instead of invoking the original fxn
const memoize = (func) => {
  // initiliaze an empty obj
  const obj = {};
  // return a func def that takes a certain num of inputs
  return (input) => {
    // check if the input is present in the obj
    if (input in obj) {
      // if true return the value of the input key
      console.log(obj[input]);
      return obj[input];
    } else {
      // if false store the input as key and the result of invoking the finc with the input as the value
      obj[input] = func(input);
      // return the value
      return func(input);
    }
  };
};

const memo = memoize(isPalindrome);
// console.log(memo('hier'));
// // console.log(memo('foof'))
// console.log(memo('hier'));

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

/// third interview

// Declare a variable 'myRandomString' and set it to the value 'Codesmith'

const myRandomString = "Codesmith";
// console.log(myRandomString)
// /*
// Create a function 'doubleChar' that takes a string as an argument and returns a string in which each character is repeated once.
// For example, if we pass the string 'Hello World!!' to 'doubleChar' it should return the string 'HHeelllloo  WWoorrlldd!!'
// */

const doubleChar = (str, idx = 0, newStr = "") => {
  // initiliaze a idx to 0
  // initiliaze a newStr
  // base case: when the idx is equal to the last idx of the arr
  if (!str[idx]) return newStr;
  // add the same letter to the new str
  newStr += str[idx] + str[idx];
  // recursive call invoking the func with incrementing the idx with the newStr and the original str
  return doubleChar(str, ++idx, newStr);
};

console.log(doubleChar("Hello World!!"));

//'HHeelllloo  WWoorrlldd!!'

// Declare a variable 'numbers' and set it equal to an array containing the values 2, -14, -8, 22, 97, and 88

const numbers = [2, -14, -8, 22, 97, 88];

/*
Declare a function 'isOdd' that takes one input (a number) and return a boolean indicating whether or not the number is odd.
For example, if we call 'isOdd' with an input of 3 it will return true.
*/

const isOdd = (num) => {
  if (num % 2 !== 0) return true;
  else return false;
};

// console.log(isOdd(3)) // true
// console.log(isOdd(4))

/*
Create a function 'atLeastOne' that takes in two inputs (an array and a callback function).
The callback function will return a boolean value.
The callback function will be called on every element in the array. If the callback function being called returns true for any of the elements in the array then 'atLeastOne' should return true. Otherwise it should return false.
*/

const atLeastOne = (array, cb) => {
  // iterate thru the arr
  for (let i = 0; i < array.length; i++) {
    // check if the output of invoking the cb on the el is true
    // return true
    if (cb(array[i]) === true) return true;
  }
  // return false
  return false;
};

console.log(atLeastOne(numbers, isOdd)); // true

/*
Write a function "memoryMaker" that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the returned function is called, return an array of all the previously passed values.
example:
const iRemember = memoryMaker();
iRemember('hello'); -> ['hello']
iRemember(1); -> ['hello', 1]
iRemember('world'); -> ['hello', 1, 'world']
iRemember(true); -> ['hello', 1, 'world', true]
*/

const memoryMaker = () => {
  // initiliaze an empty arr that hols all the args passed in the returned function
  const arr = [];
  // return a function def that takes one input
  return (input) => {
    // push the input into the arr
    arr.push(input);
    // return the arr
    return arr;
  };
};

// const iRemember = memoryMaker();
// console.log(iRemember('hello'));
// console.log(iRemember(1));
// console.log(iRemember('world'));
// console.log(iRemember(true));

/*
Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.
Example:
sumAllElements([1,2,3,4], 10) -> 20
Note: Do NOT use any native JS methods, or loops
*/
const sumAllElements = (array, num, idx = 0) => {
  // initiliaze an idx to 0
  // base case: when the last el of the array at the idx is undefined
  // return the num
  if (!array[idx]) return num;
  // reassign the num to the same num adding to it the el of the array
  num += array[idx];
  // recursive call invoke the function with incrementing the idx
  return sumAllElements(array, num, ++idx);
};

console.log(sumAllElements([1, 2, 3, 4], 10));

/*
I have an array stock_prices_yesterday where:
- The indices are the time in minutes past trade opening time, which was 9:30am local time
- The values are the prices in dollars of Apple stock at the time
For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
Write a function 'bestProfit' for computing the best profit I could have made from 1 purchase
and 1 sale of 1 Apple stock yesterday
Return 0 if no profit is possible OR if input is invalid.
More examples:
bestProfit([ 100, 1, 123, 120 ]); // 122
bestProfit([ 100, 100, 100, 100 ]); // 0
bestProfit([ 100, 88, 44, 2 ]); // 0
bestProfit([ 100, 88, 99, 300 ]); // 212
*/
const bestProfit = (stocks) => {
  // check if the first el of the arr is less than the last el
  if (stocks[stocks.length - 1] > stocks[0]) {
    // if true
    // get the max and the min of the arr
    // initiliaze a var profit that hold the substraction the max - min
    const profit = Math.max(...stocks) - Math.min(...stocks);
    // return the profit var
    return profit;
    // if false return 0
  } else return 0;
};

console.log(bestProfit([100, 1, 123, 120]));
console.log(bestProfit([100, 100, 100, 100]));
console.log(bestProfit([100, 88, 44, 2]));
console.log(bestProfit([100, 88, 99, 300]));




// 1
// create a function that accepts a string and returns an object of the count of the vowels in that string.
// vowelCount('Amazing'); // {a:2, i:1}
function vowelCount(str) {
  // initiliaze an empty obj 
  const obj = {};
  // initiliaze an arr of all the vowels 
  const vowels = ['a', 'e', 'i', 'o','u'];
  // convert the str (lowercase) to an arr 
  const array = str.toLowerCase().split('');
  // iterate thru the arr
  return array.reduce((acc, el)=>{
  // check if it is a vowel 
    if(vowels.includes(el) {
        // check if the el is present in the obj
       if(el in acc) {
       // if true increment its value by one
      acc[el] += 1;
       // if false store the el as a key in the obj assign the value to one
    } else acc[el] = 1;
       }
        // return the obj
      return acc;
 
  }, {})
}							

// 2
// create a function that accepts an array of numbers and returns an array with all the duplicates removed.
// dedupe([1,2,1,2,1]) // [1,2]
// dedupe([0,0,0]) // []
function dedupe (array) {
// initialize an array that holds all the non duplicate
  // iterate thru the arr
  const output = array.filter((el, idx)=> idx === array.indexOf(el));
     // check if the idx of the el is equal to the output of using the indexof method with that el
    // push the el into the output array
  // return the arr
  return output;
}

// 3
/* create a function that accepts two arrays as arguments and return a boolean value. The function will 
return true if the second array contains exactly all the squared elements from the first array. Otherwise 
the function returns false  */
// squares([1,2,2], [4,1,4]) // true
// squares([1,2,3], [9,4,1,10]) // false
// squares([1,3,3], [9,1,1]) // false
function squares(arr1, arr2) {
// iterate thru the first array
  if(arr1.length === arr2.length){
  for(let i=0; i < arr1.length; i++ ){
   // check if the el*el is present into the second arr
    // ** 2
    if(arr2.includes(arr[i]**2)) {
  // get the idx of that el*el in the second arr
  // delete that el from the second arr
      arr2.splice((arr2.indexOf(arr[i]**2), 1);
  // if not true return false 
    } else return false;
  } 
  } else return false;
  // return true
  return true;
}

// 4
/* Create a function that takes an array of binary values as an arguments and returns the maximum of times the 
value of one was found consecutively in the array. */
// longestOnes([0, 1, 1, 0, 1]); // 2
// longestOnes([0, 1, 0, 1, 1, 1, 0, 1, 1]); // 3
// longestOnes([0, 1, 1, 1, 1]); // 4
// longestOnes([1,1,0,1,1,1,1]) // 2 ----> 0
function longestOnes(array, idx=0, output=[], counter=0) {
// initiliaze an idx to 0
// initialize an empty arr
// initiliaze a counter 
// base case: when the el of the input array is undefined return the output arr
  // get the max value of the output array
  if(!array[idx]){ 
    output.push(counter);
    return Math.max(...output);
  }
// check if the el is equal to one 
  // if true increment the counter
  if (array[idx]===1) counter++;
   // if false push the counter to the output 
   // reset the counter to 0
  else {
    output.push(counter);
    counter = 0; 
  }
// recursive call with invoking the same func with increment the idx
  return longestOnes(array, ++idx, output, counter);
}




