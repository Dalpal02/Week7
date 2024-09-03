     // Assignment Begin
    //  Assignment 1

// Step 1: Create the array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Calculate the difference between the last and first element programmatically
let firstAge = ages[0];
let lastAge = ages[ages.length - 1];
// Reminder: The "-1" is to account for the array beginning at zero. 
let difference = lastAge - firstAge;
console.log(`Difference between the first and last age: ${difference}`);

// Step 2: Add a new age to the array
ages.push(45);  // Adding a new age
console.log(`Updated ages array: ${ages}`);

// Recalculate the difference with the updated array
firstAge = ages[0];
lastAge = ages[ages.length - 1];
difference = lastAge - firstAge;
console.log(`Updated difference between the first and last age: ${difference}`);

// Step 3: Calculate the average age using a loop
let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
  totalAge += ages[i];
}
let averageAge = totalAge / ages.length;
console.log(`Average age: ${averageAge}`);

// Assignment 2

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i];
  if (i < names.length - 1) {
    concatenatedNames += ', ';
  }
}
console.log(`Concatenated names: ${concatenatedNames}`);

// Assignment 3

console.log("array[array.length - 1]");

// Assignment 4

console.log("array[0]")

// Assignment 5

let nameLengths = names.map(names => names.length);
console.log(nameLengths);

// Assignment 6

let sumOfNameLengths = 0
for (let i = 0; i < nameLengths.length; i++) {
sumOfNameLengths += nameLengths[i];}
console.log(sumOfNameLengths);

// Assignment 7

function greeting(word, n) {
  let result = ""
for (let i = 0; i < n; i++) {
  result += word;
}
return result;
}

console.log(greeting("Hello", 3));

// Assignment 8

function fullName(firstName, lastName){
  return `${firstName} ${lastName}`;
}
console.log(fullName("Dallin", "Larsen"));

// Assignment 9

function isSumGreaterThan100(numbers){
  let sum = 0;

  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum > 100;
}
console.log(isSumGreaterThan100([25, 28, 75]));

// Assignment 10

function averageOfNumbers(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
    return sum / numbers.length
}

console.log(averageOfNumbers([1, 28, 36, 14, 50]));

// Assignment 11

function averageOfArray(numbers){
let sum = 0
for (i = 0; i < numbers.length; i++){
  sum += numbers[i];}
  return sum / numbers.length;
}
function isArrayOneGreaterThanArrayTwo(array1, array2){
let average1 = averageOfArray(array1);
let average2 = averageOfArray(array2);

return average1 > average2;

}

console.log(isArrayOneGreaterThanArrayTwo([1,2,3,4,8], [1,2,3,4,5]));

// Assignment 12

function willBuyDrink(isHotOutside, moneyInPocket){
  if (isHotOutside && (moneyInPocket > 10.50)){
    return true
  } else{ 
    return false
  }
}
console.log(willBuyDrink(true, 20));

// Assignment 13

// This function checks to see if the individual is both 18 years of age or older and currently holds a Costco membership. If SourceBuffer, the individual is eligible for the Program.

function checkEligibility(age, isMember){
if (age >= 18 && (isMember = true)){
  return "Eligible"
} else{
  return "Not Eligible"
}}
console.log(checkEligibility(18, true));
