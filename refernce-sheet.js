/* REFERENCE DOCUMENT FOR SNIPPETS TO REMEMBER */

/*-------------------------------------*/
// REVERSE INTEGER

/* Takes a positive integer and reverses the digits mathematically (withoout converting to a string) */

// function reverseInteger(num) {
//   let revNum = 0
//   while ( num > 0 ) {
//     const lastDigit = num % 10;
//     revNum = revNum * 10 + lastDigit;
//     num = Math.floor(num / 10);
//   }
//   return revNum
// }

// console.log(reverseInteger(123456789));

/*-------------------------------------*/
// FRACTION CONVERTER

/* Takes a number as its argument and returns a string that represents that number's simplified fraction. */

// const toFraction = function(number) {
//   // Handel whole numbers and 0.0
//   if ( Number.isInteger(number) || number === 0 ) return `${number}/1`;

//   // Function to find Greatest Common Denomenator
//   const getGCD = (a, b) =>  b === 0 ? a : getGCD(b, a % b);

//   //  Convert decimal to fraction
//   const str = number.toString();
//   const decimalPlace = str.split('.')[1].length;
//   const denominator = 10 ** decimalPlace;
//   const numerator = number * denominator;

//   // Get divisor with getGCD to simplify
//   const divisor = getGCD(numerator, denominator);

//   // Simnplify and return
//   return `${numerator / divisor}/${denominator / divisor}`;

// }

// console.log(toFraction(24.4));

/*-------------------------------------*/
//  BUBBLE SORT AN ARRAY

/* Takes an array and sorts it using this technique without Array.prototype.sort */

const bubbleSort = function() {

}

/*-------------------------------------*/
