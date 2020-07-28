const array = [];
for (let i = 2; i < process.argv.length; i++) {
  array.push(process.argv[i]);
}
//console.log(array);

let f = function (x, y) {
  return x - y;
};
//console.log(array.sort(f));

let sortedArray = array.sort(f);
console.log(sortedArray[2]);
