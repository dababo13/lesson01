const numberOne = Number(process.argv[2]);
const numberTwo = Number(process.argv[3]);

for (let i = 0; i < numberOne; i++) {
  let array = [];
  for (let j = 0; j < numberTwo; j++) {
    if (i % 2 !== 0) {
      if (j % 2 !== 0) {
        array.push("*");
      } else {
        array.push("-");
      }
    } else {
      if (j % 2 !== 0) {
        array.push("-");
      } else {
        array.push("*");
      }
    }
  }
  console.log(array.join(""));
}
