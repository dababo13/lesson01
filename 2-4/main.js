let getMonth = process.argv[2];
if (getMonth == 2 || getMonth == 3 || getMonth == 4) {
  console.log("春");
} else if (getMonth == 5 || getMonth == 6 || getMonth == 7) {
  console.log("夏");
} else if (getMonth == 8 || getMonth == 9 || getMonth == 10) {
  console.log("秋");
} else {
  console.log("冬");
}
