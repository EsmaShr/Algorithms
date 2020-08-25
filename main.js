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

function isPrime(num) {}

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

function deleteDups(arr) {
  const newArr = [...new Set(arr)];
  return newArr;
}

// Extension: solve in 0(n) time

function dupsTests() {
  console.log(deleteDups(["a", "a", "a", "a", "a"]), " -> [a]");
  console.log(deleteDups(["a", "b", "c", "d"]), " -> [a, b, c, d]");
  console.log(
    deleteDups(["a", "b", "c", "d", "a", "b", "c", "d"]),
    " -> [a, b, c, d]"
  );
}
dupsTests();

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
  if (idx > array.length - 1) return count;
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
