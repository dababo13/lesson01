const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

const reversedNum = (num) =>
  parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);
// console.log(reversedNum(process.argv[2]));
// console.log(reversedNum(process.argv[3]));

let reservedNum1 = reversedNum(process.argv[2]);
let reservedNum2 = reversedNum(process.argv[3]);
console.log(reservedNum1 + reservedNum2);
