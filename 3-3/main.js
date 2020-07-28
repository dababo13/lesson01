for (i = 0; i < process.argv[2]; i++) {
  //layer
  array = [];

  for (j = 0; j < process.argv[2] - (i + 1); j++) {
    array.push(" ");
  }
  for (k = 0; k < (i + 1) * 2 - 1; k++) {
    array.push("*");
  }
  console.log(array.join("\t"));
}
