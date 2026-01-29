function reverseInteger(num) {
  let revNum = 0
  while ( num > 0 ) {
    const lastDigit = num % 10;
    revNum = revNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return revNum
}

console.log(reverseInteger(123456789));