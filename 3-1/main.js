for (var i = 1; i < 10; i++) {
  array = [];
  for (var j = 1; j < 10; j++) {
    array[j - 1] = i * j;
  }
  console.log(array.join("\t"));
}
