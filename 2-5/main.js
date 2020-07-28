let oneYen = (process.argv[2] % 100) % 10;
let tenYen = ((process.argv[2] % 100) - oneYen) / 10;
let hundredYen = (process.argv[2] - tenYen * 10 - oneYen) / 100;
console.log(
  "100円玉" + hundredYen + "枚、10円玉" + tenYen + "枚、1円玉" + oneYen + "枚"
);
