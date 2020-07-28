let array = [];
for (let i = 2; i < process.argv.length; i++) {
  array.push(process.argv[i]);
}
//console.log(array.map(Number));

// .map(Number) 文字列を数字に変換

let arrayNumbered = array.map(Number);
arrayNumbered.sort(function (a, b) {
  return a < b ? -1 : 1;
});
console.log(arrayNumbered);

// referred http://kokushin.hatenablog.com/entry/2016/04/08/JavaScript%E3%81%A7%E9%85%8D%E5%88%97%E5%86%85%E3%81%AE%E6%95%B0%E5%80%A4%E3%82%92%E6%98%87%E9%A0%86%E3%83%BB%E9%99%8D%E9%A0%86%E3%81%A7%E3%82%BD%E3%83%BC%E3%83%88%EF%BC%88%E4%B8%A6%E3%81%B3%E6%9B%BF
