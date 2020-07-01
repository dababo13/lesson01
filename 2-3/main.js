let number = process.argv[2];
if (number < 24) {
  console.log(number);
} else {
  console.log(number % 24);
}
